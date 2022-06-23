import { Container, Typography } from "@mui/material";

type Props = {
  title: string;
  subtitle: string;
};

export const Title = ({ title, subtitle }: Props) => {
  return (
    <Container sx={{ padding: "0", marginTop: { xs: 2, lg: 4 } }}>
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
