import { Box, Container, Grid, Typography } from "@mui/material";
import { APP } from "@vie/constants";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { green } from "@mui/material/colors";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} sx={{ marginTop: 3 }}>
        <motion.img
          src="/media/hero-logo.png"
          alt="Hero img"
          width="60%"
          style={{ objectFit: "cover", margin: "0 auto" }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        md={12}
        sx={{ paddingTop: "0 !important", marginTop: -1 }}
      >
        <Container sx={{ width: "100%" }}>
          <Typography
            textAlign={"center"}
            fontWeight="bold"
            sx={{ fontSize: "44px", wordSpacing: "-4px" }}
          >
            <span style={{ color: green[400] }}>Vie</span> di Ardesia
          </Typography>

          <Container
            sx={{ width: "90%", margin: "0 auto", marginTop: "-10px" }}
          >
            <Typography
              textAlign={"center"}
              sx={{ fontSize: "28px" }}
              lineHeight={"1.4rem"}
            >
              Un nuovo strumento per i{" "}
              <span style={{ color: green[400], fontWeight: "bold" }}>
                nostri
              </span>{" "}
              sentieri
            </Typography>
          </Container>
        </Container>
      </Grid>
    </Grid>
  );
};
