import * as MapGl from "react-map-gl";
import { blueGrey } from "@mui/material/colors";

import { Mark } from "@vie/modules/Map/types";
import { typeToIcon } from "./utils";

type Props = {
  marks: Mark[];
};
export const Markers = ({ marks }: Props) => {
  return (
    <>
      {marks.map((mark) => {
        const MarkerIcon = typeToIcon(mark.type.name);
        return (
          <MapGl.Marker
            key={mark.name}
            latitude={mark.position.latitude}
            longitude={mark.position.longitude}
            onClick={() => console.log("clicked", mark.name)}
            clickTolerance={0.5}
          >
            <MarkerIcon sx={{ color: blueGrey[900] }} />
          </MapGl.Marker>
        );
      })}
    </>
  );
};
