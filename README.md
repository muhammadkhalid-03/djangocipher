# Cipher Cracker

A program to crack substitution ciphers using a version of the Metropolis-Hastings algorithm.

## Demo video: https://muhammadkhalid.dev/projects

The python implementation of the algorithm is available at [MCMC Cipher Cracker](https://github.com/muhammadkhalid-03/MCMC-Cipher-Cracker.git)

## About

This project uses a version of the Metropolis-Hastings algorithm to crack substitution ciphers. It sends the scrambled text to an AWS Lambda function. This function spins up 7 concurrent worker Lambda functions each of which runs 10,000 iterations of the sampling algorithm to produce a suitable reverse cipher. Once the results of the concurrent worker lambda functions are returned to the main function, the main function runs another Lambda function to make an API call to the ChatGPT API (I did this to keep things a little organized). In this API call, the 7 unscrambled-ish results of the sampling algorithm are sent to be evaluated for englishness. When the worker Lambda gets the final results from the ChatGPT API, it returns the best paragraph to the user.

## Technologies

Next.js\
TailwindCSS\
Python (to implement the algorithm)\
AWS Lambda
AWS API Gateway
