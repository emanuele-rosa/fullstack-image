import { api } from "./api";

export const picsumService = {
  async getImages(page = 1, limit = 9) {
    try {
      const response = await api.get("/v2/list", {
        params: {
          page,
          limit,
        },
      });
      return { data: response.data, error: null };
    } catch (error) {
      console.error("Erro ao buscar imagens:", error);
      return {
        data: null,
        error: "Erro ao carregar as imagens",
      };
    }
  },

  getImageUrl(id: string, width = 400, height = 300) {
    return `https://picsum.photos/id/${id}/${width}/${height}`;
  },

  getRandomImageUrl(width = 400, height = 300) {
    return `https://picsum.photos/${width}/${height}`;
  },

  async getImageInfo(id: string) {
    try {
      const response = await api.get(`/id/${id}/info`);
      return { data: response.data, error: null };
    } catch (error) {
      console.error("Erro ao buscar informações da imagem:", error);
      return {
        data: null,
        error: "Erro ao carregar informações da imagem",
      };
    }
  },
};