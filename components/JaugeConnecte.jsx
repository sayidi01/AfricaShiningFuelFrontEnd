import React from "react";
import NavBar from "./NavBar";
import { Container, Grid, Typography } from "@mui/material";
import descJaugeConnecte1 from "../src/images/descJAUGECONNECTE1.png";
import descJaugeConnecte2 from "../src/images/descJAUGECONNECTE2.png";
import Footer from "./Footer";
function JaugeConnecte() {
  return (
    <div>
      <NavBar />
      <Container sx={{ my: 10 }} maxWidth={"lg"} style={{ padding: "none" }}>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingBottom: 120,
          }}
          gap={2}
          sx={{
            flexWrap: {
              md: "nowrap",
            },
          }}
        >
          <Grid item xs={12} md={7}>
            <img
              src={descJaugeConnecte1}
              width={"100%"}
              style={{
                borderRadius: "1.875rem",
                border: "1px solid #dbeefe",
              }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            sx={{
              borderRadius: "1.875rem",
              border: "1px solid  #fab823",
              width: 400,
              p: 3,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 18, sm: 15 },
                fontFamily: "Space Grotesk",
              }}
            >
              Ouvrez la porte à la tranquillité d'esprit avec la jauge connectée
              d'
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              . Une solution de pointe pour surveiller vos stocks de carburant
              en temps réel. Grâce à notre technologie innovante, vous pouvez
              désormais garder un œil sur le niveau de carburant de vos
              réservoirs où que vous soyez, depuis n'importe quel appareil
              connecté. Notre service de{" "}
              <span style={{ fontWeight: "bold" }}> jauge connectée </span> vous
              offre une visibilité complète sur vos réserves de carburant, vous
              permettant ainsi de gérer efficacement vos approvisionnements et
              de prévenir les ruptures de stock. Recevez des alertes en temps
              réel en cas de niveaux bas ou anormaux, et planifiez vos
              livraisons de manière proactive pour maintenir un fonctionnement
              fluide de vos activités.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingBottom: 120,
          }}
          gap={2}
          sx={{
            flexWrap: {
              md: "nowrap",
            },
          }}
        >
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              borderRadius: "1.875rem",
              border: "1px solid  #fab823",
              width: 400,
              p: 3,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 18, sm: 15 },
                fontFamily: "Space Grotesk",
              }}
            >
              Avec{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              , bénéficiez d'une surveillance continue et précise de vos stocks
              de carburant, et optimisez vos opérations de ravitaillement pour
              une gestion plus efficace de vos ressources énergétiques. Faites
              confiance à notre service de jauge connectée pour vous offrir une
              tranquillité d'esprit totale quant à la disponibilité et à la
              gestion de vos ressources énergétiques.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <img
              src={descJaugeConnecte2}
              width={"100%"}
              style={{
                borderRadius: "1.875rem",
                border: "1px solid #dbeefe",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer marginTop={"6rem"} />
    </div>
  );
}

export default JaugeConnecte;
