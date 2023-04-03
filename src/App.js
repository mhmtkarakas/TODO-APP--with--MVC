import React from "react";
import ListFilms from "./componets/ListFilms";
import ListFilmsController from "./componets/listFilms/ListFilmsController";
import ListFilms2 from "./componets/ListFilms2";

function App() {
  return (
    <div>
      <h1>MVC</h1>
      <ListFilmsController />
      <ListFilms2 />
    </div>
  );
}

export default App;
