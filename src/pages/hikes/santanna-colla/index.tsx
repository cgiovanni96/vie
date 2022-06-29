import { useTranslation } from "react-i18next";
import { Stack, Box, Typography } from "@mui/material";

import { Page } from "@vie/components/Page";
import { Title } from "@vie/modules/Hikes/Title";
import { Summary } from "@vie/modules/Hikes/Summary";
import { Markdown } from "@vie/components/Markdown";

export const SantannaColla = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <Title
        title={t("santanna-colla.title")}
        subtitle={t("santanna-colla.subtitle")}
      />

      <Stack direction={{ xs: "column", lg: "row" }} my={{ xs: 2, lg: 4 }}>
        <Summary duration="2h30m" altitude="695m" distance="5.8km" />

        <Box sx={{ flex: 2, display: "flex", alignItems: "center" }}>
          <Markdown text={t("santanna-colla.paragraph1")} />
        </Box>
      </Stack>

      <Stack direction={{ xs: "column", lg: "row" }} my={{ xs: 2, lg: 4 }}>
        <Box component="img" src="/hikes/santanna-colla/1.png" mr={{ lg: 4 }} />

        <Markdown
          text={t("santanna-colla.paragraph2")}
          typographyProps={{ textAlign: "justify", mt: { xs: 2, lg: 0 } }}
        />
        <Box component="img" src="/hikes/santanna-colla/2.png" ml={{ lg: 4 }} />
      </Stack>

      <Stack direction={{ xs: "column", lg: "row" }} my={{ xs: 2, lg: 4 }}>
        <Box component="img" src="/hikes/santanna-colla/3.png" mr={{ lg: 8 }} />

        <Stack direction="column">
          <Markdown
            text={t("santanna-colla.paragraph3")}
            typographyProps={{ textAlign: "justify", mt: { xs: 2, lg: 0 } }}
          />

          <Markdown text={t("santanna-colla.paragraph4")} />
        </Stack>

        <Box
          component="img"
          src="/hikes/santanna-colla/6.png"
          ml={{ lg: 8 }}
          sx={{ display: { xs: "none", lg: "inline-block" } }}
        />
      </Stack>

      <Stack direction={{ xs: "column", lg: "row" }} my={{ xs: 2, lg: 0 }}>
        <Stack
          direction="column"
          flex={{ lg: 1 }}
          sx={{ justifyContent: { lg: "space-evenly" } }}
        >
          <Markdown
            text={t("santanna-colla.paragraph5")}
            typographyProps={{ textAlign: "justify", mt: { xs: 2, lg: 4 } }}
          />

          <Box component="img" src="/hikes/santanna-colla/5.png" />
        </Stack>

        <Box
          component="img"
          src="/hikes/santanna-colla/7.png"
          flex={{ lg: 1.5 }}
          ml={{ lg: 4 }}
          mt={{ xs: 2, lg: 0 }}
        />
      </Stack>
    </Page>
  );
};
