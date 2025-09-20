import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portforlio from './pages/Portforlio.tsx';
import Projects from "./pages/Projects.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portforlio />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
