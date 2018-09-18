import React from "react";
import "./Tile.css";

const Tile = props => (
  <div className="tile">
    <div className="img-container">
      <img src={props.image} />
    </div>

  </div>
);

export default Tile;
