import { Stack, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Markdown } from "@vie/components/Markdown";
import { Page } from "@vie/components/Page";

import { Summary } from "@vie/modules/Hikes/Summary";
import { Title } from "@vie/modules/Hikes/Title";

export const CaviSelva = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <Title
        title={t("cavi-selva.title")}
        subtitle={t("cavi-selva.subtitle")}
      />

      <Stack direction={{ xs: "column", lg: "row" }} my={{ xs: 2, lg: 4 }}>
        <Summary duration="3h30m" altitude="490m" distance="7.8km" />

        <Box sx={{ flex: 2, display: "flex", alignItems: "center" }}>
          <Markdown
            text={t("cavi-selva.paragraph1")}
            typographyProps={{ textAlign: "justify" }}
          />
        </Box>
      </Stack>

      <Box
        component="img"
        src="/hikes/cavi-selva/3.png"
        sx={{
          objectFit: "cover",
          width: { xs: "100%", lg: "60%" },
          mx: "auto",
        }}
      />

      <Stack direction={{ xs: "column", lg: "row" }} my={{ xs: 2, lg: 4 }}>
        {/* <Box component="img" src="/hikes/cavi-selva/1.png" pr={{ lg: 4 }} /> */}

        <Markdown
          text={t("cavi-selva.paragraph2")}
          typographyProps={{ textAlign: "justify", mr: { lg: 4 } }}
        />

        <Markdown
          text={t("cavi-selva.paragraph3")}
          typographyProps={{ textAlign: "justify", mr: { lg: 4 } }}
        />

        <Markdown
          text={t("cavi-selva.paragraph4")}
          typographyProps={{ textAlign: "justify" }}
        />
      </Stack>

      <Stack
        direction={{ xs: "column", lg: "row" }}
        my={{ xs: 2, lg: 2 }}
        justifyContent={{ lg: "space-between" }}
      >
        <Box component="img" src="/hikes/cavi-selva/1.png" mb={{ xs: 2 }} />

        <Box component="img" src="/hikes/cavi-selva/2.png" />
      </Stack>
    </Page>
  );
};
