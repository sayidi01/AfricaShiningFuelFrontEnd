import React from "react";
import NavBar from "./NavBar";
import { Grid, Box, Typography } from "@mui/material";
import Footer from "./Footer";
function CollecteLubrifiant() {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              marginTop: { xs: "0rem", sm: "5rem" },
              marginLeft: { xs: "0rem", sm: "5rem" },
            }}
          >
            <img
              src="../src/images/descCOLLECTELUBRIFIANT1.png"
              alt="collectelubrifiant"
              width={550}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 26 },
              fontFamily: "inherit",
              marginTop: { xs: "1rem", sm: "7rem" },
              marginLeft: { xs: "1rem", sm: "0rem" },
            }}
          >
            Débarrassez-vous de vos huiles usagées en toute simplicité avec
            <span style={{ color: "#FFA447", fontWeight: "bold" }}>
              {" "}
              Africa Shining Fuel{" "}
            </span>
            . Nous nous engageons à vous aider à éliminer de manière responsable
            et sûre les lubrifiants usagés de vos installations, contribuant
            ainsi à{" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              la préservation de l'environnement{" "}
            </span>{" "}
            tout en répondant à vos besoins en matière de gestion des déchets.
          </Typography>
        </Grid>
        <Typography
          sx={{
            fontSize: { xs: 18, sm: 26 },
            fontFamily: "inherit",
            marginLeft: { xs: "1rem", sm: "5rem" },
            marginTop: { xs: "3rem", sm: "4rem" },
          }}
        >
          Notre équipe dédiée assure une{" "}
          <span style={{ fontWeight: "bold" }}> collecte efficace </span> et{" "}
          <span style={{ fontWeight: "bold" }}> sécurisée </span>de vos
          lubrifiants usagés, en respectant les normes environnementales les
          plus strictes. Nous mettons à votre disposition des équipements
          spécialisés et des procédures rigoureuses pour garantir une
          manipulation et un transport sûrs de vos déchets lubrifiants, de leur
          point de collecte jusqu'à leur destination finale pour traitement.
        </Typography>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              marginTop: { xs: "1rem", sm: "6rem" },
              marginLeft: { xs: "0rem", sm: "5rem" },
            }}
          >
            <img
              src="../src/images/descCOLLECTELUBRIFIANT2.png"
              alt="collectelubrifiant"
              width={550}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 26 },
              fontFamily: "inherit",
              marginTop: { xs: "1rem", sm: "7rem" },
              marginLeft: {xs: '1rem', sm: '0rem'}
            }}
          >
            En choisissant notre service de collecte de lubrifiants, vous
            bénéficiez d'une solution pratique et <span style={{ fontWeight: "bold" }} > respectueuse de l'
            environnement </span> pour la gestion de vos déchets industriels. Faites
            confiance à <span style={{ color: "#FFA447", fontWeight: "bold" }} > Africa Shining Fuel </span> pour vous accompagner dans une
            démarche responsable et durable en matière de gestion des
            lubrifiants usagés, tout en contribuant à la préservation de notre
            planète pour les générations futures.
          </Typography>
        </Grid>
      </Grid>
      <Footer marginTop={'6rem'}/>
    </div>
  );
}

export default CollecteLubrifiant;
