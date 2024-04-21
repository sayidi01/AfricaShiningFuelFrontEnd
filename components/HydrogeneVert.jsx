import { Box, Grid, Typography, Button, Container, Stack } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Devis from "./Devis";
import descHydrogeneVert1 from "../src/images/descHYDROGENEVERT1.jpeg";
import descHydrogeneVert3 from "../src/images/decHYDROGENEVERT3.png";
import descHYDROGENEVERT22 from "../src/images/descHydrogeneVert22.png";

import { Input } from "antd";

const { TextArea } = Input;

function HydrogeneVert() {
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
              src={descHydrogeneVert1}
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
              <span style={{ color: "#65B741", fontWeight: "bold" }}>
                {" "}
                L'hydrogène vert{" "}
              </span>
              représente bien plus qu'une simple alternative aux combustibles
              fossiles ; c'est une révolution énergétique qui ouvre la voie à
              <span style={{ fontWeight: "bold" }}>
                {" "}
                un avenir plus propre{" "}
              </span>
              et <span style={{ fontWeight: "bold" }}> plus durable.</span>
              <br />
              <br />
              Chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              , nous sommes fermement engagés dans cette transition vers une
              économie de l'hydrogène vert. En exploitant des sources d'énergie
              renouvelables telles que le soleil, le vent et l'eau, nous pouvons
              produire de l'hydrogène sans émettre de gaz à effet de serre,
              offrant ainsi une solution prometteuse pour réduire notre
              empreinte carbone et lutter contre le changement climatique.
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
              Ce que{" "}
              <span style={{ color: "#65B741", fontWeight: "bold" }}>
                {" "}
                l'hydrogène vert{" "}
              </span>{" "}
              offre, c'est une polyvalence inégalée. En plus de servir de
              carburant pour les véhicules à pile à combustible, il peut être
              utilisé pour stocker l'énergie excédentaire produite par les
              énergies renouvelables, permettant ainsi une intégration plus
              efficace des sources d'énergie intermittentes dans nos réseaux
              électriques. De plus, il peut être utilisé comme matière première
              dans l'industrie chimique pour produire des produits tels que
              l'ammoniac ou le méthanol, contribuant ainsi à décarboner d'autres
              secteurs de notre économie.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <img
              src={descHYDROGENEVERT22}
              width={"100%"}
              style={{
                borderRadius: "1.875rem",
                border: "1px solid #dbeefe",
              }}
            />
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
          <Grid item xs={12} md={7}>
            <img
              src={descHydrogeneVert3}
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
              Chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              , nous croyons en un avenir alimenté par
              <span style={{ color: "#65B741", fontWeight: "bold" }}>
                {" "}
                l'hydrogène vert{" "}
              </span>
              . Nous sommes déterminés à jouer un rôle de leader dans cette
              transition, en collaborant avec des partenaires stratégiques et en
              investissant dans des projets innovants. Actuellement, nous sommes
              en discussion avec{" "}
              <span style={{ fontWeight: "bold" }}> Lhyfe </span> et{" "}
              <span style={{ fontWeight: "bold" }}> McPhy Energy </span>
              pour explorer de nouvelles opportunités et avancer dans cette
              direction. Ensemble, nous pouvons transformer notre système
              énergétique et construire un avenir où l'hydrogène vert est au
              cœur de notre approvisionnement énergétique, garantissant ainsi un
              avenir plus sûr, plus propre et plus prospère pour tous.
            </Typography>
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
      <Devis title="Devis Hydrogène vert" Société="Société (facultatif) *" Volume="Volume HV" />
      <Footer marginTop={"5rem"} />
    </div>
  );
}

export default HydrogeneVert;
