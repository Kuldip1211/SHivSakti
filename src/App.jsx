// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "./components/Navbar/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Cart from "../src/pages/Cart/Cart";
import Placeholder from "./pages/place-order/Place_ordcder";
import Footer from "./components/Footer/Footer";
import LoginPopPup from "./components/Loginpopup/LoginPopPup"

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopPup /> : <></>}
      <div className="app">
        <Navbar  setShowLogin = {setShowLogin}/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeholder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
