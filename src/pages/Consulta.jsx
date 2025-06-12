import React, { useState, useEffect } from "react";
import CursoCard from "../components/CursoCard";
import { obterCursos } from "../services/storage";
import { fetchCursosExternos } from "../services/api";

const Consulta = () => {
  const [cursos, setCursos] = useState([]);
  const [cursosExternos, setCursosExternos] = useState([]);

  useEffect(() => {
    setCursos(obterCursos());
    fetchCursosExternos().then(setCursosExternos);
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cursos.concat(cursosExternos).map((curso, index) => (
        <CursoCard key={index} titulo={curso.titulo} descricao={curso.descricao} />
      ))}
    </div>
  );
};

export default Consulta;