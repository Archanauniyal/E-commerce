// import React from 'react'
import React, { useState } from "react";
import pic1 from "../Logo/shopping 41.jpg";
import "./Navbar.css";
export default function Body() {
  const [show, setshow] = useState(false);
  const handleclick = () => {
    setshow(true);
    alert("you will proceed to  next page ");
  };
  return (
    <>
      <div className="body">
          {/* <div className="images">
            <img src={pic1}></img>
          </div> */}
          <div className="text">
            <h1 className="heading">BEST DEAL WITH BEST PRICES </h1>
            <h2 className="heading1">
              WE HAVE GREATE SUMMERS SALES FOR <br></br> YOU FOR BEST PRICES .
              <div>
                <button onClick={handleclick} className="button">
                  SHOP NOW
                </button>
              </div>
            </h2>
          </div>
        </div>
      {show ? (
        <>
          <span>{show}</span>
        </>
      ) : (
        ""
      )}
    </>
  );
}
