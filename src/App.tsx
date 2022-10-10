import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import "./assets/css/main.css"
import Footer from './component/footer/footer';
import NavBar from './component/nav';
import Body from './page/home/body';
import Product from './page/Product/product';
const App: React.FC = () => {
  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
      <div className='container-fluid p-0'>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Body />} />
            <Route path='/shop' element={<Product />} />
          </Routes>

        </Router>
        <Footer />
      </div>
    </>

  );
}

export default App;
