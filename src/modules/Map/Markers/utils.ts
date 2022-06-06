import BusStationIcon from "@mui/icons-material/DirectionsBus";
import CampingIcon from "@mui/icons-material/OutdoorGrill";
import MountainIcon from "@mui/icons-material/Landscape";
import ChurchIcon from "@mui/icons-material/Church";
import CicleIcon from "@mui/icons-material/PedalBike";
import DrinkinIcon from "@mui/icons-material/LocalDrink";
import FirefighterIcon from "@mui/icons-material/LocalFireDepartment";
import FloraIcon from "@mui/icons-material/LocalFlorist";
import MonumentIcon from "@mui/icons-material/AccountBalance";
import HarbourIcon from "@mui/icons-material/Sailing";
import HospitalIcon from "@mui/icons-material/LocalHospital";
import InfoIcon from "@mui/icons-material/Info";
import LibraryIcon from "@mui/icons-material/LocalLibrary";
import PharmacyIcon from "@mui/icons-material/LocalPharmacy";
import PicnicIcon from "@mui/icons-material/Deck";
import CrossIcon from "@mui/icons-material/AddCircleOutline";
import ViewIcon from "@mui/icons-material/CrisisAlert";
import GardeningIcon from "@mui/icons-material/Forest";
import TrainIcon from "@mui/icons-material/Train";
import ResistanceIcon from "@mui/icons-material/Tour";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

import { TypeEnum } from "../types";

type Icon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
};

const map: Record<TypeEnum, Icon> = {
  [TypeEnum.busStation]: BusStationIcon,
  [TypeEnum.trainStation]: TrainIcon,
  [TypeEnum.camping]: CampingIcon,
  [TypeEnum.cave]: MountainIcon,
  [TypeEnum.chapel]: ChurchIcon,
  [TypeEnum.church]: ChurchIcon,
  [TypeEnum.cicle]: CicleIcon,
  [TypeEnum.drinking]: DrinkinIcon,
  [TypeEnum.firefighter]: FirefighterIcon,
  [TypeEnum.flora]: FloraIcon,
  [TypeEnum.gardening]: GardeningIcon,
  [TypeEnum.harbour]: HarbourIcon,
  [TypeEnum.hospital]: HospitalIcon,
  [TypeEnum.iat]: InfoIcon,
  [TypeEnum.library]: LibraryIcon,
  [TypeEnum.monument]: MonumentIcon,
  [TypeEnum.pharmacy]: PharmacyIcon,
  [TypeEnum.picnic]: PicnicIcon,
  [TypeEnum.redcross]: CrossIcon,
  [TypeEnum.resistance]: ResistanceIcon,
  [TypeEnum.view]: ViewIcon,
};

export const typeToIcon = (type: TypeEnum): Icon => {
  return map[type];
};
