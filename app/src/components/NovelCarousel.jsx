import React, { useState } from 'react';

function NovelCarousel() {
  const novels = [
    {
      title: "Novel One",
      genre: "Fantasy",
      coverImage: "https://img.wattpad.com/cover/136190999-100-k182487.jpg",
      proposal: {
        ongoing: true,
        continuations: [
          "Continuation 1 of the story...",
          "Continuation 2 of the story...",
          "Continuation 3 of the story..."
        ]
      }
    },
    {
      title: "Novel One",
      genre: "Fantasy",
      coverImage: "https://img.wattpad.com/cover/153033908-64-k415468.jpg",
      proposal: {
        ongoing: true,
        continuations: [
          "Continuation 1 of the story...",
          "Continuation 2 of the story...",
          "Continuation 3 of the story..."
        ]
      }
    },
    {
      title: "Novel One",
      genre: "Fantasy",
      coverImage: "https://img.wattpad.com/cover/221894655-100-k477529.jpg",
      proposal: {
        ongoing: true,
        continuations: [
          "Continuation 1 of the story...",
          "Continuation 2 of the story...",
          "Continuation 3 of the story..."
        ]
      }
    },
    {
      title: "Novel One",
      genre: "Fantasy",
      coverImage: "https://img.wattpad.com/cover/624774-100-k243620.jpg",
      proposal: {
        ongoing: true,
        continuations: [
          "Continuation 1 of the story...",
          "Continuation 2 of the story...",
          "Continuation 3 of the story..."
        ]
      }
    },
    // ... add more novels as needed
  ];

  const nextSet = () => {
    setCurrentSet(prevSet => (prevSet + 1) % totalSets);
  };

  const prevSet = () => {
    setCurrentSet(prevSet => (prevSet - 1 + totalSets) % totalSets);
  };
  const [currentSet, setCurrentSet] = useState(0);
  const [selectedNovel, setSelectedNovel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const novelsPerSet = 5;
  const totalSets = Math.ceil(novels.length / novelsPerSet);

  const openModal = (novel) => {
    setSelectedNovel(novel);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNovel(null);
  };

  return (
    <div className="py-4 px-6 flex flex-col items-center bg-gray-50">
      <h1 className="text-2xl font-semibold mb-4">{novels[0]?.genre || "Genre"}</h1>
      <div className="flex justify-between w-4/5 mb-4 relative">
      <button onClick={prevSet} className="absolute bg-blue-600 p-1 rounded-lg text-white -left-8 top-1/2 transform -translate-y-1/2 z-10 mr-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
        </svg>
        </button>
        {novels.slice(currentSet * novelsPerSet, (currentSet + 1) * novelsPerSet).map((novel, index) => (
          <div key={index} className="w-1/5 px-8">
            <div className="bg-white rounded-lg shadow-md flex flex-col items-center cursor-pointer" onClick={() => openModal(novel)}>
              <img src={novel.coverImage} alt={novel.title} className="w-full h-60 rounded-t-lg object-cover" />
              <p className="text-center text-gray-800 font-semibold py-2">{novel.title}</p>
            </div>
          </div>
        ))}
        <button onClick={nextSet} className="absolute bg-blue-600 p-1 rounded-lg text-white -right-8 top-1/2 transform -translate-y-1/2 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white w-3/4 h-3/4 rounded-lg shadow-lg p-6 flex relative">
            <img src={selectedNovel.coverImage} alt={selectedNovel.title} className="w-1/2 h-full object-cover rounded-l-lg" />
            <div className="w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{selectedNovel.title}</h2>
                <p className="text-blue-600 mb-4">{selectedNovel.genre}</p>
                <p className="text-gray-700 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur aliquam consequatur. Sed corrupti odio exercitationem eum maiores. Aperiam qui unde non aliquid dicta tempore repellendus atque tempora. Hic, porro.</p>
                
                {selectedNovel.proposal?.ongoing && (
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Story Continuations:</h3>
                    {selectedNovel.proposal.continuations.map((cont, index) => (
                      <div key={index} className="bg-gray-100 hover:bg-blue-600 transition-all duration-200 text-lg ease-in-out hover:text-white cursor-pointer p-4 rounded-lg mb-2">
                        {cont}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg self-end">Start Reading</button>
            </div>
            <button onClick={closeModal} className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-gray-900">&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NovelCarousel;
