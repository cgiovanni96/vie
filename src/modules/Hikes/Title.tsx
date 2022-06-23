import { Box, Container, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { KeyboardDoubleArrowLeft } from "@mui/icons-material";

type Props = {
  title: string;
  subtitle: string;
};

export const Title = ({ title, subtitle }: Props) => {
  return (
    <Container sx={{ padding: "0", marginTop: { xs: 2 } }}>
      <Typography
        fontSize={14}
        sx={{ "& a": { color: blue[600], textDecoration: "none" } }}
        textAlign="center"
        mb={2}
      >
        <Box
          component={Link}
          to="/sentieri"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <KeyboardDoubleArrowLeft /> Torna ai sentieri
        </Box>
      </Typography>
      <Typography
        textAlign="center"
        fontWeight="bold"
        fontSize={{ xs: 42, lg: 64 }}
        lineHeight={1}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        textAlign="center"
        py={2}
        fontSize={{ xs: 18, lg: 24 }}
      >
        {subtitle}
      </Typography>
    </Container>
  );
};
