import { styled } from "@mui/system";
import { CardContent, Divider, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export const StyledCardContent = styled(CardContent)`
  /* Estilos CSS aquí */
  background-color: #ededed;
`;

export const StyledDivider = styled(Divider)`
  /* Estilos CSS aquí */
  background-color: #9a98fe;
`;

export const StyleTypography = styled(Typography)`
  /* Estilos CSS aquí */
  color: #0400cb;
`;

export const StyleFacilitiesTypography = styled(Typography)`
  /* Estilos CSS aquí */
  color: rgba(0, 0, 0, 0.25);
  font-size: 15px;
`;

export const StyleNameTypography = styled(Typography)`
  /* Estilos CSS aquí */
  color: rgba(0, 0, 0, 0.45);
  font-size: 20px;
`;

export const StyledRoomPriceTypography = styled(Typography)`
  /* Estilos CSS aquí */
  color: #9a98fe;
  font-size: 25px;
`;

export const StyledUSD = styled("small")`
  /* Estilos CSS aquí */
  font-size: 8px;
`;

export const StyledStarIcon = styled(StarIcon)`
  color: #9a98fe;
`;

export const StyledStarBorderIcon = styled(StarBorderIcon)`
  color: #9a98fe;
`;
