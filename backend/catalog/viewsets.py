from django.core.mail import send_mail
import json
import numpy as np
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



transition_matrix_file = os.path.join(settings.BASE_DIR, 'backend', 'catalog', 'TransitionMatrix.json')
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

        # Send email
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

        # Extract data from request
        # message = request.data
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


    @action(detail=False, methods=['post'])
    def process_message(self, request):
        alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                    ' ', ',', '.', ':', ';', '!', '?', '/']
        # print("Request Data:", request.data)  # Debug line
        # Extract data from request
        print("Request Data:", request.data)
        enciphered_message = request.data



        # Load transition matrix from file
        # Find best reverse cipher
        rev_ciphers = [metropolisHastings(alphabet, enciphered_message, M) for i in range(10)]

        # Unscramble the message with the best reverse cipher
        unscrambled_messages = [encipher(enciphered_message, alphabet, rev_cipher) for rev_cipher in rev_ciphers]
        scored_paragraphs = [(para, self.compute_perplexity(para)) for para in unscrambled_messages]
        best_paragraph = min(scored_paragraphs, key=lambda x: x[1])[0]

        new_catalog_entry = Catalog.objects.create(text=best_paragraph)
        serializer = self.get_serializer(new_catalog_entry)

        # Return the result as a response
        return Response(serializer.data, status=status.HTTP_201_CREATED)







# from django.core.mail import send_mail
# import json
# import numpy as np
# from rest_framework.decorators import action
# from rest_framework.response import Response
# from catalog.models import Catalog, Contact, ScrambledText
# from catalog.serializers import CatalogSerializer, ContactSerializer, ScrambledTextSerializer
# from rest_framework import viewsets, status
# from rest_framework.permissions import AllowAny
# from catalog.utils import encipher, metropolisHastings, permuteAlph
# from catalog.gpt2 import tokenizer, model
# import torch



# transition_matrix_file = '/Users/muhammadkhalid/Desktop/CSC395/homework4/TransitionMatrix.json'  # Update with the correct path
# with open(transition_matrix_file) as reader:
#     M = json.load(reader)


# class ContactViewSet(viewsets.ViewSet):
#     @action(detail=False, methods=['post'])
#     def contact_form(self, request):
#         name = request.data['name']
#         email = request.data['email']
#         message = request.data['message']

#         # Send email
#         send_mail(
#             subject=f"Contact Form Submission from {name}",
#             message=f"Name: {name}\nEmail: {email}\nMessage: {message}",
#             from_email='muhammadkhalid200314@gmail.com',
#             recipient_list=['muhammadkhalid200314@gmail.com'],
#             fail_silently=False,
#         )
#         return Response({'status': 'success', 'message': 'Email sent successfully'}, status=status.HTTP_200_OK)

# class ScrambledTextViewSet(viewsets.ViewSet):

#     @action(detail=False, methods=['post'])
#     def scramble_message(self, request):
#         alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
#                     'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
#                     'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
#                     'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
#                     ' ', ',', '.', ':', ';', '!', '?', '/']

#         # Extract data from request
#         message = request.data.get('scrambled_text')
#         # message = request.data['scrambled_text']
#         enciphered_message = encipher(message, permuteAlph(alphabet), alphabet)
    
#         return Response({'scrambled_text': enciphered_message}, status=status.HTTP_201_CREATED)



# class CatalogViewSet(viewsets.ViewSet):

#     def compute_perplexity(self, text):
#         inputs = tokenizer.encode(text, return_tensors="pt")
#         with torch.no_grad():
#             outputs = model(inputs, labels=inputs)
#             loss = outputs.loss
#         return torch.exp(loss).item()


#     @action(detail=False, methods=['post'])
#     def process_message(self, request):
#         alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
#                     'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
#                     'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
#                     'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
#                     ' ', ',', '.', ':', ';', '!', '?', '/']
#         print("Request Data:", request.data)  # Debug line
#         # Extract data from request
#         # enciphered_message = request.data['text']
#         enciphered_message = request.data.get('text')



#         # Load transition matrix from file
#         # Find best reverse cipher
#         rev_ciphers = [metropolisHastings(alphabet, enciphered_message, M) for i in range(10)]

#         # Unscramble the message with the best reverse cipher
#         unscrambled_messages = [encipher(enciphered_message, alphabet, rev_cipher) for rev_cipher in rev_ciphers]
#         scored_paragraphs = [(para, self.compute_perplexity(para)) for para in unscrambled_messages]
#         best_paragraph = min(scored_paragraphs, key=lambda x: x[1])[0]


#         # Return the result as a response
#         return Response({'text': best_paragraph}, status=status.HTTP_201_CREATED)


