import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { picsumService } from "../services/picsumService";

const ImageGallery = () => {
  const [images, setImages] = useState<{ id: string; author: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    try {
      setLoading(true);

      const response = await picsumService.getImages(page);
      setImages((prevImages) => [...prevImages, ...response.data]);
    } catch (error) {
      console.error("Erro ao buscar imagens:", error);
    } finally {
      setLoading(false);
    }
  };
