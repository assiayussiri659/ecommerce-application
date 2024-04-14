import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Appcontext from "./utils/context";
import Banner from "./components/Home/Banner/Banner";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Appcontext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        <Newsletter />
        <Footer />
        <Banner />
      </Appcontext>
    </BrowserRouter>
  );
}

export default App;
