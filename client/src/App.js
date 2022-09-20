import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* <Route path="/" element= { <Home /> } /> */}
          <Route path="/login" element= { <Login /> } />
          {/* <Route path="/signup" element= { <Signup /> } /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
