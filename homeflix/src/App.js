import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar.component';
import "bootstrap/dist/css/bootstrap.min.css";
import {CardGroup} from "reactstrap";
import MovieCard from './components/moviecard/moviecard.component';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CardGroup>
        <MovieCard id={1} title={"Movie One"} video={"loftan.mp4"} />
        <MovieCard id={2} title={"Movie Two"} video={"pirates1.mp4"} />
        <MovieCard id={3} title={"Movie Three"} />
      </CardGroup>
    </div>
  );
}

export default App;
