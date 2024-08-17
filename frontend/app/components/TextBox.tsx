// components/TextItem.tsx
import React, { useEffect, useState } from 'react';

interface TextBoxProps {
  id: number;
  text: string;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}



const TextBox: React.FC<TextBoxProps> = ({ id, text, onDelete, onEdit }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editableText, setEditableText] = useState(text);

  
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => alert('Text copied to clipboard!')) //once 'Copy' button is clicked, alert message is displayed
      .catch(err => alert(`Failed to copy text: ${err}`));
  };

  const handleEdit = () => {
    if (isEditing) {
      onEdit(id, editableText); // Save the edited text
    }
    setIsEditing(!isEditing); // Toggle edit mode
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  }

  // Function to truncate text for preview based on a max character count
  const getPreviewText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditableText(event.target.value);
  };

  return (
    <div className='mt-4 py-4 px-6 flex flex-col border border-gray-300 space-x-4 rounded-xl w-full max-w-screen-lg' data-id={id}>
      
      
      <div className="flex justify-between items-center mb-2">
        <button 
            onClick={toggleExpand} 
            className="p-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
          {isExpanded ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          }
        </button>
      </div>

      {!isEditing ? (
        isExpanded ? (
          <p className='break-words max-w-full overflow-y-auto'>{text}</p> // Not being edited but is expanded
        ) : (
          <div className="flex flex-col justify-center p-2 max-h-24 overflow-auto">
            <p className="break-words max-w-full">{getPreviewText(text, 300)}</p> {/* Adjust the number of lines here */}
          </div>
        )
      ) : (
        <textarea
          value={editableText}
          onChange={handleTextChange}
          className='w-full p-2 border text-black border-gray-300 rounded'
          rows={10}
        />
      )}


          <div className="flex flex-col justify-center items-center mt-2">
            <button onClick={handleCopy} className="mb-2 p-2 bg-blue-500 rounded hover:bg-blue-600 w-full">
              Copy
            </button>
            <button onClick={handleEdit} className="mb-2 p-2 bg-yellow-500 rounded hover:bg-yellow-600 w-full">
              {isEditing ? 'Save' : 'Edit'}
            </button>
            <button onClick={() => onDelete(id)} className="p-2 bg-red-500 rounded hover:bg-red-600 w-full">
              Delete
            </button>
          </div>

    </div>
  );
};

export default TextBox;
