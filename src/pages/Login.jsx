import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [modoCadastro, setModoCadastro] = useState(false);

  const salvarUsuario = (email, senha) => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push({ email, senha });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  };

  const verificarUsuario = (email, senha) => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    return usuarios.some((u) => u.email === email && u.senha === senha);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (modoCadastro) {
      salvarUsuario(email, senha);
      setErro("");
      alert("Usuário cadastrado com sucesso! Faça o login.");
      setModoCadastro(false);
      setEmail("");
      setSenha("");
    } else {
      if (verificarUsuario(email, senha)) {
        login();
        navigate("/consulta");
      } else {
        setErro("E-mail ou senha inválidos.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {modoCadastro ? "Criar Conta" : "Login"}
        </h2>

        <input
          type="email"
          placeholder="E-mail"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        {erro && <p className="text-red-500 mb-2">{erro}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {modoCadastro ? "Cadastrar" : "Entrar"}
        </button>

        <p className="mt-4 text-sm text-center">
          {modoCadastro ? "Já tem uma conta?" : "Não tem uma conta?"}{" "}
          <button
            type="button"
            className="text-blue-600 hover:underline"
            onClick={() => {
              setModoCadastro(!modoCadastro);
              setErro("");
            }}
          >
            {modoCadastro ? "Faça login" : "Cadastre-se"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;