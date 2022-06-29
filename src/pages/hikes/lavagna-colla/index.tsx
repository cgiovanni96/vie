import { Box, Stack, Typography } from "@mui/material";
import { Markdown } from "@vie/components/Markdown";
import { Page } from "@vie/components/Page";
import { useTranslation } from "react-i18next";

import { Summary } from "@vie/modules/Hikes/Summary";
import { Title } from "@vie/modules/Hikes/Title";

export const LavagnaColla = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Title
        title={t("lavagna-colla.title")}
        subtitle={t("lavagna-colla.subtitle")}
      />

      <Stack direction={{ xs: "column", lg: "row" }} my={{ xs: 2, lg: 4 }}>
        <Summary duration="3h45m" altitude="701m" distance="7.6km" />

        <Box sx={{ flex: 2, display: "flex", alignItems: "center" }}>
          <Markdown
            text={t("lavagna-colla.paragraph1")}
            typographyProps={{ textAlign: "justify" }}
          />
        </Box>
      </Stack>

      <Stack direction={{ xs: "column", lg: "row" }} my={{ xs: 2, lg: 4 }}>
        <Box component="img" src="/hikes/lavagna-colla/1.png" pr={{ lg: 4 }} />

        <Markdown
          text={t("lavagna-colla.paragraph2")}
          typographyProps={{ textAlign: "justify" }}
        />

        <Box component="img" src="/hikes/lavagna-colla/2.png" pl={{ lg: 4 }} />
      </Stack>

      <Stack direction={{ xs: "column", lg: "row" }} my={{ xs: 2, lg: 4 }}>
        <Box component="img" src="/hikes/lavagna-colla/3.png" pr={{ lg: 4 }} />
        <Markdown
          text={t("lavagna-colla.paragraph3")}
          typographyProps={{ textAlign: "justify", mr: { lg: 4 } }}
        />
        <Markdown
          text={t("lavagna-colla.paragraph4")}
          typographyProps={{ textAlign: "justify" }}
        />
      </Stack>

      <Stack direction="column" mt={2} mb={4}>
        <Box
          component="img"
          src="/hikes/lavagna-colla/5.png"
          alt="Panoramica"
          sx={{ width: { lg: "60%" }, objectFit: "cover", margin: "0 auto" }}
        />

        <Box sx={{ margin: "0 auto", marginTop: 1 }}>
          <Markdown text={t("lavagna-colla.viewCaption")} />
        </Box>
      </Stack>
    </Page>
  );
};
