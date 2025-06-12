export const salvarCurso = (curso) => {
  const cursos = JSON.parse(localStorage.getItem("cursos")) || [];
  cursos.push(curso);
  localStorage.setItem("cursos", JSON.stringify(cursos));
};

export const obterCursos = () => {
  return JSON.parse(localStorage.getItem("cursos")) || [];
};