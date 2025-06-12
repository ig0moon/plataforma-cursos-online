import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Consulta from "./pages/Consulta";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center">
        <Navbar />
        <div className="w-full max-w-4xl mt-8 mx-auto">
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/consulta" element={<Consulta />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;