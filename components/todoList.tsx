"use client";
// pages/index.js
import React from 'react';
import Board from '../components/Board';

const columns = [
  {
    id: 1,
    title: 'Por hacer',
    cards: [
      { id: 1, title: 'Tarea 1' },
      { id: 2, title: 'Tarea 2' },
    ],
  },
  {
    id: 2,
    title: 'En progreso',
    cards: [
      { id: 3, title: 'Tarea 3' },
    ],
  },
  {
    id: 3,
    title: 'Completado',
    cards: [
      { id: 4, title: 'Tarea 4' },
    ],
  },
];

function Home() {
  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
      <Board columns={columns} />
    </div>
  );
}

export default Home;



