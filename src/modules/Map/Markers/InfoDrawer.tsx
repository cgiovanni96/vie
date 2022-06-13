import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";

import { Timer, LineWeight, Signpost, MenuBook } from "@mui/icons-material";
import { useLayerStore } from "@vie/stores/useLayerStore";
import { Drawer } from "@vie/components/Drawer";
import { Children } from "@vie/types/types";
import { Mark } from "@vie/modules/Map/types";
import { useGetImage } from "@vie/api/queries/getImage";
import { memo } from "react";

const Item = ({ children }: Children) => {
  return (
    <Grid item xs={4}>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {children}
      </Paper>
    </Grid>
  );
};

export type DrawerDrividerProps = {
  margin: number;
};
const DrawerDivider = ({ margin }: DrawerDrividerProps) => {
  return <Divider sx={{ marginTop: margin, marginBottom: margin }} />;
};

export type DrawerBoxProps = {
  align: "center" | "left";
  grow?: boolean;
} & Children;
const DrawerBox = ({ children, align, grow }: DrawerBoxProps) => {
  return (
    <Box
      sx={{
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 2,
        textAlign: align,
        flex: grow ? 1 : 0,
        display: "flex",
        justifyContent: !grow ? "space-between" : "flex-start",
        alignItems: !grow ? "center" : "flex-start",
      }}
    >
      {children}
    </Box>
  );
};

type Props = {
  mark: Mark | undefined;
  clearMark: () => void;
};

// https://mzxteidxlrdbrolvnbie.supabase.co/storage/v1/object/marks/gardening/gardening4.jpeg
// https://mzxteidxlrdbrolvnbie.supabase.co/storage/v1/object/marks/gardening/gardening4.jpeg

export const InfoDrawer = memo(
  ({ mark, clearMark }: Props) => {
    const closeDrawer = () => {
      clearMark();
    };

    const imageQuery = useGetImage({
      bucket: "marks",
      path: mark && mark.media[0],
    });

    console.log("SELECTED", mark);

    return (
      <Drawer
        visible={mark !== undefined}
        close={() => closeDrawer()}
        elevation={2}
        type="path"
        side="left"
      >
        {imageQuery.data && (
          <img
            src={URL.createObjectURL(imageQuery.data)}
            alt={mark && mark.media[0]}
            width="100%"
            height="300px"
            style={{ objectFit: "cover" }}
          />
        )}

        <DrawerDivider margin={1} />

        <DrawerBox align="left" grow>
          <Typography>{mark && mark.text.it}</Typography>
        </DrawerBox>

        <DrawerBox align="center">
          <Button
            variant="contained"
            disableElevation
            sx={{ marginBottom: 1, width: "100%" }}
          >
            Leggi
          </Button>
        </DrawerBox>
      </Drawer>
    );
  },
  (prev, next) => {
    return prev.mark === next.mark;
  }
);
