import React, { useState } from "react";
import "./Navbar.css";
// import pic1 from "../Logo/shopping 1.jpg";
import { Link } from "react-router-dom";
import logo from "../Logo/icons8.png"
export default function Navbar() {
  // const [show, setshow] = useState(false);
  // const handleclick = () => {
  //   setshow(true);
  //   alert("you will proceed to  next page ")
  // };

  return (
    <>
      <div className="arc">
        <div
          style={{ cursor: "pointer", color: "white" }}
        >
          <span>SHOPPING STORE </span><img className="logo" src= {logo}></img>
        </div>

        <div className="navbar">
          <div>
            <Link className="navn" to="/">HOME</Link>
          </div>
          <div >
            <Link  className="navn"to= "/images">IMAGES</Link>
          </div>
          <div >
            <Link   className="navn" to="/about">ABOUT</Link>
          </div>
          <div>
            <Link  className="navn" to= "/contect">CONTACT</Link>
          </div>
        </div>
      </div>
      {/* {show ? (
        <>
          <span>{show}</span>
        </>
      ) : (
        ""
      )} */}
      
      {/* <div className="body">
        <div className="images">
          <img src={pic1}></img>
        </div>
        <div className="text">
          <h1 className="heading">BEST DEAL WITH BEST PRICES </h1>
          <h2>
            WE HAVE GREATE SUMMERS SALES 
            FOR  <br></br>  YOU FOR BEST PRICES .
            <div><button  onClick={handleclick}className="button">BOOK NOW</button></div>
          </h2>
        </div>
      </div> */}
    </>
  );
}
