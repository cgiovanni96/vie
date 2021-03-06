import {
  Box,
  Drawer as MuiDrawer,
  styled,
  SwipeableDrawer,
  useMediaQuery,
} from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import { useTheme } from "@mui/system";
import { ReactNode } from "react";
import { Header } from "./Header";

export type DrawerType = "navigation" | "path" | "filter" | "home";

export type DrawerProps = {
  visible: boolean;
  close: () => void;
  elevation: number;
  children: ReactNode;
  title?: string | ReactNode;
  type: DrawerType;
  side: "left" | "right";
};

const Puller = styled(Box)(({ theme }) => ({
  width: 50,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

export const Drawer = ({
  visible,
  close,
  elevation,
  children,
  type,
  title,
  side,
}: DrawerProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      {type === "home" || matches ? (
        <MuiDrawer
          anchor={side}
          open={visible}
          onClose={close}
          variant={type === "path" ? "persistent" : "temporary"}
          ModalProps={
            type === "navigation"
              ? {
                  sx: {
                    "& > .MuiBackdrop-root": {
                      backgroundColor: "rgba(0,0,0,0) !important",
                    },
                  },
                }
              : undefined
          }
          elevation={elevation}
          PaperProps={{
            sx: {
              width:
                type === "navigation"
                  ? "300px"
                  : type === "path"
                  ? "400px"
                  : type === "home"
                  ? "100vw"
                  : "400px",

              backgroundColor: blueGrey[50],
            },
          }}
        >
          <Header close={close} title={title} />
          {children}
        </MuiDrawer>
      ) : (
        <SwipeableDrawer
          anchor="bottom"
          open={visible}
          onClose={close}
          onOpen={() => console.log("open")}
          disableSwipeToOpen={false}
          sx={{ backgroundColor: blueGrey[50] }}
          ModalProps={{ sx: { background: "transparent" } }}
        >
          <Puller />
          <Header close={close} title={title} />
          {children}
        </SwipeableDrawer>
      )}
    </>
  );
};
