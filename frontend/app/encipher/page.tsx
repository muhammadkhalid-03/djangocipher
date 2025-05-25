"use client";

import { useEffect, useState } from "react";
import Categories from "../components/navbar/Categories";
import { SyncLoader } from "react-spinners";
import TextModal from "../components/modals/TextModal";
import TextBox from "../components/TextBox";
import axios from "axios";

// const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const BASE_URL = "http://127.0.0.1:8000";

const EncipherPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [savedText, setSavedText] = useState<string>("");

  const handleSubmit = async (text: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://lcj3cn994j.execute-api.us-east-2.amazonaws.com/encipher",
        { text: text }
      );
      console.log(response.data);
      setSavedText(response.data.result);
    } catch (error) {
      console.error("Error scrambling with lambda", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 text-white min-h-screen">
      <div className="text-center mt-8 text-7xl font-mono mb-6">
        Scramble Message
      </div>
      <Categories />
      <div className="w-full pt-8 mt-6">
        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
            <SyncLoader
              color="#2196F3"
              loading={isLoading}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
        <TextModal
          onSubmit={handleSubmit}
          placeholder="Enter your message..."
          buttonName="Scramble"
        />
      </div>
      {!savedText ? (
        <p className="text-white m-16">No saved text available</p>
      ) : (
        <TextBox text={savedText} />
      )}
    </div>
  );
};

export default EncipherPage;
