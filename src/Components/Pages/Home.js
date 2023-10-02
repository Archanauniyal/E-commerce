import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import  Card from "../Card/Card";
import Body  from "../Navbar/Body";
// import { About } from "./About";
// import { Body } from "../Navbar/Body";

export default class Home extends Component {

  render() {
    return (
      <>
        <Navbar/>
        <Body/>
        <Card/>
      </>
    );
  }
}
