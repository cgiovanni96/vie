import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";

import { FilterAlt as Filter } from "@mui/icons-material";
import { APP } from "@vie/constants";

export const DesktopNavigation = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: 100,
        width: "100vw",
      }}
    >
      <AppBar
        position="static"
        sx={{
          width: "33%",
          marginTop: 2,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 2,
          backgroundColor: "background.paper",
          boxShadow: 2,
          color: "text.primary",
        }}
      >
        <Toolbar sx={{ minHeight: "0 !important", padding: 1 }}>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            // onClick={toggleMenuVisibility}
          >
            <img src="/media/logo.png" alt="logo" width={34} height={34} />
          </IconButton>
          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
            {APP.name}
          </Typography>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="filter"
          >
            <Filter />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
