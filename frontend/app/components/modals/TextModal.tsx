'use client';

import { useState } from 'react';

interface TextModalProps {
    onSubmit: (text: string) => void;
    placeholder: string;
    buttonName: string;
}

// Modal Component
const TextModal: React.FC<TextModalProps> = ({onSubmit, placeholder, buttonName}) => {

    const [inputText, setInputText] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputText) {
            onSubmit(inputText)
        }
      };

    return (
            <form onSubmit={handleSubmit} className='relative w-full mx-auto max-w-4xl'>
                    <textarea
                        value={inputText}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="bg-white text-black p-6 rounded-lg shadow-lg border-2 border-blue-500 max-w-4xl w-full relative"
                        rows={10}
                    />
                    <button
                        type="submit"
                        className='absolute bottom-5 right-5 bg-custom1 hover:bg-highlight font-mono rounded-lg px-6 py-3 transition duration-300 cursor-pointer'
                    >
                        {buttonName}
                    </button>
            </form>
    )
};

export default TextModal;