import React from "react";

const categories = ["animals", "countries"];

export const Category = ({ handleCategory }) => {
  const handleClick = (data) => {
    handleCategory(data);
  };
  return categories.map((type) => (
    <div className="category" onClick={() => handleClick(type)} key={type}>
      {type}
    </div>
  ));
};
