import "./App.css";

import Home from "./Components/Pages/Home";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { About } from "./Components/Pages/About";
import { Contact } from "./Components/Pages/Contact";
import { Images } from "./Components/Pages/Images";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/contect" element={<Contact/>}></Route>
          <Route path="/Images" element={<Images/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
