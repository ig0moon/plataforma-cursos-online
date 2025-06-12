# 🎓 Plataforma de Cadastro de Cursos Online

Uma aplicação web desenvolvida em **React** para cadastro e consulta de cursos. Os dados são armazenados localmente com `localStorage` e também são exibidos cursos populares de uma API externa (GitHub Repositories).


## 📌 Funcionalidades

- Cadastro de cursos com título e descrição.
- Consulta de cursos cadastrados localmente.
- Consulta de cursos externos (ex: linguagens populares no GitHub).
- Validação de formulários com JavaScript puro.
- Layout responsivo com Tailwind CSS.
- Navegação entre páginas com React Router.


## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [GitHub API](https://docs.github.com/en/rest)
- JavaScript, HTML5, CSS3


## 🖼️ Layout e Responsividade

- A interface foi criada com **Tailwind CSS** usando `Flexbox` e `Grid`.
- `Media Queries` são utilizadas para adaptar o conteúdo a diferentes tamanhos de tela.

## 📥 Instalação e Execução

1. **Clone o repositório**
git clone https://github.com/seu-usuario/plataforma-cursos-online.git
cd plataforma-cursos-online

2. **Instale as dependências**
npm install

3. **Execute o projeto**
npm run dev

4. **Acesse no navegador**
http://localhost:5173


## 📁 Armazenamento de Dados
Os cursos cadastrados localmente são salvos no navegador com localStorage.
Os cursos externos são carregados dinamicamente com fetch() a partir da GitHub API.


## 🧪 Melhorias Futuras
Integração com banco de dados real.
Login e autenticação de usuários.
Upload de imagens para os cursos.
Filtro e ordenação dos cursos.
