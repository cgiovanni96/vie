import { Box, Stack } from "@mui/material";
import { Markdown } from "@vie/components/Markdown";
import { Page } from "@vie/components/Page";
import { useTranslation } from "react-i18next";
import { Summary } from "@vie/modules/Hikes/Summary";
import { Title } from "@vie/modules/Hikes/Title";

export const LavagnaSelva = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Title
        title={t("lavagna-selva.title")}
        subtitle={t("lavagna-selva.subtitle")}
      />

      <Stack direction={{ xs: "column", lg: "row" }} my={{ xs: 2, lg: 4 }}>
        <Summary duration="2h30m" altitude="490m" distance="6.1km" />

        <Box sx={{ flex: 2, display: "flex", alignItems: "center" }}>
          <Markdown
            text={t("lavagna-selva.paragraph1")}
            typographyProps={{ textAlign: "justify" }}
          />
        </Box>
      </Stack>

      <Stack direction={{ xs: "column", lg: "row" }} my={{ lg: 4 }}>
        <Box component="img" src="/hikes/lavagna-selva/1.png" />
        <Stack direction="column" mt={{ xs: 2, lg: 0 }}>
          <Markdown
            text={t("lavagna-selva.paragraph3")}
            typographyProps={{ textAlign: "justify", mx: { lg: 4 } }}
          />
        </Stack>
        <Box component="img" src="/hikes/lavagna-selva/4.png" />
      </Stack>

      <Stack
        direction={{ xs: "column", lg: "row" }}
        mt={{ xs: 2, lg: 4 }}
        mb={2}
        justifyContent={{ lg: "space-around" }}
      >
        <Box component="img" src="/hikes/lavagna-selva/2.png" />
        <Box
          component="img"
          src="/hikes/lavagna-selva/6.png"
          mt={{ xs: 2, lg: 0 }}
        />
      </Stack>

      <Box mx={{ lg: "auto" }}>
        <Markdown text={t("lavagna-selva.paragraph2")} />
      </Box>
    </Page>
  );
};
