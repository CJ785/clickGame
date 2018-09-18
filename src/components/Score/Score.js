import React from "react";
import "./Score.css";

let score;
let bestScore;

const Score = props =>

    <div className="scoreBox">
        <h1>Score: {score}</h1>
        <h1>Best Score: {bestScore} </h1>
    </div>;

export default Score;