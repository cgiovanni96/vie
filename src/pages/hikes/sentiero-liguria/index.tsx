import { Box, Stack } from "@mui/material";
import { Markdown } from "@vie/components/Markdown";
import { Page } from "@vie/components/Page";
import { useTranslation } from "react-i18next";
import { Summary } from "@vie/modules/Hikes/Summary";
import { Title } from "@vie/modules/Hikes/Title";

export const SentieroLiguria = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <Title
        title={t("sentiero-liguria.title")}
        subtitle={t("sentiero-liguria.subtitle")}
      />

      <Stack direction={{ xs: "column", lg: "row" }} my={{ xs: 2, lg: 4 }}>
        <Summary duration="3h" altitude="305m" distance="7.1km" />

        <Box sx={{ flex: 2, display: "flex", alignItems: "center" }}>
          <Markdown
            text={t("sentiero-liguria.paragraph1")}
            typographyProps={{ textAlign: "justify" }}
          />
        </Box>
      </Stack>

      <Stack direction={{ xs: "column", lg: "row" }} my={{ xs: 2, lg: 4 }}>
        <Box
          component="img"
          src="/hikes/sentiero-liguria/2.png"
          mb={{ xs: 2, lg: 0 }}
        />
        <Markdown
          text={t("sentiero-liguria.paragraph2")}
          typographyProps={{ textAlign: "justify", mx: { lg: 4 } }}
        />

        <Box component="img" src="/hikes/sentiero-liguria/1.png" />
      </Stack>

      <Stack direction={{ xs: "column", lg: "row" }} my={{ xs: 2, lg: 4 }}>
        <Box
          component="img"
          src="/hikes/sentiero-liguria/3.png"
          mr={{ lg: 4 }}
          mb={{ xs: 2, lg: 0 }}
        />
        <Markdown
          text={t("sentiero-liguria.paragraph3")}
          typographyProps={{ textAlign: "justify" }}
          headerProps={{ textAlign: { xs: "center", lg: "left" } }}
        />
      </Stack>
    </Page>
  );
};
