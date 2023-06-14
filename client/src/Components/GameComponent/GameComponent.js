import React, { useState, useEffect } from "react";

export const GameComponent = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      if (i !== j) {
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
    }
    return newArray;
  };

  const shuffledArray = shuffleArray(data);

  const getNextWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledArray.length);
  };

  const currentWord = shuffledArray[currentIndex];

  return (
    <div>
      <p>{currentWord.word}</p>
      <button onClick={getNextWord}>Next Word</button>
    </div>
  );
};
