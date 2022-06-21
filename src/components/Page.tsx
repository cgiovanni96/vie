import { Stack } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Navigation } from "@vie/modules/Core/Navigation";
import { Children } from "@vie/types/types";

type Props = { full?: boolean } & Children;

export const Page = ({ full, children }: Props) => {
  return (
    <Stack
      direction="column"
      spacing={0}
      bgcolor={blueGrey[50]}
      sx={{
        minHeight: "100vh",
      }}
    >
      <Navigation />

      <Stack
        direction="column"
        flex={1}
        sx={{
          margin: { xs: "0 1rem", lg: full ? "0 1rem" : "0 auto" },
          width: { xs: "100%", lg: full ? "100%" : "75%" },
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
};
