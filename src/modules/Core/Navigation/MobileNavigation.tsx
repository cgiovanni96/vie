import { AppBar, IconButton, styled, Toolbar } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "@vie/components/Menu";
import { useState } from "react";
import { LanguageSwitcher } from "@vie/components/LanguageSwitcher";
import { useScroll } from "@vie/hooks/useScroll";

const StyledAppBar = styled(AppBar)(({ scrolled }: { scrolled: boolean }) => ({
  backgroundColor: blueGrey[50],
  boxShadow: scrolled ? "6px 0 10px rgba(0,0,0,.2)" : "none",
}));

export const MobileNavigation = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(window.scrollY !== 0);

  useScroll({
    fn: () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) setScrolled(false);
      else setScrolled(true);
    },
  });

  return (
    <>
      <Menu visible={visible} close={() => setVisible(false)} type="home" />
      <StyledAppBar position="sticky" scrolled={scrolled}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton onClick={() => setVisible(true)}>
            <MenuIcon sx={{ color: blueGrey[600] }} fontSize="medium" />
          </IconButton>
          {/* <IconButton>
          <AccountIcon sx={{ color: blueGrey[800] }} fontSize="medium" />
        </IconButton> */}
          <LanguageSwitcher />
        </Toolbar>
      </StyledAppBar>
    </>
  );
};
