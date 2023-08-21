import React, { useState, useRef, useEffect } from 'react';

function WriteStory() {
  const [chapterTitle, setChapterTitle] = useState('');
  const [storyContent, setStoryContent] = useState(['', '', '']);
  const [activeTab, setActiveTab] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const storyTitle = "Sample Story Title"; // Placeholder, replace with actual title
  const storyImage = "https://img.wattpad.com/cover/349773878-64-ka76e5f.jpg"; // Placeholder, replace with actual image path

  const textAreaRef = useRef(null);

  useEffect(() => {
    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  }, [storyContent]);

  const handleContentChange = (e, index) => {
    const newContent = [...storyContent];
    newContent[index] = e.target.value;
    setStoryContent(newContent);
  };

  return (
    <div className="h-full w-full bg-white flex flex-col">
      {/* Top Bar */}
      <div className="flex justify-between items-center bg-white p-4 shadow-md">
        <div className="flex items-center relative cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <img src={storyImage} alt={storyTitle} className="w-10 h-16 object-cover rounded mr-4" />
            <div className='block'>
                <h1 className="text-xl font-semibold">{storyTitle}</h1>
                <p className='text-gray-500'>Chapter 1</p>
            </div>
          <svg className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7L10 10L13 7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {dropdownOpen && (
            <div className="absolute left-0 mt-60 w-48 rounded-md shadow-lg bg-white">
              {/* Sample chapters, replace with actual chapter list */}
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Chapter 1</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Chapter 2</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Chapter 3</a> 
                <div className='flex justify-center my-2'><button className="bg-blue-600 text-white py-0.5 px-2 rounded-lg pb-1">+</button></div>
              </div>
            </div>
          )}
        </div>
        <div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mr-2">Publish</button>
          <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg">Save</button>
        </div>
      </div>

      {/* Writing Area */}
      <div className="p-16 flex flex-col items-center justify-center">
        <input 
          type="text" 
          value={chapterTitle} 
          onChange={e => setChapterTitle(e.target.value)} 
          placeholder="Chapter Title" 
          className="text-center text-2xl font-semibold w-3/4 mb-4 p-2 focus:outline-none placeholder-gray-500"
        />
        <div className="w-1/2 mb-4">
          <div className="flex justify-center border-b">
            <button onClick={() => setActiveTab(0)} className={`py-2 px-4 ${activeTab === 0 ? 'border-b-2 border-blue-600' : ''}`}>Variation 1</button>
            <button onClick={() => setActiveTab(1)} className={`py-2 px-4 ${activeTab === 1 ? 'border-b-2 border-blue-600' : ''}`}>Variation 2</button>
            <button onClick={() => setActiveTab(2)} className={`py-2 px-4 ${activeTab === 2 ? 'border-b-2 border-blue-600' : ''}`}>Variation 3</button>
          </div>
        </div>
        <textarea 
            ref={textAreaRef}
            value={storyContent[activeTab]} 
            onChange={e => handleContentChange(e, activeTab)} 
            placeholder="Start writing your story here..." 
            className="text-center p-4 focus:outline-none placeholder-gray-500 resize-none w-1/2"
          ></textarea>
      </div>
    </div>
  );
}

export default WriteStory;
