import React from "react";
import {BrowserRouter as Router, Routes,Route,Link}from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import CounterApp from './Components/CounterApp';
import Footer from './Components/Footer';
function App(){
  return(
    <Router>
    <div>
      <nav className="navbar">
        <h1>INR web.com </h1>
        <Link to="/">Home</Link>|
        <Link to="/about">About</Link>
      </nav>
      <Routes>
 
        <Route path="/" element={<Home/>}/>
 <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
    </Router>
  )
}export default App;