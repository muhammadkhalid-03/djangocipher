import random
import json
import math
import numpy as np


"""
Function to generate random cipher given an alphabet.

Inputs:
- alphabet: List of characters in the alphabet

Outputs:
- permuted: Random list of unique characters in the alphabet
"""


def permuteAlph(alphabet):
    """
    Returns a randomly permuted version of the alphabet.
    """
    permuted = random.sample(alphabet, len(alphabet))
    return permuted


"""
Function to encipher a message.

Inputs:
- message (str): The message to encipher
- cipher (list): The cipher which is a list of characters to use on the message
- alphabet (list): A list of characters making up the original alphabet

Outputs:
- encMessage (str): The enciphered message
"""


def encipher(message, cipher, alphabet):
    cipherMap = {}
    for i, char in enumerate(alphabet):
        try:
            # each character in cipherMap corresponds to a character in the
            # cipher according to index
            cipherMap[char] = cipher[i]
        except KeyError:
            continue

    messageList = list(message)  # convert string to list to mutate

    for i, char in enumerate(messageList):
        try:
            messageList[i] = cipherMap[char]
        except KeyError:
            continue

    # convert the list to string at the end
    encMessage = ''.join(messageList)

    return encMessage


"""
Function to swap two random letters of a given cipher.

Inputs:
- cipher (str): The reverse cipher whose letters have to be swapped

Outputs:
- cipherList (str): A new reverse cipher with two randomly swapped letters
"""


def swapCipher(cipher):
    cipherList = list(cipher)
    i, j = random.sample(range(len(cipherList)), 2)
    cipherList[i], cipherList[j] = cipherList[j], cipherList[i]
    return cipherList


"""
Function to process transition matrix.

Inputs:
- readFile: File name to be read
        Note:
        - Must give full file path
        - Must be a text file

Outputs:
- writeFile: File name to be written to
        Note:
        - Must give full file path
        - Must be a JSON file
"""


def transitionMatrix(readFile, writeFile, alphabet):
    with open(readFile, 'r') as reader, open(writeFile, 'w') as writer:

        # initializing matrix of 2 dimensional dictionary
        M = {c1: {c2: 0.0 for c2 in alphabet} for c1 in alphabet}

        # loop over each line
        for line in reader:
            line = line.rstrip()  # remove newline character
            if len(line) > 0:  # check if line has any real characters
                for c in range(len(line)-1):  # only go till 2nd last character
                    try:
                        # increment each transition
                        c1 = line[c]
                        c2 = line[c+1]
                        M[c1][c2] += 1
                    # handle characters that are not in alphabet by skipping over
                    except KeyError:
                        continue
        total = 0.0
        # Normalize the counts to probabilities
        for c1 in M:
            total += sum(M[c1].values())
            # for c2 in M[c1]:
            #     M[c1][c2] /= total
        for c1 in M:
            for c2 in M[c1]:
                M[c1][c2] /= total

        # replace all 0.0 probabilities w/ e-20
        for key, values in M.items():
            for key2, value2 in values.items():
                if value2 == 0.0:
                    M[key][key2] = math.exp(-20)

        # storing it in a json file to make reading easier
        json.dump(M, writer)


"""
Function to calculate the acceptance probability.

Inputs:
- X: List of characters for current reverse cipher
- Y: List of characters for new reverse cipher
- message: String containing a message
- M: 2-dimensional dictionary containing transitions of letters in given alphabet
- alphabet: List of characters in the alphabet being used

Outputs:
- acceptanceProbability: Float number which is the acceptance probability
"""


def acceptProb(X, Y, encipheredMessage, M, alphabet):

    unscrambledX = encipher(encipheredMessage, alphabet,
                            X)  # unscramble using cipher X
    unscrambledY = encipher(encipheredMessage, alphabet,
                            Y)  # unscramble using cipher Y
    logProbX = 0.0
    logProbY = 0.0

    # loop over unscrambled message taking sum of logs of transition probabilities
    for i in range(len(unscrambledX)-1):
        try:
            # calculate log probabilities of consecutive characters in reverse cipher X
            logProbX += math.log(M[unscrambledX[i]][unscrambledX[i+1]])
        except KeyError:
            continue
    for i in range(len(unscrambledY)-1):
        try:
            # calculate log probabilities of consecutive characters in reverse cipher Y
            logProbY += math.log(M[unscrambledY[i]][unscrambledY[i+1]])
        except KeyError:
            continue

    # difference to be used to calculate acceptance probability to avoid math error
    diff = logProbY - logProbX

    # Avoiding overflow by comparing values in log space
    if diff > 0:
        acceptanceProbability = 1.0
    else:
        acceptanceProbability = math.exp(diff)  # e^<any negative value> is < 1

    return acceptanceProbability


"""
Function to find the log probability given a cipher.

Inputs:
- cipher: A list of characters for one cipher
- encipheredMessage: An enciphered message represented as a string
- M: A nested dictionary containing the transition probabilities in the alphabet
     using a pre-defined text of English Language
- alphabet: A list of characters that are used in the message

Outputs:
- logProb: A float representing the sum of logs of each character's transition
           to a subsequent character based on transition matrix M
"""


def measure(cipher, encipheredMessage, M, alphabet):
    logProb = 0.0
    unscrambled = encipher(encipheredMessage, alphabet, cipher)
    for i in range(len(unscrambled)-1):
        try:
            logProb += math.log(M[unscrambled[i]][unscrambled[i+1]])
        except KeyError:
            continue
    return logProb


"""
Function to run the Metropolis-Hastings algorithm with max iterations pre-defined

Inputs:
- alphabet: A list of characters that are used in the message
- encipheredMessage: An enciphered message represented as a string
- M: A nested dictionary containing the transition probabilities in the alphabet
     using a pre-defined text of English Language

Outputs:
- bestRevCipher: A list of characters that are found to be the best reverse
                 cipher by the metropolis-hastings algorithm
"""

def metropolisHastings(alphabet, encipheredMessage, M, resultQueue, max_iter=10000):

    # initial cipher
    currCipher = permuteAlph(alphabet)

    # current best cipher is initial cipher
    bestRevCipher = currCipher.copy()

    for i in range(max_iter):
        nextCipher = swapCipher(currCipher).copy()  # avoid pointer issue
        acceptanceProbability = acceptProb(
            currCipher, nextCipher, encipheredMessage, M, alphabet)
        # check to accept new cipher
        if acceptanceProbability > random.uniform(0.0, 1.0):
            currCipher = nextCipher.copy()  # new reverse cipher
            # check for best cipher
            if measure(currCipher, encipheredMessage, M, alphabet) > measure(bestRevCipher, encipheredMessage, M, alphabet):
                bestRevCipher = currCipher.copy()
    # return bestRevCipher
    resultQueue.put(bestRevCipher)