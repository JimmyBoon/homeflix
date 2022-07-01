import React from "react";
import { useSearchParams } from "react-router-dom";


import "./moviepage.styles.scss";

function MoviePage(props) {
  const [searchParams] = useSearchParams();
  const video = searchParams.get("video");

  return (
    <div>
      <video
        autoPlay={true}
        playsInline={true}
        controls={true}
        preload={"true"}
        loop
        className="video"
        //src={`http://localhost:3001/movie?movie=${video}`}
      >
        <source
          src={`http://localhost:3001/movie?movie=${video}`}
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default MoviePage;
