import { Box, Container, Stack, Typography } from "@mui/material";

export const Hero = () => {
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

      <Container sx={{ flex: { lg: 1 } }}>
        <Typography>Hello</Typography>
      </Container>
    </Stack>
  );
};
