import {
  Container,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Page } from "@vie/components/Page";

export const SantaGiuliaColla = () => {
  return (
    <Page>
      <Container>
        <Typography variant="h2" textAlign="center" fontWeight="bold">
          Itinerario Santa Giulia - Colla
        </Typography>
        <Typography variant="h5" textAlign="center">
          Un percorso devozionale dedicato all'antico culto di Santa Giulia
        </Typography>
      </Container>

      <Stack direction={{ xs: "column", lg: "row" }} my={4}>
        <Box sx={{ flex: 1, display: "flex", alignItems: "flex-end" }}>
          <List>
            <ListItem>
              <ListItemText>Durata: 1h</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Dislivello: 405m</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Lunghezza: 3km</ListItemText>
            </ListItem>
          </List>
        </Box>
        <Typography sx={{ flex: 1 }}>
          Classico itinerario di salita con percorso sul crinale sommitale. Il
          sentiero è segnalato dalla F.I.E. con simbolo "bollino rosso su sfondo
          bianco". Partendo da S.Giulia, "balcone" naturale sul Golfo del
          Tigullio. Si prosegue la salita per vecchi sentieri lastricati e
          antiche "crose" quindi si giunge alla Colla. Punto identificato come
          centrale della rete sentieristica. Durante l'itinerario si incontrano
          referti rurali interessanti e alcune cappelle votive dedicate alla
          Santa.
        </Typography>
      </Stack>
      <Stack direction="column">
        <Box
          component="img"
          src="/hikes/santagiulia-colla/cover-1.png"
          alt="cover"
        />
        <Typography variant="subtitle1" textAlign="center">
          Vista panoramica della terrazza di Santa Giulia
        </Typography>
      </Stack>

      <Stack direction={{ xs: "column", lg: "row" }} my={4}>
        <Typography sx={{ flex: 1 }} pr={6} textAlign="justify">
          Santa Giulia Centaura è la località più antica ed è rinomata per la
          posizione che domina tutto il Golfo del Tigullio, ammirabile dal
          piazzale della Chiesa (l'attuale edificio risale al 1600, maè
          probabilmente costruito sull'antica cappella). Di particolare pregio
          il pavimento a risseu (rissolato), mosaico di sassi marini policromi,
          del piazzale della Chiesa. Il nome Centaura deriva da Centuri,
          località del Capo Corso, dove una giovane cristiana di nome Giulia fu
          martirizzata e crocifissa. La leggenda racconta che le spoglie
          giunsero sulla spiaggia e furono conservata come reliquie nella chiesa
          fino all'VII secolo, quando furono trasportate nel noto monastero di
          Brescia a Lei dedicato. La tradizione religiosa si è mantenuta fino a
          un secolo fa, con il rito dei ceri illuminati che erano posti in mare
          sia a Cavi sia a Centuri e che le correnti matine trasportano sulle
          rispettive rive. Nell'XI secolo Santa Giulia apparteneva
          all'Arcivescovo di Genova, poi passò sotto il controllo dei Signori
          locali. La rete di sentieri qui percorribili è fitta e compete in
          bellezza con altri celebri percorsi liguri. Crocetta si trova sul
          crinale alle spalle della chiesa di Santa Giulia, da qui raggiungibile
          con un panoramico sentiero. Il toponimo indica l'antica presenza una
          croce da rogazione nel luogo dove si recavano le processioni, ma anche
          l'incrocio dei sentieri di crinale con quelli provenienti da Lavagna e
          da Cavi.
        </Typography>

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
          mb={{ xs: 4, lg: "inherit" }}
        >
          <Box
            component="img"
            src="/hikes/santagiulia-colla/restauro-1.png"
            alt="Restauro"
            mx={{ lg: "auto" }}
            flex={1}
          />
          <Typography flex={2} pl={{ xs: 2, lg: 0 }}>
            Leccio Monumentale (Quercus Ilex). Il suo nome dialettale è
            "Eisgiu". Si tratta di un esemplare isolato radicato nel piazzale
            della Chiesa parrocchiale di S.Giulia. La circonferenza è di Mt.
            4,5, il portamento espanso e l'età è stimata intorno ai 360 anni
            circa. Alto 11 metri rientra nell'elenco degli alberi monumentali
            della Regione Liguria e la sua presenza è documentata nell'archivio
            parrocchiale già nel XVII secolo.
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
            mt={{ lg: 4 }}
          >
            Durante il percorso, a testimonianza della devozione alla santa
            troviamo varie edicole votive di estrema bellezza e antichità, oltre
            ad un conglomerato di case rurali poco prima dell'arrivo alla Colla,
            probabilmente seccatoi di castagne e case contadine
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
