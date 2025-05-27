# Cipher Cracker

A program to crack substitution ciphers using a version of the Metropolis-Hastings algorithm.

## Demo video: https://muhammad-khalid.vercel.app/projects

The python implementation of the algorithm is available at [MCMC Cipher Cracker](https://github.com/muhammadkhalid-03/MCMC-Cipher-Cracker.git)

## About

This project uses a version of the Metropolis-Hastings algorithm to crack substitution ciphers. It runs 10,000 iterations to produce a suitable reverse cipher. It then passes each unscrambled message into a pre-trained GPT-2 model to give the message a perplexity score (how english-sounding is it?). Finally, it returns the best paragraph to the user. This entire process is run 7 times in parallel using python's `multiprocessing` library to return the results in under 10 seconds.

## Technologies

Next.js\
Django\
TailwindCSS\
SQLite\
Python (to implement the algorithm)

## Prerequisites

- Python 3.8+
- Node.js 14+
- npm

## Installation

### Clone the repository

```
git clone https://github.com/muhammadkhalid-03/djangocipher.git
```

### Set up the backend

#### Create virtual environment

```
cd djangocipher/backend
python3 -m venv env
source env/bin/activate
```

#### Install the required Python packages

```
pip install -r requirements.txt
```

#### Run the development server

```
python manage.py runserver
```

### Set up the frontend

In a new terminal window, navigate to the frontend directory:

```
cd djangocipher/frontend/
```

#### Install all the necessary dependencies

```
npm install
```

#### Run the Next.js development server

```
npm run dev
```
