import { useMediaQuery, useTheme } from "@mui/material";

export const Navigation = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      {!matches && <span>Small</span>}
      {matches && <span>Big</span>}
    </>
  );
};
