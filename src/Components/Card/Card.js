import React from "react";
import "./Card.css";
import pic3 from "../Logo/shopping 17.jpg";
import pic4 from "../Logo/shopping 3.jpg";
import pic5 from "../Logo/shopping 2.jpg";
export default function Card() {
  return (
    <>
      <div className="topcard">
        <div className="cards">
          <div className="first">
            <div className="imges">
              <img src={pic3}></img>
            </div>
            <h1>heading</h1>
            <h1>heading</h1>
          </div>

          <div className="sec">
            <div className="imges">
              <img src={pic4}></img>
            </div>
            <h1>heading</h1>
            <h1>heading</h1>
          </div>

          <div className="third">
            <div className="imges">
              <img src={pic5}></img>
            </div>
            <h1>heading</h1>
            <h1>heading</h1>
          </div>

          <div className="third">
            <div className="imges">
              <img src={pic3}></img>
            </div>
            <h1>heading</h1>
            <h1>heading</h1>
          </div>
        </div>
      </div>
    </>
  );
}
