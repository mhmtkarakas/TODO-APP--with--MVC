import React, { useState, useEffect } from "react";
import ListFilmView from "./ListFilmView";
import axios from "axios";

const ListFilmsController = () => {
  const [films, setFilms] = useState(null);
  const [textColor, setTextColor] = useState("black");


  useEffect(() => {
    axios.get("http://localhost:3004/films").then((res) => setFilms(res.data));
  }, []);

  const changeColor = () =>{
    if (textColor === "black") {
        setTextColor("red") 
      }
      if (textColor === "red") {
        setTextColor("black") 
      }
  }


  if (films === null) return null;
  return (
    <ListFilmView
      textColor={textColor}
      films={films}
      onClick={changeColor}
    />
  );
};

export default ListFilmsController;
