import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Markdown } from "@vie/components/Markdown";

import { Page } from "@vie/components/Page";
import { useTranslation } from "react-i18next";

import { Summary } from "@vie/modules/Hikes/Summary";
import { Title } from "@vie/modules/Hikes/Title";

export const SantaGiuliaColla = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Title
        title={t("santagiulia-colla.title")}
        subtitle={t("santagiulia-colla.subtitle")}
      />

      <Stack direction={{ xs: "column", lg: "row" }} my={{ xs: 2, lg: 4 }}>
        <Summary duration="1h" altitude="405m" distance="3km" />

        <Box sx={{ flex: 2, display: "flex", alignItems: "center" }}>
          <Typography fontSize={{ lg: 18 }} textAlign="justify">
            {t("santagiulia-colla.paragraph1")}
          </Typography>
        </Box>
      </Stack>
      <Stack direction="column">
        <Box
          component="img"
          src="/hikes/santagiulia-colla/cover-1.png"
          alt="cover"
        />
        <Typography variant="subtitle1" textAlign="center">
          {t("santagiulia-colla.caption1")}
        </Typography>
      </Stack>

      <Stack direction={{ xs: "column", lg: "row" }} my={4}>
        <Box
          sx={{
            flex: 1,
            " & > *": { my: { xs: 1, lg: 1 } },
          }}
          pr={{ lg: 6 }}
          textAlign="justify"
        >
          <Markdown text={t("santagiulia-colla.paragraph2")} />
        </Box>

        <Box
          component="img"
          src="/hikes/santagiulia-colla/chiesa-1.png"
          alt="Chiesa"
          sx={{ flex: 1 }}
        />
      </Stack>

      <Stack direction={{ xs: "column", lg: "row" }} mb={4}>
        <Stack
          direction={{ xs: "row", lg: "column" }}
          flex={1}
          pr={{ lg: 2 }}
          mb={{ xs: 4, lg: 0 }}
        >
          <Box
            component="img"
            src="/hikes/santagiulia-colla/restauro-1.png"
            alt="Restauro"
            mx={{ lg: "auto" }}
            flex={1}
            sx={{ display: { xs: "none", lg: "inline-block" } }}
          />
          <Typography flex={2} pl={{ xs: 2, lg: 0 }}>
            {t("santagiulia-colla.paragraph3")}
          </Typography>
        </Stack>
        <Box
          component="img"
          src="/hikes/santagiulia-colla/leccio-1.png"
          alt="leccio"
          flex={1}
          width={{ xs: "80%", lg: "100%" }}
          mx={{ xs: "auto", lg: "none" }}
        />

        <Stack direction="column" flex={2} px={{ lg: 4 }}>
          <Typography
            fontSize={{ lg: 18 }}
            my={{ xs: 4, lg: 0 }}
            mx={{ lg: 4 }}
            mt={{ lg: 4 }}
          >
            {t("santagiulia-colla.paragraph4")}
          </Typography>
          <Box
            component="img"
            src="/hikes/santagiulia-colla/edicola-1.png"
            alt="edicola"
            mt="auto"
            mb={2}
          />
        </Stack>

        <Box
          component="img"
          src="/hikes/santagiulia-colla/edicola-2.png"
          alt="edicola"
          flex={1}
        />
      </Stack>
    </Page>
  );
};
