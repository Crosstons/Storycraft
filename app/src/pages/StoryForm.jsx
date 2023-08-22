import React, { useState, useEffect } from 'react';
import { createOperation } from '../utils/operations';
import { firebaseBaseAddStory } from '../utils/firebase';
import { getAccount } from '../utils/wallet';

const crypto = require('crypto');

function StoryForm() {
    const [title, setTitle] = useState('');
    const [account, setAccount] = useState('');
    const [description, setDescription] = useState('');
    const [firstChapter, setFirstChapter] = useState('');
    const [genre, setGenre] = useState('fantasy');
    const [isMature, setIsMature] = useState(false);
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      (async () => {
          const account = await getAccount();
          setAccount(account);        
      })();
    }, []);


    const onSubmit = async () => {
      try {
        setLoading(true);        
        const res = await createOperation(title, "0x" + crypto.createHash('sha256').update(firstChapter).digest('hex'));
        console.log(res);
        await firebaseBaseAddStory(title, image, description, genre, isMature, [], account);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className="py-8 px-10 flex flex-col items-center bg-gray-50 h-screen">
      <h1 className="text-2xl font-semibold mb-4">Add Your Story</h1>
      <div className="w-3/4 bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Cover Image URL:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="border rounded w-full py-2 px-3 text-gray-700" />
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
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 text-sm font-bold mr-2">Mature Content:</label>
          <input type="checkbox" checked={isMature} onChange={() => setIsMature(!isMature)} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">First Chapter :</label>
          <textarea value={firstChapter} onChange={(e) => setFirstChapter(e.target.value)} className="border rounded w-full py-2 px-3 text-gray-700 h-32"></textarea>
        </div>
        <button onClick={onSubmit} className="bg-blue-600 text-white py-2 px-4 rounded-lg self-end">{ loading ? "Loading.." : "Submit" }</button>
      </div>
    </div>
  );
}

export default StoryForm;
