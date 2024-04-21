import React from "react";
import NavBar from "./NavBar";
import { Grid, Typography, Container } from "@mui/material";
import Footer from "./Footer";
import descCollecteLubrifiant1 from "../src/images/descCOLLECTELUBRIFIANT1.png";
import descCollecteLubrifiant2 from "../src/images/descCOLLECTELUBRIFIANT2.png";
function CollecteLubrifiant() {
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
              src={descCollecteLubrifiant1}
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
              Débarrassez-vous de vos huiles usagées en toute simplicité avec
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              . Nous nous engageons à vous aider à éliminer de manière
              responsable et sûre les lubrifiants usagés de vos installations,
              contribuant ainsi à{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                la préservation de l'environnement{" "}
              </span>{" "}
              tout en répondant à vos besoins en matière de gestion des déchets.
              Notre équipe dédiée assure une{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                collecte efficace{" "}
              </span> et <span style={{ fontWeight: "bold" }}>
                {" "}
                sécurisée{" "}
              </span>{" "}
              de vos lubrifiants usagés, en respectant les normes
              environnementales les plus strictes. Nous mettons à votre
              disposition des équipements spécialisés et des procédures
              rigoureuses pour garantir une manipulation et un transport sûrs de
              vos déchets lubrifiants, de leur point de collecte jusqu'à leur
              destination finale pour traitement.
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
              En choisissant notre service de collecte de lubrifiants, vous
              bénéficiez d'une solution pratique et{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                respectueuse de l' environnement{" "}
              </span>{" "}
              pour la gestion de vos déchets industriels. Faites confiance à{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              pour vous accompagner dans une démarche responsable et durable en
              matière de gestion des lubrifiants usagés, tout en contribuant à
              la préservation de notre planète pour les générations futures.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <img
              src={descCollecteLubrifiant2}
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

export default CollecteLubrifiant;
