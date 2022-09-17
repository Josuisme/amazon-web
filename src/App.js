import React from "react";
import "./App.css";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
return (

  <BrowserRouter>
  <Routes>
  <Route path="/" element={
    <div>
      <Header/>
      <Home/>
    </div>
  }/>
    <Route path="checkout" element={
    <div>
      <Header/>
      <Checkout/>
    </div>
  }/>
      <Route path="/login" element={
    <div>
      <Login/>
    </div>
  }/>
  </Routes>
  </BrowserRouter>

);
}
export default App;