import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ArrowIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <Stack sx={{ flexDirection: { xs: "column", lg: "row" } }}>
      <Container
        sx={{
          width: { xs: "80%" },
          margin: { xs: "0 auto" },
          transform: { lg: "translateX(20%)" },
          flex: { lg: 1 },
        }}
      >
        <Box
          component={motion.img}
          src="/media/logo.png"
          alt="Logo vie di ardesia"
          sx={{
            width: { xs: "100%", lg: "45%" },
            objectFit: "cover",
            margin: { lg: "0 auto" },
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </Container>

      <Container
        sx={(theme) => ({
          flex: { lg: 1 },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", lg: "flex-start" },
          justifyContent: { xs: "flex-start", lg: "center" },
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
          lineHeight="2rem"
          sx={{
            fontSize: "36px",
            width: { xs: "90%", lg: "60%" },
            "& span": { color: green[700], fontWeight: "bold" },
            textAlign: { xs: "center", lg: "left" },
          }}
          dangerouslySetInnerHTML={{ __html: t("heroSubtitle") }}
        />

        <Box
          sx={(theme) => ({
            display: "flex",
            justifyContent: "center",
            marginTop: { xs: theme.spacing(2), lg: theme.spacing(4) },
          })}
        >
          <Button
            component={Link}
            to="/mappa"
            variant="contained"
            sx={{
              boxShadow: "none",
              backgroundColor: green[700],
              py: 2,
              "&:hover": { backgroundColor: green[800] },
            }}
            endIcon={<ArrowIcon />}
          >
            {t("heroCta")}
          </Button>
        </Box>
      </Container>
    </Stack>
  );
};
