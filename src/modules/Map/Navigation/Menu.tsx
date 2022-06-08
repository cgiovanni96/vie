import { Drawer } from "@vie/components/Drawer";
import { Info, Directions, Map } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

type NavigationMenuProps = {
  visible: boolean;
  close: () => void;
};

const RoutingData: Array<{ icon: JSX.Element; text: string; path: string }> = [
  { icon: <Info />, text: "Chi Siamo", path: "/chi-siamo" },
  { icon: <Map />, text: "La Mappa", path: "/mappa" },
  { icon: <Directions />, text: "I Sentieri", path: "sentieri" },
];

const Routing = () => {
  return (
    <List>
      {RoutingData.map(({ icon, text }, id) => (
        <ListItem key={id}>
          <ListItemButton>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{text}</ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export const Menu = ({ visible, close }: NavigationMenuProps) => {
  return (
    <Drawer
      visible={visible}
      close={close}
      elevation={2}
      type="navigation"
      title="VieDiArdesia"
      side="left"
    >
      <Routing />
    </Drawer>
  );
};
