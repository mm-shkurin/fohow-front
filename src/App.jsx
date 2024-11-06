import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from "./components/Header/Header";
import ProductDetails from './components/Goods/Cleaning';
import CardDetails from "./components/Card/Card";
import Management from "./components/Managament/Managament";
import Company from "./components/Company/Company";
import ContactMain from "./components/Contact/Contact-main";
import Home from './components/Home/home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          {/* Redirect from root to /home */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/product/:id' element={<CardDetails />} />
          <Route path='/cleaning' element={<ProductDetails />} />
          <Route path='/manag' element={<Management />} />
          <Route path='/company' element={<Company />} />
          <Route path='/contact' element={<ContactMain />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;