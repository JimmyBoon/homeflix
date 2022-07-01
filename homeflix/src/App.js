import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar.component";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardList } from "./components/card-list/card-list.component";

function App() {
  const [movies, setMovies] = useState([]);

  async function GetMovies() {
    const url = `http://localhost:3001/catalogue`;
    const response = await fetch(url);

    try {
      const response_1 = await response.json();
      console.log(response_1);
      return response_1;
    } catch (error) {
      console.log(error);
      return console.log("Error in the GetMovies function");
    }
  }

  useEffect(() => {
    GetMovies().then( (data) => setMovies(data));
  },[]);

  console.log(movies);

  return (
    <div className="App">
      <NavBar />
      <CardList movies={movies} />
    </div>
  );
}

export default App;
