import { styled } from "@mui/system";
import { CardContent, Divider, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export const linkStyle = {
  textDecoration: "none",
};

export const StyledCardContent = styled(CardContent)`
  background-color: #ededed;
  
`;

export const StyledDivider = styled(Divider)`
  background-color: #9a98fe;
`;

export const StyleTypography = styled(Typography)`
  color: #0400cb;
`;

export const StyleFacilitiesTypography = styled(Typography)`
  color: rgba(0, 0, 0, 0.25);
  font-size: 15px;
`;

export const StyleNameTypography = styled(Typography)`
  color: rgb(134, 134, 136);
  fontweight: "bold";
`;

export const StyledRoomPriceTypography = styled(Typography)`
  color: #9a98fe;
  font-size: 25px;
`;

export const StyledUSD = styled("small")`
  font-size: 8px;
`;

export const StyledStarIcon = styled(StarIcon)`
  color: #9a98fe;
`;

export const StyledStarBorderIcon = styled(StarBorderIcon)`
  color: #9a98fe;
`;
