import React, { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:4000/category/animals")
      .then(function (response) {
        console.log(response);
      });
  }, []);
  return <div className="App">Hello</div>;
}

export default App;
