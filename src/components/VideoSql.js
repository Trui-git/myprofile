import React from "react";
import "./../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
import sql from "./../components/Petwalk.mp4"

export default video => {
  return (
    <Player
      playsInline
      autoPlay
      src={sql}
    />
  );
};
