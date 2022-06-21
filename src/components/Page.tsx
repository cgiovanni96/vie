import { Stack } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Navigation } from "@vie/modules/Core/Navigation";
import { Children } from "@vie/types/types";

type Props = Children;

export const Page = ({ children }: Props) => {
  return (
    <Stack
      direction="column"
      spacing={0}
      bgcolor={blueGrey[50]}
      sx={{ minHeight: "100vh" }}
    >
      <Navigation />

      {children}
    </Stack>
  );
};
