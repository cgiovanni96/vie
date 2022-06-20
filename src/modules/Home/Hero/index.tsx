import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ArrowIcon from "@mui/icons-material/ArrowForward";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <Stack sx={{ flexDirection: { xs: "column", lg: "row" } }}>
      <Container
        sx={{
          width: { xs: "80%" },
          margin: "0 auto",
          flex: { lg: 1 },
        }}
      >
        <Box
          component="img"
          src="/media/logo.png"
          alt="Logo vie di ardesia"
          sx={{
            width: { xs: "100%", lg: "50%" },
            objectFit: "cover",
            margin: { lg: "0 auto" },
          }}
        />
      </Container>

      <Container
        sx={(theme) => ({
          flex: { lg: 1 },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", lg: "flex-start" },
          marginTop: { xs: theme.spacing(2), lg: "none" },
        })}
      >
        <Typography sx={{ fontSize: "48px", fontWeight: "bold" }}>
          <Box component="span" sx={{ color: green[700] }}>
            {" "}
            Vie{" "}
          </Box>
          di Ardesia
        </Typography>

        <Typography
          textAlign="center"
          lineHeight="2rem"
          sx={{
            fontSize: "36px",
            width: { xs: "90%", lg: "100%" },
            "& span": { color: green[700], fontWeight: "bold" },
          }}
        >
          <p dangerouslySetInnerHTML={{ __html: t("heroSubtitle") }} />
        </Typography>
      </Container>

      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "center",
          marginTop: theme.spacing(2),
        })}
      >
        <Button
          component={Link}
          to="/mappa"
          variant="contained"
          sx={{ boxShadow: "none", backgroundColor: green[700] }}
          endIcon={<ArrowIcon />}
        >
          {t("heroCta")}
        </Button>
      </Box>
    </Stack>
  );
};
