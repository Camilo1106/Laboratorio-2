// components/Card.jsx
import React, { useState } from 'react';

function Card({ id, title, description, dueDate, onMove, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newDueDate, setNewDueDate] = useState(dueDate);

  const handleUpdate = () => {
    onUpdate(id, newTitle, newDescription, newDueDate);
    setIsEditing(false);
  };

  return (
    <div className="p-2 mt-2 bg-white rounded shadow">
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="block w-full mb-2 border-gray-300 rounded px-2 py-1"
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="block w-full mb-2 border-gray-300 rounded px-2 py-1"
          ></textarea>
          <input
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
            className="block w-full mb-2 border-gray-300 rounded px-2 py-1"
          />
          <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded">Guardar</button>
        </form>
      ) : (
        <div className="space-y-2">
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-gray-600">{description}</p>
          <p className="text-sm text-gray-600">Fecha de finalización: {dueDate}</p>
          <div className="space-x-2">
            <button onClick={() => setIsEditing(true)} className="bg-gray-200 text-sm px-2 py-1 rounded-lg">Editar</button>
            <button onClick={() => onMove(id, 2)} className="bg-blue-500 text-white text-sm px-2 py-1 rounded-lg">En curso</button>
            <button onClick={() => onMove(id, 3)} className="bg-green-500 text-white text-sm px-2 py-1 rounded-lg">Completada</button>
            <button onClick={() => onMove(id, 1)} className="bg-red-500 text-white text-sm px-2 py-1 rounded-lg">Por hacer</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
