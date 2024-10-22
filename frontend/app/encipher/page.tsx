'use client';

import { useEffect, useState } from "react";
import Categories from "../components/navbar/Categories";
import { SyncLoader } from "react-spinners";
import TextModal from "../components/modals/TextModal";
import TextBox from "../components/TextBox";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

// Function to fetch saved data from the backend
async function fetchData() {
    const res = await fetch(`${BASE_URL}/api/scrambled/`);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const jsonData = await res.json();
    return jsonData.map((item: any) => ({
        id: item.id,
        text: item.scrambled_text
    }))
  }

async function createItem(data: any): Promise<any> {
    const res = await fetch(`${BASE_URL}/api/scrambled/scramble_message/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
        throw new Error("Failed to create data");
      }
    const jsonData = await res.json();
    console.log("Create Item Response:", jsonData); // Log the response
    return {
        id: jsonData.id,
        text: jsonData.scrambled_text,
    };
}


async function deleteItem(id: number) {
    const res = await fetch(`${BASE_URL}/api/scrambled/${id}/`, {
      method: "DELETE",
    });
    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Failed to delete data: ${errorMessage}`);
    }
    return;
}

async function updateItem(id: number, data: { text: string }) {
    const res = await fetch(`${BASE_URL}/api/scrambled/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      console.log(res)
      throw new Error("Failed to update data");
    }
  
    return res.json();
  }
  

interface TextItem {
    id: number;
    text: string;
}

const EncipherPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [savedText, setSavedText] = useState<TextItem[]>([]);
    const[error, setError] = useState("");

    // Fetch data when the component mounts
    useEffect(() => {
      fetchData()
          .then(data => {
              console.log("Fetched Data:", data); // Log fetched data
              setSavedText(data);
              console.log("Saved Data:", data);
          })
          .catch(err => setError("Failed to load data"));
    }, []);


    const handleDelete = (id: number) => {
        setIsLoading(true);
        console.log(`Deleting item with ID: ${id}`);  // Log the ID to verify
        deleteItem(id)
          .then(() => {
            setSavedText((prevText) => prevText.filter((item) => item.id !== id));
            setIsLoading(false);
          })
          .catch(err => {
            setError(`An error occurred: ${err.message}`);
            setIsLoading(false);
          });
      };



    const handleSubmit = (scrambled_text: any) => {
        setIsLoading(true);
        createItem({scrambled_text}) //pass text as an object
         .then((newItem) => {
            setSavedText((prevText) => [newItem, ...prevText]);
            setIsLoading(false);
         })
         .catch(err => {
            setError(`An error occurred: ${err.message}`);
            setIsLoading(false);
          });
    }

    const handleEdit = (id: number, newText: string) => {
      setIsLoading(true);
      updateItem(id, { text: newText })
          .then(updatedItem => {
              setSavedText((prevText) => prevText.map(item => item.id === id ? updatedItem : item));
              setIsLoading(false);
          })
          .catch(err => {
              setError(`An error occurred: ${err.message || err.toString()}`);
              setIsLoading(false);
          });
  };

    return (
        <div className="flex flex-col items-center p-4 text-white min-h-screen">
            <div className="text-center mt-8 text-7xl font-mono mb-6">Scramble Message</div>
            <Categories />
            {/* <div className="relative flex flex-col justify-center items-center pt-8 mt-6"> */}
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
                    buttonName="Encipher"
                />
            </div>
            {savedText.length === 0 ? (
                <p className="text-white m-16">No saved text available</p>
            ) : (
                savedText.map((item) => (
                    <TextBox
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        onDelete={() => handleDelete(item.id)}
                        onEdit={handleEdit}
                    />
                ))
            )}
        </div>
    )
}

export default EncipherPage;