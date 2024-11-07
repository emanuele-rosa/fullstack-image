import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

export const ImageGalleryBox = styled(Box)({
  maxWidth: "lg",
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f0f0f0",
  padding: "32px",
});

export const TitleTypography = styled(Typography)({
  variant: "h4",
  component: "h1",
  gutterBottom: true,
  textAlign: "center",
});

export const OuterBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: 3,
});

export const CardBox = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "48%",
  },
  [theme.breakpoints.up("md")]: {
    width: "31%",
  },
}));

export const ButtonBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  mt: 4,
});
