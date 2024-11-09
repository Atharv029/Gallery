import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './Card'


function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeCardModal = () => {
    setSelectedCard(null);
  };

  const cardsData = [
    { title: "Mountain View", description: "Breathtaking view of the mountains", image:"https://i.postimg.cc/tsnz91jQ/photo-1590586133640-42cd755bcda0.jpg" },
    { title: "Forest Trail", description: "Path through a dense forest", image: "https://i.postimg.cc/RqGdd5R8/download-1.jpg" },
    { title: "Sunset Lake", description: "Beautiful lake at sunset", image: "https://i.postimg.cc/xq9gLTKM/download-2.jpg" },
    { title: "Green Hills", description: "Rolling hills covered in greenery", image:"https://i.postimg.cc/hQ4rnpSp/download-3.jpg" },
    { title: "Ocean Wave", description: "Powerful waves crashing", image: "https://i.postimg.cc/qhxLW9dN/download-4.jpg"},
    { title: "Desert Dunes", description: "Golden sand dunes in the desert", image: "https://i.postimg.cc/XrtQ5f8Y/download-5.jpg" },
    { title: "Snowy Peak", description: "Snow-covered mountain peak", image: "https://i.postimg.cc/6yjHWJ4R/download-6.jpg"},
    { title: "Flower Field", description: "Field full of colorful flowers", image:"https://i.postimg.cc/Hrr6jZbN/download-7.jpg" },
    { title: "City Lights", description: "Cityscape at night", image: "https://i.postimg.cc/4xJF9w5q/premium-photo-1661908853318-893732a14e42.jpg" },
    { title: "Lush Valley", description: "A valley covered in greenery", image: "https://i.postimg.cc/TPty3N40/download-8.jpg"},
  ];
 

  return (
   <div>
  
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Nature Cards</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {cardsData.map((card, index) => (
          <Card key={index} card={card} onClick={() => handleCardClick(card)} />
        ))}
      </div>
      {selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
            <img src={selectedCard.image} alt={selectedCard.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{selectedCard.title}</h2>
            <p className="text-gray-700">{selectedCard.description}</p>
            <button
              onClick={closeCardModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
   </div>

   

  
    
  )
}

export default App
