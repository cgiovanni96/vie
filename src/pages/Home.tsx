import { Box, Container, Grid, Typography } from "@mui/material";
import { APP } from "@vie/constants";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <img
          src="/media/logo.png"
          alt="Hero img"
          width="80%"
          style={{ objectFit: "cover", margin: "0 auto" }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        md={12}
        sx={{ paddingTop: "0 !important", marginTop: -3 }}
      >
        <Container sx={{ width: "100%" }}>
          <Typography
            textAlign={"center"}
            fontWeight="bold"
            sx={{ fontSize: "55px", wordSpacing: "-4px" }}
          >
            VIE DI ARDESIA
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
};
