import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardImg, CardTitle, CardBody, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./moviecard.styles.scss";

function MovieCard(props) {
  const navigate = useNavigate();

  return (
    <Card className="CardMain">
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/318/180"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">{props.title}</CardTitle>

        <Button onClick={() => navigate(`/movie?video=${props.video}`)}>Play</Button>
      </CardBody>
    </Card>
  );
}

export default MovieCard;
