import { Drawer, DrawerType } from "@vie/components/Drawer";
import { Info, Directions, Map } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

type NavigationMenuProps = {
  visible: boolean;
  close: () => void;
  type: DrawerType;
};

const RoutingData: Array<{ icon: JSX.Element; text: string; path: string }> = [
  { icon: <Info />, text: "Chi Siamo", path: "/chi-siamo" },
  { icon: <Map />, text: "La Mappa", path: "/mappa" },
  { icon: <Directions />, text: "I Sentieri", path: "sentieri" },
];

type Props = {
  row?: boolean;
};

export const Routing = ({ row }: Props) => {
  return (
    <List sx={{ display: row ? "flex" : "inherit" }}>
      {RoutingData.map(({ icon, text, path }, id) => (
        <Link to={path} key={id}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText>{text}</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export const Menu = ({ visible, close, type }: NavigationMenuProps) => {
  return (
    <Drawer
      visible={visible}
      close={close}
      elevation={2}
      type={type}
      side="left"
    >
      <Routing />
    </Drawer>
  );
};
