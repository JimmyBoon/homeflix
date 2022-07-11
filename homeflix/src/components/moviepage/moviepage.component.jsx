import React from "react";
import { useSearchParams } from "react-router-dom";

import "./moviepage.styles.scss";

function MoviePage(props) {
  const [searchParams] = useSearchParams();
  const video = searchParams.get("video");
  
  //Address of the server to get the video:
  const video_src = `http://192.168.0.29:8080/movie?movie=${video}`;



  return (
    <div>
      <video
        playsInline={true}
        controls={true}
        preload="true"
        loop
        className="videoplayer"
      >
        <source
          src={video_src}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

    </div>
  );
}

export default MoviePage;
