import React, { useState } from 'react';
import './index.css';

const data = [
    { id: 1, title: "Mountain View", image: "https://source.unsplash.com/random/300x200/?mountain", description: "A beautiful view of the mountains." },
    { id: 2, title: "Forest Trail", image: "https://source.unsplash.com/random/300x200/?forest", description: "A serene trail through the forest." },
    { id: 3, title: "Ocean Waves", image: "https://source.unsplash.com/random/300x200/?ocean", description: "Waves crashing on the shore." },
    { id: 4, title: "Desert Dunes", image: "https://source.unsplash.com/random/300x200/?desert", description: "Endless dunes in the desert." },
    { id: 5, title: "Sunset", image: "https://source.unsplash.com/random/300x200/?sunset", description: "A beautiful sunset over the horizon." },
    { id: 6, title: "Snowy Peaks", image: "https://source.unsplash.com/random/300x200/?snow", description: "Snow-capped mountains." },
    { id: 7, title: "Lake Reflection", image: "https://source.unsplash.com/random/300x200/?lake", description: "A serene lake reflecting the sky." },
    { id: 8, title: "Wildflowers", image: "https://source.unsplash.com/random/300x200/?flowers", description: "A field of wildflowers." },
    { id: 9, title: "Rainforest", image: "https://source.unsplash.com/random/300x200/?rainforest", description: "Lush greenery in the rainforest." },
    { id: 10, title: "Starry Night", image: "https://source.unsplash.com/random/300x200/?stars", description: "A starry night sky." },
  ];
  

const Page1 = () => {
    const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
    <header className="bg-blue-600 text-white p-5 text-center">
      <h1 className="text-4xl font-bold">Nature Gallery</h1>
    </header>

    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {data.map(card => (
        <div
          key={card.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-200"
          onClick={() => handleCardClick(card)}
        >
          <img src={card.image} alt={card.title} className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-semibold">{card.title}</h2>
          </div>
        </div>
      ))}
    </main>

    {selectedCard && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
       </div>)}
       </div>
  )
}

export default Page1
