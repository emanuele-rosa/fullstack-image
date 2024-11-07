import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { picsumService } from "../../services/picsumService";
import {
  ButtonBox,
  CardBox,
  ImageGalleryBox,
  OuterBox,
  TitleTypography,
} from "./styles";

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
    <ImageGalleryBox>
      <TitleTypography>Galeria de Imagens</TitleTypography>

      <OuterBox>
        {images.map((image) => (
          <CardBox key={image.id}>
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
          </CardBox>
        ))}
      </OuterBox>

      <ButtonBox>
        {loading ? (
          <CircularProgress />
        ) : (
          <Button variant="contained" onClick={loadMore} disabled={loading}>
            Carregar Mais
          </Button>
        )}
      </ButtonBox>
    </ImageGalleryBox>
  );
};

export default ImageGallery;
