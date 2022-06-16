import { FilterAlt as Filter } from "@mui/icons-material";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { LanguageSwitcher } from "@vie/components/LanguageSwitcher";
import { APP } from "@vie/constants";

type Props = {
  toggleFilterVisibility: () => void;
  toggleMenuVisibility: () => void;
};

export const MobileNavigation = ({
  toggleFilterVisibility,
  toggleMenuVisibility,
}: Props) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: "background.paper",
        color: "text.primary",
        borderRadius: "8px 8px 0 0",
      }}
    >
      <Toolbar sx={{ minHeight: "0 !important", padding: 1 }}>
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleMenuVisibility}
        >
          <img src="/media/logo.png" alt="logo" width={34} height={34} />
        </IconButton>
        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
          {APP.name}
        </Typography>

        <LanguageSwitcher />
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="filter"
          onClick={toggleFilterVisibility}
        >
          <Filter />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
