import React from "react";

const ListFilmView = ({ films, onClick, textColor}) => {
  // console.log({ films });
  return (
    <div>
      {films.map((film) => (
        <div key={film.id}>
          <h1 style={{color:textColor}}>{film.name}</h1>
          <p style = {{color:textColor}}>{film.rate}</p>
          <button
            onClick={onClick}
            style={{
              color: "white",
              backgroundColor: "red",
              padding: "5px",
              border: "none",
            }}
          >
            Degistir
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ListFilmView;
