import { Box, Typography } from "@mui/material";
import { Markdown } from "@vie/components/Markdown";
import { Page } from "@vie/components/Page";
import { useTranslation } from "react-i18next";

export const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <Box
        sx={{
          "& p": {
            margin: "1rem 0",
            textAlign: "justify",
            width: { xs: "100%", lg: "75%" },
          },
          "& h2": {
            fontSize: "22px",
            width: { xs: "100%", lg: "75%" },
          },
        }}
      >
        <Markdown text={t("aboutText")} />
      </Box>
    </Page>
  );
};
