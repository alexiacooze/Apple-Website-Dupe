import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/header" element={<Header />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
