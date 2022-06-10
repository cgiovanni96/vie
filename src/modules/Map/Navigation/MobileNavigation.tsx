import { FilterAlt as Filter } from "@mui/icons-material";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { APP } from "@vie/constants";

type Props = {
  toggleFilterVisibility: () => void;
};

export const MobileNavigation = ({ toggleFilterVisibility }: Props) => {
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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {APP.name}
        </Typography>
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
