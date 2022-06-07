import { useMediaQuery, useTheme } from "@mui/material";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export const Navigation = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      {!matches && <MobileNavigation />}
      {matches && <DesktopNavigation />}
    </>
  );
};
