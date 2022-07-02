import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar.component";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardList } from "./components/card-list/card-list.component";

function App() {
  const [movies, setMovies] = useState([]);

  async function GetMovies() {
    const url = `http://localhost:8080/catalogue`;
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

  // const testMovie = {
  //   title: "test movie",
  //   file: "enemy.mp4",
  //   image: ""
  // };

  return (
    <div className="App">
      <style>{"body { background-color: #000a12; }"}</style>
      <NavBar />
      <CardList movies={movies} />
      {/* <video
        autoPlay={true}
        playsInline={true}
        controls={true}
        preload={"true"}
        loop
        className="video"
        //src={`http://localhost:3001/movie?movie=${video}`}
      >
        <source
          src={testMovie.file}
          type="video/mp4"
        />
      </video> */}
    </div>
  );
}

export default App;
