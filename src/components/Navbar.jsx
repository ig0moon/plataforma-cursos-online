import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="w-full bg-blue-600 text-center text-white px-5 py-5 flex  sm:flex-row sm:justify-between justify-center gap-10 shadow-md">
    <h1 className="text-2xl font-extrabold select-none">Plataforma de Cursos</h1>
    <div className="flex gap-6 items-center">
      <Link to="/cadastro" className="hover:text-blue-200 transition">Cadastro</Link>
      <Link to="/consulta" className="hover:text-blue-200 transition">Consulta</Link>
      <Link to="/login" className="hover:text-blue-200 transition">Entrar</Link>
    </div>
  </nav>
);

export default Navbar;