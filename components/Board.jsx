// components/Board.jsx
import React, { useState } from 'react';
import Column from './Column';

function Board({ columns }) {
  const [tasks, setTasks] = useState(columns);

  const moveTask = (taskId, targetColumnId) => {
    const updatedTasks = tasks.map((column) => {
      const updatedCards = column.cards.filter((card) => card.id !== taskId);
      if (column.id === targetColumnId) {
        const taskToMove = tasks.find((col) => col.cards.some((c) => c.id === taskId)).cards.find((c) => c.id === taskId);
        return { ...column, cards: [...column.cards, taskToMove] };
      }
      return { ...column, cards: updatedCards };
    });
    setTasks(updatedTasks);
  };

  const updateTask = (taskId, newTitle, newDescription, newDueDate) => {
    const updatedTasks = tasks.map((column) => {
      const updatedCards = column.cards.map((card) => {
        if (card.id === taskId) {
          return {
            ...card,
            title: newTitle,
            description: newDescription,
            dueDate: newDueDate,
          };
        }
        return card;
      });
      return { ...column, cards: updatedCards };
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-row space-x-4 overflow-x-auto">
      {tasks.map((column) => (
        <Column
          key={column.id}
          id={column.id}
          title={column.title}
          cards={column.cards}
          onMove={moveTask}
          onUpdate={updateTask}
        />
      ))}
    </div>
  );
}

export default Board;
