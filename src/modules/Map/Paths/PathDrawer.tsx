import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import {
  Hiking,
  Timer,
  LineWeight,
  Signpost,
  MenuBook,
} from "@mui/icons-material";

import { useGetPath } from "@vie/api/queries/getPath";

import { Drawer } from "@vie/components/Drawer";
import { FeaturePath } from "@vie/types/geojson";
import { Children } from "@vie/types/types";
import { memo } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  featurePath?: FeaturePath;
  close: () => void;
};

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

const DrawerTitle = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Hiking />
      <Typography variant="h6" sx={{ marginLeft: 2 }}>
        {t("pathDrawerTitle")}
      </Typography>
    </Box>
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

export const PathDrawer = memo(
  ({ featurePath, close }: Props) => {
    const pathQuery = useGetPath({
      path: featurePath && featurePath.properties.path,
    });

    return (
      <Drawer
        visible={featurePath !== undefined}
        close={close}
        side="left"
        type="path"
        elevation={2}
        title={<DrawerTitle />}
      >
        {!pathQuery.data || (pathQuery.isLoading && <CircularProgress />)}
        {pathQuery.data && (
          <>
            <DrawerBox align="left">
              <Typography variant="body1" sx={{ paddingRight: 10 }}>
                {pathQuery.data.title}
              </Typography>
              <a href={`/sentieri/${pathQuery.data.name}`}>
                <Button component="a" variant="contained" disableElevation>
                  <MenuBook />
                </Button>
              </a>
            </DrawerBox>

            <DrawerDivider margin={1} />

            <Grid container spacing={0}>
              <Item>
                <Timer color="primary" />
                <Typography>{pathQuery.data.duration}</Typography>
              </Item>
              <Item>
                <LineWeight color="primary" />
                <Typography>{pathQuery.data.altitude}</Typography>
              </Item>
              <Item>
                <Signpost color="primary" />
                <Typography>{pathQuery.data.height}</Typography>
              </Item>
            </Grid>

            <DrawerDivider margin={1} />
          </>
        )}
      </Drawer>
    );
  },
  (prev, next) => prev.featurePath === next.featurePath
);
