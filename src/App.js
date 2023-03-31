import React from "react";
import ListFilms from "./componets/ListFilms";
import ListFilmsController from "./componets/listFilms/ListFilmsController";

function App() {
  return (
    <div>
      <h1>MVC</h1>
      <ListFilms />
      <ListFilmsController />
    </div>
  );
}

export default App;
