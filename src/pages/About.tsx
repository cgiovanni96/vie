import { Typography } from "@mui/material";
import { Page } from "@vie/components/Page";
import { useTranslation } from "react-i18next";

export const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <Typography textAlign="justify">{t("aboutText")}</Typography>
    </Page>
  );
};
