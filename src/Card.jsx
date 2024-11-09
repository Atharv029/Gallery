
import React from "react";

function Card({ card, onClick }) {
  return (
    <div
      className="w-64  p-4  bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer"
      onClick={onClick}
    >
      <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-lg font-bold mt-4">{card.title}</h3>
      <p className="text-gray-600 text-sm">{card.description.slice(0, 50)}...</p>
    </div>
  );
}

export default Card;
