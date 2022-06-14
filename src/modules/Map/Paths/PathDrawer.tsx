import { Drawer } from "@vie/components/Drawer";
import { useLayerStore } from "@vie/stores/useLayerStore";
import { FeaturePath } from "@vie/types/geojson";
import { Feature, LineString } from "geojson";
import { memo } from "react";

type Props = {
  featurePath?: FeaturePath;
  close: () => void;
};

export const PathDrawer = memo(
  ({ featurePath, close }: Props) => {
    console.log("featurePath", featurePath);
    return (
      <Drawer
        visible={featurePath !== undefined}
        close={close}
        side="left"
        type="path"
        elevation={2}
      >
        <>{featurePath?.properties.path}</>
      </Drawer>
    );
  },
  (prev, next) => prev.featurePath === next.featurePath
);
