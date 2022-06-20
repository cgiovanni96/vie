import { Stack } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useBreakpoint } from "@vie/hooks/useBreakpoint";
import { Navigation } from "@vie/modules/Core/Navigation";
import { Hero } from "@vie/modules/Home/Hero";

export const HomePage = () => {
  const { mediaQuery } = useBreakpoint("md");

  return (
    <>
      <Stack
        direction="column"
        spacing={0}
        bgcolor={blueGrey[50]}
        sx={{ minHeight: "100vh" }}
      >
        <Navigation />
        <Hero />
      </Stack>
    </>
  );
};
