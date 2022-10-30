import React from "react";
import { useState, useContext } from "react";
import { Context } from "../contextApi/Context";
import './portfolio.css'


function Portfolio() {
    const {count, setCount} = useContext(Context)
    return (
        <div className="body">
          <h1>Portfolio</h1>
          <div className="card">
            <button onClick={() => setCount((count) =>  count + 1)}>
              count is {count}
            </button>
          </div>
        </div>
      );
}

export default Portfolio;
