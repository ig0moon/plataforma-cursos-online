import React, { useState } from "react";
import { Button } from "/src/components/ui/button.jsx";
import { salvarCurso } from "../services/storage";

const Cadastro = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [erro, setErro] = useState("");

  const validarFormulario = () => {
    if (!titulo || !descricao) {
      setErro("Preencha todos os campos.");
      return false;
    }
    setErro("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      salvarCurso({ titulo, descricao });
      setTitulo("");
      setDescricao("");
      alert("Curso cadastrado com sucesso!");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Cadastro de Curso</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Título do curso"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <textarea
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Descrição do curso"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        ></textarea>
        {erro && <span className="text-red-500 text-center">{erro}</span>}
        <Button type="submit" className="self-center w-full max-w-xs">Cadastrar</Button>
      </form>
    </div>
  );
};

export default Cadastro;