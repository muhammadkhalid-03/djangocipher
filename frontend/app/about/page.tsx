'use client';
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import Categories from "../components/navbar/Categories";


const AboutPage = () => {

    return (
        <div className="flex flex-col font-mono items-center text-white p-16 min-h-screen">
            <div className="text-6xl mt-16 mb-16">
                <Typewriter 
                    onInit={(typewriter) => {
                        typewriter.typeString("About the Project")
                        .start()
                    }}
                />
            </div>
            <Categories />
            <div className="text-center pt-10 pb-16 space-y-8">
                <p className="text-3xl text-blue-500">Description</p>
                <p className="text-xl mt-4 mb-4">This project is inspired by something I worked on for my 'Computational Methods' class.</p>
                <div className="text-xl mt-4 text-left">
                <div className="mt-10 mb-4">Part 1: Metropolis-Hastings</div>
                <p className="text-md"> 
                    I wrote a python program that implements a <Link href="https://en.wikipedia.org/wiki/Metropolis–Hastings_algorithm" 
                    className="text-custom1">Metropolis-Hastings algorithm</Link> to crack a substitution cipher.
                    It uses a transition matrix derived from a reference text (War and Peace) to measure how well a 
                    proposed reverse cipher unscrambles the message into "proper English". The algorithm iteratively proposes 
                    new reverse ciphers by swapping two letters, calculates acceptance probabilities based on the transition 
                    probabilities of letter pairs in the unscrambled text, and keeps track of the best solution found. This process 
                    runs for 10,000 iterations to find the most likely reverse cipher that decodes the scrambled message. 
                </p>
                <div className="mt-10 mb-4">Part 2: GPT-2 because it's free :)</div>
                <p className="text-md">
                    Since it's also possible for the algorithm to generate a reverse cipher that doesn't work, I generate 10 reverse 
                    ciphers for the scrambled text. The resulting 'unscrambled' texts generated using each of these 10 reverse ciphers
                    are then fed into a pre-trained GPT-2 model. This model is used to determine a 'coherence' score for each of the 
                    texts. The most coherent text is then returned to the user
                </p>
                </div>
            </div>
            <div className="text-center space-y-2">
                <p className="text-3xl text-blue-500 pt-10 pb-6">Technologies Used</p>
            <div className="flex items-center text-md space-x-12 pt-10">
                <div className="flex flex-col items-center">
                    <div className="h-10 w-auto">
                        <Image
                            src="/django.svg"
                            width={30}
                            height={30}
                            alt="Django"
                        />
                    </div>
                    <p className="mt-2">Django</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="h-10 w-auto">

                        <Image
                            src="/next.svg"
                            width={30}
                            height={30}
                            alt="Next.JS"
                        />
                    </div>
                    <p className="mt-2">Next.JS</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="h-10 w-auto">
                        <Image
                            src="/tailwindcss.svg"
                            width={30}
                            height={30}
                            alt="TailwindCSS"
                        />
                    </div>
                    <p className="mt-2">TailwindCSS</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="h-10 w-auto">
                        <Image
                            src="/sqlite.svg"
                            width={30}
                            height={30}
                            alt="sqlite"
                        />
                    </div>
                    <p className="mt-2">SQLite</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AboutPage;