import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const OuterBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;

export const CardBox = styled(Box)`
  width: calc(33.333% - 14px);
  min-width: 300px;
  max-width: 400px;

  @media (max-width: 960px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;