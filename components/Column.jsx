// components/Column.jsx
import React from 'react';
import Card from './Card';

function Column({ id, title, cards, onMove, onUpdate }) {
  return (
    <div className="flex flex-col p-4 bg-gray-100 rounded">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          dueDate={card.dueDate}
          onMove={onMove}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default Column;
