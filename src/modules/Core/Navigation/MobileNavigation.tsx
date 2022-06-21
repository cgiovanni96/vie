import { AppBar, Grid, IconButton, styled, Toolbar } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

import MenuIcon from "@mui/icons-material/Menu";
import AccountIcon from "@mui/icons-material/AccountCircle";
import { Menu } from "@vie/components/Menu";
import { useState } from "react";
import { LanguageSwitcher } from "@vie/components/LanguageSwitcher";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
}));

export const MobileNavigation = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <Menu visible={visible} close={() => setVisible(false)} type="home" />
      <StyledAppBar position="sticky">
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
