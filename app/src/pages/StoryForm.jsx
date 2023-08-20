import React, { useState } from 'react';
import { createOperation } from '../utils/operations';

const crypto = require('crypto');

function StoryForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [firstChapter, setFirstChapter] = useState('');
    const [characters, setCharacters] = useState([]);
    const [characterInput, setCharacterInput] = useState('');
    const [genre, setGenre] = useState('');
    const [language, setLanguage] = useState('');
    const [isMature, setIsMature] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);



    const onSubmit = async () => {
      await createOperation(title, "0x" + crypto.createHash('sha256').update(firstChapter).digest('hex'));
    }
  
    const handleRemoveCharacter = (index) => {
      setCharacters(prevCharacters => prevCharacters.filter((_, i) => i !== index));
    };
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setUploadedImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
    const handleRemoveImage = () => {
        setUploadedImage(null);
    }

  return (
    <div className="py-8 px-10 flex flex-col items-center bg-gray-50 h-screen">
      <h1 className="text-2xl font-semibold mb-4">Add Your Story</h1>
      <div className="w-3/4 bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
            <div className="mb-4 flex flex-col items-center">
            {uploadedImage ? (
            <>
              <img src={uploadedImage} alt="Uploaded Preview" className="w-1/2 h-1/2 object-cover mb-4 rounded" />
              <button onClick={handleRemoveImage} className="text-red-500 hover:text-red-600">Remove</button>
            </>
          ) : (
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-1/2 h-0 pb-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 aspect-w-9 aspect-h-16">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Upload</span> or drag book cover</p>
                <p className="text-xs text-gray-500">PNG, JPG</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleImageUpload} />
            </label>
          )}
            </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border rounded w-full py-2 px-3 text-gray-700" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border rounded w-full py-2 px-3 text-gray-700 h-32"></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Category/Genre:</label>
          <select onChange={(e) => setGenre(e.target.value)} className="border rounded w-full py-2 px-3 text-gray-700">
            <option value="fantasy">Fantasy</option>
            <option value="mystery">Mystery</option>
            <option value="romance">Romance</option>
            <option value="adult">Adult</option>
            {/* Add more genres as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Language:</label>
          <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} className="border rounded w-full py-2 px-3 text-gray-700" />
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 text-sm font-bold mr-2">Mature Content:</label>
          <input type="checkbox" checked={isMature} onChange={() => setIsMature(!isMature)} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">First Chapter :</label>
          <textarea value={firstChapter} onChange={(e) => setFirstChapter(e.target.value)} className="border rounded w-full py-2 px-3 text-gray-700 h-32"></textarea>
        </div>
        <button onClick={onSubmit} className="bg-blue-600 text-white py-2 px-4 rounded-lg self-end">Submit</button>
      </div>
    </div>
  );
}

export default StoryForm;
