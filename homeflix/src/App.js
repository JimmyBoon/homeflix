import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar.component";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardList } from "./components/card-list/card-list.component";

function App() {
  const [movies, setMovies] = useState([]);

  async function GetMovies() {

    //Address of server, to get the movie catalogue:
    const url = `http://192.168.0.29:8080/catalogue`;
    
    const response = await fetch(url);

    try {
      const response_1 = await response.json();
      return response_1;
    } catch (error) {
      console.log(error);
      return console.log("Error in the GetMovies function");
    }
  }

  useEffect(() => {
    GetMovies().then( (data) => setMovies(data));
  },[]);

  return (
    <div className="App">
      <style>{"body { background-color: #000a12; }"}</style>
      <NavBar />
      <CardList movies={movies} />
    </div>
  );
}

export default App;
