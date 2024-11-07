import { useMemo } from "react";
import { useImageContext } from "../context/SearchContext";
import { IImage } from "../context/SearchContext";
import { picsumService } from "../services/picsumService";

export const useSearch = () => {
  const { images, searchQuery, setImages, setLoading, setError, page } =
    useImageContext();

  const filteredImages = useMemo(() => {
    if (!searchQuery.trim()) return images;

    const query = searchQuery.toLowerCase();
    return images.filter(
      (image) =>
        image.author.toLowerCase().includes(query) || image.id.includes(query)
    );
  }, [images, searchQuery]);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await picsumService.getImages();

      if (!response) {
        throw new Error("Falha ao carregar imagens");
      }

      const data: IImage[] = response.data;
      setImages((prevImages) => (page === 1 ? data : [...prevImages, ...data]));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  return {
    filteredImages,
    fetchImages,
  };
};
