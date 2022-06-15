import { memo, Suspense } from "react";
import { Box, CircularProgress, Divider, Typography } from "@mui/material";

import { useGetImage } from "@vie/api/queries/getImage";
import { Mark } from "@vie/modules/Map/types";
import { Drawer } from "@vie/components/Drawer";
import { Children } from "@vie/types/types";
import { TextSwitcher } from "@vie/modules/Map/Text";
import { TypeEnum, Text } from "@vie/modules/Map/types";
import { typeToIcon } from "../icons";
import { useLayerStore } from "@vie/stores/useLayerStore";

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
        marginBottom: 2,
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

const DrawerTitle = ({ type, text }: { type?: TypeEnum; text?: Text }) => {
  if (!type || !text) return <>{""}</>;

  const Icon = typeToIcon(type);
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Icon />
      <Typography variant="h6" sx={{ marginLeft: 2 }}>
        <TextSwitcher text={text} />
      </Typography>
    </Box>
  );
};

export const InfoDrawer = memo(
  ({ mark, clearMark }: Props) => {
    const { selectedFeature } = useLayerStore();

    const closeDrawer = () => {
      clearMark();
    };

    const imageQuery = useGetImage({
      bucket: "marks",
      path: mark && mark.media[0],
    });

    return (
      <Drawer
        visible={mark !== undefined && selectedFeature === undefined}
        close={() => closeDrawer()}
        title={
          <DrawerTitle
            type={mark && mark.type.name}
            text={mark && mark.type.group.text}
          />
        }
        elevation={2}
        type="path"
        side="left"
      >
        {mark && (
          <>
            {imageQuery.data ? (
              <img
                src={URL.createObjectURL(imageQuery.data)}
                alt={mark && mark.media[0]}
                width="100%"
                height="300px"
                style={{
                  objectFit: "cover",
                }}
              />
            ) : (
              <Box
                sx={{
                  height: "300px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            )}
            <DrawerDivider margin={1} />
            <DrawerBox align="left" grow>
              <Typography>
                <TextSwitcher text={mark.text} />
              </Typography>
            </DrawerBox>
          </>
        )}
      </Drawer>
    );
  },
  (prev, next) => {
    return (
      (prev.mark === undefined && next.mark === undefined) ||
      (!!prev.mark && !!next.mark && prev.mark.name === next.mark.name)
    );
  }
);
