import React from "react";
import "./../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
import test from "./../components/java.mp4"

export default video => {
  return (
    <Player
      playsInline
      autoPlay
      src={test}
    />
  );
};
