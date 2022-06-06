import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();

  return <Button variant="contained">{t("name")}</Button>;
};
