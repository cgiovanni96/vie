import { Stack, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Markdown } from "@vie/components/Markdown";
import { Page } from "@vie/components/Page";

import { Summary } from "@vie/modules/Hikes/Summary";
import { Title } from "@vie/modules/Hikes/Title";

export const BasilicaSanGiacomo = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Title
        title={t("basilica-sangiacomo.title")}
        subtitle={t("basilica-sangiacomo.subtitle")}
      />

      <Stack direction={{ xs: "column", lg: "row" }} my={{ xs: 2, lg: 4 }}>
        <Summary duration="1h45min" altitude="530m" distance="5.2km" />

        <Box sx={{ flex: 2, display: "flex", alignItems: "center" }}>
          <Markdown
            text={t("basilica-sangiacomo.paragraph1")}
            typographyProps={{ textAlign: "justify" }}
          />
        </Box>
      </Stack>

      <Stack direction={{ xs: "column", lg: "row" }} my={{ xs: 2, lg: 4 }}>
        <Box
          component="img"
          src="/hikes/basilica-sangiacomo/2.png"
          mr={{ lg: 4 }}
          mb={{ xs: 2, lg: 0 }}
        />

        <Stack direction="column" justifyContent={{ lg: "space-between" }}>
          <Markdown
            text={t("basilica-sangiacomo.paragraph2")}
            typographyProps={{ textAlign: "justify" }}
          />

          <Markdown
            text={t("basilica-sangiacomo.paragraph3")}
            typographyProps={{ textAlign: "justify" }}
          />
        </Stack>
      </Stack>

      <Stack direction={{ xs: "column", lg: "row" }} my={{ xs: 2, lg: 4 }}>
        <Box
          component="img"
          src="/hikes/basilica-sangiacomo/3.png"
          mr={{ lg: 4 }}
          mb={{ xs: 2, lg: 0 }}
        />

        <Markdown
          text={t("basilica-sangiacomo.paragraph4")}
          typographyProps={{ textAlign: "justify" }}
        />

        <Box
          component="img"
          src="/hikes/basilica-sangiacomo/5.png"
          ml={{ lg: 4 }}
          mb={{ xs: 2, lg: 0 }}
        />
      </Stack>

      <Stack
        direction={{ xs: "column", lg: "row" }}
        my={{ xs: 2, lg: 4 }}
        justifyContent={{ lg: "space-between" }}
      >
        <Box
          component="img"
          src="/hikes/basilica-sangiacomo/1.png"
          mb={{ xs: 2, lg: 0 }}
        />

        <Box
          component="img"
          src="/hikes/basilica-sangiacomo/4.png"
          mb={{ xs: 2, lg: 0 }}
        />
      </Stack>
    </Page>
  );
};
