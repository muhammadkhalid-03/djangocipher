from django.core.mail import send_mail
import json
from rest_framework.decorators import action
from rest_framework.response import Response
from catalog.models import Catalog, Contact, ScrambledText
from catalog.serializers import CatalogSerializer, ContactSerializer, ScrambledTextSerializer
from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from catalog.utils import encipher, metropolisHastings, permuteAlph
from catalog.gpt2 import tokenizer, model
import torch
import os
from django.conf import settings
from multiprocessing import Process, Queue



transition_matrix_file = os.path.join(settings.BASE_DIR, 'catalog', 'TransitionMatrix.json')
with open(transition_matrix_file) as reader:
    M = json.load(reader)

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [AllowAny]

    @action(detail=False, methods=['post'])
    def contact_form(self, request):
        name = request.data['name']
        email = request.data['email']
        message = request.data['message']
        new_contact_entry = Contact.objects.create(name=name, email=email, message=message)
        self.get_serializer(new_contact_entry)

        # send an email - not needed I'll just leave it cause I'm too lazy to deal with bugs if deleted
        send_mail(
            subject=f"Contact Form Submission from {name}",
            message=f"Name: {name}\nEmail: {email}\nMessage: {message}",
            from_email='muhammadkhalid200314@gmail.com',
            recipient_list=['muhammadkhalid200314@gmail.com'],
            fail_silently=False,
        )
        return Response({'status': 'success', 'message': 'Email sent successfully'}, status=status.HTTP_200_OK)

class ScrambledTextViewSet(viewsets.ModelViewSet):
    queryset = ScrambledText.objects.all()
    serializer_class = ScrambledTextSerializer

    @action(detail=False, methods=['post'])
    def scramble_message(self, request):
        alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                    ' ', ',', '.', ':', ';', '!', '?', '/']

        # extract data from request
        message = request.data['scrambled_text']
        enciphered_message = encipher(message, permuteAlph(alphabet), alphabet)
        print(message)
    
        new_scrambled_entry = ScrambledText.objects.create(scrambled_text=enciphered_message)
        serializer = self.get_serializer(new_scrambled_entry)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    



class CatalogViewSet(viewsets.ModelViewSet):
    queryset = Catalog.objects.all()
    serializer_class = CatalogSerializer
    permission_classes = [AllowAny]

    def compute_perplexity(self, text):
        inputs = tokenizer.encode(text, return_tensors="pt")
        with torch.no_grad():
            outputs = model(inputs, labels=inputs)
            loss = outputs.loss
        return torch.exp(loss).item()

    # wanna keep this even though running gpt-2 locally. Maybe I need it in the future
    # def useAI(self, messages):
    #     client = OpenAI()
    #     prompt = f'''
    #     Out of the following paragraphs, return only the most coherent one and no other comments:
    #     {messages}
    #     '''
    #     completion = client.chat.completions.create(
    #         model="gpt-4o-mini",
    #         messages=[
    #             {"role": "system", "content": "You are a helpful assistant."},
    #             {
    #                 "role": "user",
    #                 "content": prompt
    #             }
    #         ]
    #     )
    #     print("AI response given")
    #     return completion.choices[0].message.content


    @action(detail=False, methods=['post'])
    def process_message(self, request):
        alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                    ' ', ',', '.', ':', ';', '!', '?', '/']
        # print("Request Data:", request.data)  # Debug line
        # print("Request Data:", request.data)
        encipheredMessage = request.data



        # multiple processes to optimize getting result
        print("starting the process")
        numProcesses = 7
        queues = [Queue() for _ in range(numProcesses)]
        processes = []

        # create and start multiple processes for MCMC sampling I'm a genius for thinking of this
        for i in range(numProcesses):
            p = Process(target=metropolisHastings, args=(alphabet, encipheredMessage, M, queues[i]))
            processes.append(p)
            p.start()

        rev_ciphers = []

        # wait for all processes to finish and retrieve results from queues
        for i, p in enumerate(processes):
            p.join()
            rev_ciphers.append(queues[i].get())

        print("done processing") # Logging message for MCMC finish

        # unscramble the message with the best reverse cipher
        unscrambled_messages = [encipher(encipheredMessage, alphabet, rev_cipher) for rev_cipher in rev_ciphers]

        # array of (paragraph, score)
        scored_paragraphs = [(para, self.compute_perplexity(para)) for para in unscrambled_messages]

        # most coherent paragraph with min perplexity score
        best_paragraph = min(scored_paragraphs, key=lambda x: x[1])[0]


        new_catalog_entry = Catalog.objects.create(text=best_paragraph)
        serializer = self.get_serializer(new_catalog_entry)


        # return the result as a response
        return Response(serializer.data, status=status.HTTP_201_CREATED)
