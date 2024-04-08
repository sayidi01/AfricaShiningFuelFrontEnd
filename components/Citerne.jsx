import React from "react";
import NavBar from "./NavBar";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import Devis from "./Devis";
import descCiterne1 from "../src/images/descCITERNE1.png";
import descCiterne2 from "../src/images/descCITERNE2.png";
import { Input } from "antd";
const { TextArea } = Input;

import Footer from "./Footer";

function Citerne() {
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
              src={descCiterne1}
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
              Explorez la <span style={{ fontWeight: "bold" }}> qualité </span>{" "}
              exceptionnelle de nos solutions de stockage de carburant grâce aux
              citernes spécialisées d'
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              . Intégrant une ingénierie de pointe et une minutie inégalée dans
              chaque détail, nos citernes se positionnent comme une solution
              fiable et sécurisée pour répondre à une gamme variée de besoins en
              matière de stockage de carburant. Chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              , notre engagement envers la qualité supérieure est palpable à
              travers des citernes qui surpassent les normes les plus strictes
              de l'industrie, offrant une performance optimale et une durabilité
              exceptionnelle, que ce soit pour des projets à grande échelle ou
              des exigences spécifiques.
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
              Adapté aux exigences diverses des moteurs haut de gamme et des
              opérations industrielles complexes, notre{" "}
              <span style={{ fontWeight: "bold" }}> fuel </span> offre une
              réponse personnalisée à vos besoins énergétiques les plus
              sophistiqués. Chaque ravitaillement devient une célébration de
              l'efficacité, une rencontre avec une énergie adaptée à vos
              attentes les plus raffinées. Au-delà de la performance mécanique,
              nous nous engageons envers des pratiques environnementales
              responsables. En choisissant notre{" "}
              <span style={{ fontWeight: "bold" }}> fuel </span>, vous optez
              pour une énergie qui respecte non seulement vos moteurs mais
              contribue également à la
              <span style={{ fontWeight: "bold" }}>
                {" "}
                préservation de notre planète{" "}
              </span>
              .
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <img
              src={descCiterne2}
              width={"100%"}
              style={{
                borderRadius: "1.875rem",
                border: "1px solid #dbeefe",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Box width="50%" margin="auto">
        <Typography
          style={{ borderBottom: "1px solid #FFA447" }}
          sx={{
            marginTop: { xs: "2rem", sm: "5rem" },
          }}
        ></Typography>
      </Box>
     <Devis title="Devis Citerne" Société="Société (facultatif)" Volume="Taille Du Citerne *" />
      <Footer marginTop={"60px"} />
    </div>
  );
}

export default Citerne;
