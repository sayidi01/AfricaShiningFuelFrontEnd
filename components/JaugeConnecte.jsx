import React from "react";
import NavBar from "./NavBar";
import { Box, Grid, Typography } from "@mui/material";
import descJaugeConnecte1 from"../src/images/descJAUGECONNECTE1.png"
import descJaugeConnecte2 from"../src/images/descJAUGECONNECTE2.png"
import Footer from "./Footer";
function JaugeConnecte() {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item xs={12} sm={11}>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 26 },
              fontFamily: "inherit",
              marginTop: { xs: "2rem", sm: "4rem" },
              marginLeft: { xs: "1rem", sm: "6rem" },
            }}
          >
            Ouvrez la porte à la tranquillité d'esprit avec la jauge connectée
            d'
            <span style={{ color: "#FFA447", fontWeight: "bold" }}>
              {" "}
              Africa Shining Fuel{" "}
            </span>
            . Une solution de pointe pour surveiller vos stocks de carburant en
            temps réel. Grâce à notre technologie innovante, vous pouvez
            désormais garder un œil sur le niveau de carburant de vos réservoirs
            où que vous soyez, depuis n'importe quel appareil connecté.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 26 },
              marginTop: { xs: "3rem", sm: "11rem" },
              marginLeft: { xs: "1rem", sm: "5rem" },
            }}
          >
            Notre service de jauge connectée vous offre une visibilité complète
            sur vos réserves de carburant, vous permettant ainsi de gérer
            efficacement vos approvisionnements et de prévenir les ruptures de
            stock. Recevez des alertes en temps réel en cas de niveaux bas ou
            anormaux, et planifiez vos livraisons de manière proactive pour
            maintenir un fonctionnement fluide de vos activités.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Box
            sx={{
              marginTop: { xs: "1rem", sm: "3rem" },
              marginLeft: { xs: "0rem", sm: "8rem" },
            }}
          >
            <img
              src={descJaugeConnecte1}
              alt="jauge connecte"
              width={550}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              marginTop: { xs: "3rem", sm: "6rem" },
              marginLeft: { xs: "0rem", sm: "5rem" },
            }}
          >
            <img
              src={descJaugeConnecte2}
              alt="jauge connecte"
              width={550}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 26 },
              marginTop: { xs: "1rem", sm: "8rem" },
              marginLeft: {xs: '1rem', sm: '0rem'}
            }}
          >
            Avec{" "}
            <span style={{ color: "#FFA447", fontWeight: "bold" }}>
              {" "}
              Africa Shining Fuel{" "}
            </span>
            , bénéficiez d'une surveillance continue et précise de vos stocks de
            carburant, et optimisez vos opérations de ravitaillement pour une
            gestion plus efficace de vos ressources énergétiques. Faites
            confiance à notre service de jauge connectée pour vous offrir une
            tranquillité d'esprit totale quant à la disponibilité et à la
            gestion de vos ressources énergétiques.
          </Typography>
        </Grid>
      </Grid>
      <Footer marginTop={'6rem'}/>
    </div>
  );
}

export default JaugeConnecte;
