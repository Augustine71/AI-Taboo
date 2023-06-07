import React, { useState } from "react";
import axios from "axios";
import { Category } from "../Category.js/Category";

export const Maincomponent = () => {
  const [data, setData] = useState({});

  const handleCategory = (type) => {
    console.log(type);
    axios
      .get(`http://localhost:4000/category/${type}`)
      .then((response) => {
        // Process the received data
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Category handleCategory={handleCategory} />
    </>
  );
};
