import React, { useState } from "react";
import axios from "axios";
import { Category } from "../Category/Category";
import { GameComponent } from "../GameComponent/GameComponent";

export const Maincomponent = () => {
  const [words, setWords] = useState({});

  const handleCategory = (type) => {
    axios
      .get(`http://localhost:4000/category/${type}`)
      .then((response) => {
        // Process the received data
        console.log(response.data);
        setWords(response.data.words);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      {Object.keys(words).length === 0 ? (
        // Render this component if the object is empty
        <Category handleCategory={handleCategory} />
      ) : (
        // Render this component if the object is not empty
        <GameComponent data={words} />
      )}
    </>
  );
};
