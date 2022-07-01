import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";


export const CardList = (props) => {
  
  return (
    <div className="card-list">
      {props.movies.map((movie) => (
        <Card key={movie.id} movie={movie} ></Card>
      ))}
    </div>
  );
};
