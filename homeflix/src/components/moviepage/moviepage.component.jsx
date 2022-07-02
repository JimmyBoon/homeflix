import React from "react";
import { useSearchParams } from "react-router-dom";
//import ReactPlayer from "react-player";
//import "node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";

import "./moviepage.styles.scss";

function MoviePage(props) {
  const [searchParams] = useSearchParams();
  const video = searchParams.get("video");

  return (
    <div>
      {/* <video
        autoPlay={true}
        playsInline={true}
        controls={true}
        preload="true"
        loop
        className="videoplayer"
        // src={`http://localhost:3001/movie?movie=${video}`}
      >
        <source
          src={`http://192.168.0.38:8080/movie?movie=${video}`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}
      {/* <ReactPlayer
        url={`http://192.168.0.38:8080/movie?movie=${video}`}
        controls={true}
        playing={true}
        width={"100vw"}
        height={"auto"}
      /> */}
      <Player playsInline src={`http://192.168.0.38:8080/movie?movie=${video}`} />

    </div>
  );
}

export default MoviePage;
