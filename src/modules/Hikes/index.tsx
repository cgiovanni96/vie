import { Box, Button, Stack, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { Page } from "@vie/components/Page";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type HikeProps = {
  title: string;
  subtitle: string;
  path: string;
};

const Hike = ({ title, subtitle, path }: HikeProps) => {
  return (
    <Box
      sx={{
        background: "white",
        width: { xs: "100%", lg: "50vw" },
        mb: 4,
        py: 2,
        px: 4,
        borderRadius: 2,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="column">
          <Typography fontSize={24} fontWeight="bold">
            {title}
          </Typography>

          <Typography fontSize={18}>{subtitle}</Typography>
        </Stack>

        <Button
          component={Link}
          to={path}
          sx={{
            height: "50%",
            margin: "auto 0",
            backgroundColor: green[400],
            color: "white",
            "&:hover": { backgroundColor: green[800] },
          }}
        >
          Vai
        </Button>
      </Stack>
    </Box>
  );
};

export const Hikes = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <Hike
        title={t("santagiulia-colla.title")}
        subtitle={t("santagiulia-colla.subtitle")}
        path="/sentieri/santagiulia-colla"
      />
    </Page>
  );
};
