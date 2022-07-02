import React from "react";
import "./card.styles.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap"

export const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div className="card-container">
      <img alt="movie" src={`http://localhost:3001/image?image=${props.movie.image}`}></img>
      <h2> {props.movie.title} </h2>
      <Button onClick={() => navigate(`/movie?video=${props.movie.file}`)}>
        Play
      </Button>
    </div>
  );
};
