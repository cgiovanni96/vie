import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import { LanguageSwitcher } from "@vie/components/LanguageSwitcher";
import { Routing } from "@vie/components/Menu";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  marginBottom: theme.spacing(4),
  boxShadow: "4px 0 8px rgba(0,0,0,.1)",
}));

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const DesktopNavigation = () => {
  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>
        <img src="/media/logo.png" alt="logo" width={34} height={34} />

        <Routing row />

        <LanguageSwitcher />
      </StyledToolbar>
    </StyledAppBar>
  );
};
