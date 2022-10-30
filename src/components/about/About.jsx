import React from "react";
import { useState, useContext } from "react";
import { Counter } from "../contextApi/Context";
import './about.css'


function About() {
    const {count, setCount} = useContext(Counter)
    return (
        <div className="body">
          <h1>About</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
        </div>
      );
}

export default About;
