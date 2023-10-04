import React from "react";
import "./Images.css";
import Navbar from "../Navbar/Navbar";
import pic6 from "../Logo/shopping 6.jpg";
import pic7 from "../Logo/shopping 7.jpg";
import pic8 from "../Logo/shopping 8.jpeg";
import pic9 from "../Logo/shopping 9.jpg";
import pic10 from "../Logo/shopping 10.jpg";
import pic11 from "../Logo/shopping 11.jpg";
import pic12 from "../Logo/shopping 12.jpg";
import pic13 from "../Logo/shopping 13.jpg";
import pic14 from "../Logo/shopping 14.jpg";
import pic15 from "../Logo/shopping 16.jpg";
import pic16 from "../Logo/shopping 5.jpg";
import pic17 from "../Logo/shopping 6.jpg";

export const Images = () => {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className="topcard">
        <div className="card">
          <div className="fir">
            <img src={pic6}></img>
            <h2> Purple kurti</h2>
            <h2>PRICES : 1050</h2>
          </div>
          <div className="secn">
            <img src={pic7}></img>
            <h2>white Lavender Dress</h2>
            <h2>PRICES : 1650</h2>
          </div>
          <div className="thrd">
            <img src={pic8}></img>
            <h2>Red Gown</h2>
            <h2>PRICES : 1350</h2>
          </div>
          <div className="four">
            <img src={pic9}></img>
            <h2>Blue Gown</h2>
            <h2>PRICES : 1200</h2>
          </div>
          <div className="four">
            <img src={pic10}></img>
            <h2>Black Redish Gown</h2>
            <h2>PRICES :1345</h2>
          </div>
          <div className="four">
            <img src={pic11}></img>
            <h2>Dark Green Gown</h2>
            <h2>PRICES : 658</h2>
          </div>
          <div className="four">
            <img src={pic12}></img>
            <h2>Green Gown</h2>
            <h2>PRICES : 999</h2>
          </div>
          <div className="four">
            <img src={pic13}></img>
            <h2>Blue Kurta</h2>
            <h2>PRICES : 678</h2>
          </div>
          <div className="four">
            <img src={pic14}></img>
            <h2>White Shirt</h2>
            <h2>PRICES : 2500</h2>
          </div>
          <div className="four">
            <img src={pic15}></img>
            <h2>Shirt</h2>
            <h2>PRICES : 2000</h2>
          </div>
          <div className="four">
            <img src={pic16}></img>
            <h2>Purple Saari</h2>
            <h2>PRICES : 500</h2>
          </div>
          <div className="four">
            <img src={pic17}></img>
            <h2>Purple kurti</h2>
            <h2>PRICES : 1050</h2>
          </div>
        </div>
      </div>
    </>
  );
};
