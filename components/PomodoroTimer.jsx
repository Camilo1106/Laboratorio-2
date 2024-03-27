"use client";
import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [initialTime, setInitialTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isActive && time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(initialTime);
  };

  const handleTimeChange = (event) => {
    const newTime = parseInt(event.target.value, 10);
    setTime(newTime * 60); // Convierte minutos a segundos
    setInitialTime(newTime * 60);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1 style={{ fontSize: '3rem' }}>{formatTime(time)}</h1>
      {!isActive && <p>Ingrese el tiempo en minutos:</p>}
      {!isActive && <input type="number" value={time / 60} onChange={handleTimeChange} />}
      {!isActive && <button style={buttonStyle} onClick={startTimer}>Start</button>}
      {isActive && <button style={buttonStyle} onClick={pauseTimer}>Pause</button>}
      <button style={buttonStyle} onClick={resetTimer}>Reset</button>
    </div>
  );
};

const buttonStyle = {
  marginTop: '10px',
  padding: '5px 10px',
  fontSize: '1rem',
  border: 'none',
  backgroundColor: '#3498db',
  color: 'white',
  cursor: 'pointer',
};

export default PomodoroTimer;

