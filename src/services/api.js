export const fetchCursosExternos = async () => {

      const response = await fetch(
        `https://api.github.com/search/repositories?q=language:java&sort=stars&order=desc&per_page=20`,
      );

      const data = await response.json();

      if (!data.items) {
        console.error("Resposta inesperada:", data);
        return[];
      }

      const latin = /^[\u0000-\u007F\s]+$/;

      return data.items
      .filter(repo => 
        repo.language?.toLowerCase() === "java" &&
        repo.description &&
        latin.test(repo.description)
      )

      .map(repo => ({ 
        titulo: repo.name, 
        descricao: repo.description || "Sem descrição", 
      }));

  return response.flat();
};