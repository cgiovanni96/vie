import { Drawer, DrawerType } from "@vie/components/Drawer";
import { Info, Directions, Map, Home } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { blueGrey } from "@mui/material/colors";
import { useTranslation } from "react-i18next";

type NavigationMenuProps = {
  visible: boolean;
  close: () => void;
  type: DrawerType;
};

const RoutingData: Array<{ icon: JSX.Element; text: string; path: string }> = [
  { icon: <Home />, text: "routingHome", path: "/" },
  { icon: <Info />, text: "routingAbout", path: "/chi-siamo" },
  { icon: <Map />, text: "routingMap", path: "/mappa" },
  { icon: <Directions />, text: "routingHike", path: "sentieri" },
];

type Props = {
  row?: boolean;
};

export const Routing = ({ row }: Props) => {
  const { t } = useTranslation();

  return (
    <List
      sx={{
        display: row ? "flex" : "default",
        "& a": { color: blueGrey[900], textDecoration: "none" },
      }}
    >
      {RoutingData.map(({ icon, text, path }, id) => (
        <Link to={path} key={id}>
          <ListItem>
            <ListItemButton sx={{ background: blueGrey[100], py: 2 }}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText>{t(text)}</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export const Menu = ({ visible, close, type }: NavigationMenuProps) => {
  const { t } = useTranslation();
  return (
    <Drawer
      visible={visible}
      close={close}
      elevation={2}
      type={type}
      side="left"
      title={t("routingTitle")}
    >
      <Routing />
    </Drawer>
  );
};
