import { Close } from "@mui/icons-material";
import { Box, Typography, IconButton } from "@mui/material";
import { ReactNode } from "react";

export type DrawerHeaderProps = {
  close: () => void;
  title?: string | ReactNode;
};

export const Header = ({ close, title }: DrawerHeaderProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: title !== undefined ? "space-between" : "flex-end",
        alignItems: "center",
        p: 2,
      }}
    >
      {title && typeof title === "string" ? (
        <Typography variant="h6">{title}</Typography>
      ) : (
        <>{title}</>
      )}

      <IconButton color="inherit" onClick={close}>
        <Close />
      </IconButton>
    </Box>
  );
};
