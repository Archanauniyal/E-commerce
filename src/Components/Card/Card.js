import React from "react";
import "./Card.css";
import pic3 from "../Logo/shopping 17.jpg";
import pic4 from "../Logo/shopping 3.jpg";
import pic5 from "../Logo/shopping 2.jpg";
import pic2 from "../Logo/shopping 18.jpg";

export default function Card() {
  return (
    <>
      <div className="topcard">
        <div className="cards">
          <div className="first">
            <div className="imges">
              <img src={pic3}></img>
            </div>
            <h1>white Gown</h1>
            <h2>PRICES : 1390</h2>
          </div>

          <div className="sec">
            <div className="imges">
              <img src={pic4}></img>
            </div>
            <h1>Brown Coat Set</h1>
            <h2>PRICES : 990</h2>
          </div>

          <div className="third">
            <div className="imges">
              <img src={pic5}></img>
            </div>
            <h1>Silver Gown</h1>
            <h2>PRICES : 1899</h2>
          </div>

          <div className="third">
            <div className="imges">
              <img src={pic2}></img>
            </div>
            <h1>Multishade Shirt</h1>
            <h2>PRICES : 1090</h2>
          </div>
        </div>
      </div>
    </>
  );
}
