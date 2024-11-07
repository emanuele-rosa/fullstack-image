import { ReactNode } from "react";
import { createContext, useState, useContext } from "react";

export interface IImage {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const ImageContext = createContext<{
  images: IImage[];
  setImages: React.Dispatch<React.SetStateAction<IImage[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  selectedImage: IImage | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<IImage | null>>;
}>({
  images: [],
  setImages: () => {},
  loading: false,
  setLoading: () => {},
  error: null,
  setError: () => {},
  searchQuery: "",
  setSearchQuery: () => {},
  page: 1,
  setPage: () => {},
  selectedImage: null,
  setSelectedImage: () => {},
});

export const ImageProvider = ({ children }: { children: ReactNode }) => {
  const [images, setImages] = useState<IImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<IImage | null>(null);

  const value = {
    images,
    setImages,
    loading,
    setLoading,
    error,
    setError,
    searchQuery,
    setSearchQuery,
    page,
    setPage,
    selectedImage,
    setSelectedImage,
  };

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImageContext must be used within an ImageProvider");
  }
  return context;
};
