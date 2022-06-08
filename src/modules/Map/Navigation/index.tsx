import { useMediaQuery, useTheme } from "@mui/material";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

type Props = {
  toggleMenuVisibility: () => void;
  toggleFilterVisibility: () => void;
};

export const Navigation = ({
  toggleMenuVisibility,
  toggleFilterVisibility,
}: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      {!matches && <MobileNavigation />}
      {matches && (
        <DesktopNavigation
          toggleMenuVisibility={toggleMenuVisibility}
          toggleFilterVisibility={toggleFilterVisibility}
        />
      )}
    </>
  );
};
