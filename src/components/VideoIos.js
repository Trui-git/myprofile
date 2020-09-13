import React from "react";
import "./../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
import IOS from "./../components/IOS_project.mp4"

export default video => {
  return (
    <Player
      playsInline
      autoPlay
      src={IOS}
    />
  );
};
