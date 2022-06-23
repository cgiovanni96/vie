import { Timer, LineWeight, Signpost } from "@mui/icons-material";
import { Box, List, ListItem, ListItemText, styled } from "@mui/material";
import { green } from "@mui/material/colors";
import { useTranslation } from "react-i18next";

const StyledListItemText = styled(ListItemText)(() => ({
  "& span": {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

type Props = {
  duration: string;
  altitude: string;
  distance: string;
};

export const Summary = ({ duration, distance, altitude }: Props) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        marginRight: { lg: 4 },
        marginBottom: { xs: 2, lg: 0 },
      }}
    >
      <List
        sx={(theme) => ({
          flex: 1,
          backgroundColor: green[400],
          color: "white",
          borderRadius: theme.spacing(1),
          boxShadow: "0 2px 6px rgba(0,0,0,.1)",
          display: "flex",
          flexDirection: "row",
        })}
      >
        <ListItem>
          <StyledListItemText>
            <Timer />
            <span>{t("hikeDuration")}</span>
            {duration}
          </StyledListItemText>
        </ListItem>

        <ListItem>
          <StyledListItemText>
            <LineWeight />
            <span>{t("hikeAltitude")}</span>
            {altitude}
          </StyledListItemText>
        </ListItem>

        <ListItem>
          <StyledListItemText>
            <Signpost />
            <span>{t("hikeDistance")}</span>
            {distance}
          </StyledListItemText>
        </ListItem>
      </List>
    </Box>
  );
};
