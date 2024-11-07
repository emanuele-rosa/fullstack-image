import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
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

  useEffect(() => {
    fetchImages();
  }, [page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Galeria de Imagens
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {images.map((image) => (
          <Box
            key={image.id}
            sx={{ width: { xs: "100%", sm: "48%", md: "31%" } }}
          >
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={`https://picsum.photos/id/${image.id}/400/300`}
                alt={`Foto por ${image.author}`}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Autor: {image.author}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <Button variant="contained" onClick={loadMore} disabled={loading}>
            Carregar Mais
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default ImageGallery;
