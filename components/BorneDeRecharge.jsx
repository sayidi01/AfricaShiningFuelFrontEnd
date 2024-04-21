import React from "react";
import NavBar from "./NavBar";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import Footer from "./Footer";
import Devis from "./Devis";
import { Input } from "antd";
import BorneRecharge1 from "../src/images/descBORNERECHARGE1.jpeg";
import BorneRecharge2 from "../src/images/descBORNERECHARGE2.png";
const { TextArea } = Input;
function BorneDeRecharge() {
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
              src={BorneRecharge1}
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
              Plongez dans l'avenir de la mobilité écologique avec les bornes
              électriques DBT, disponibles chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              grâce à notre partenariat de longue date avec cette marque
              prestigieuse. Ces bornes de recharge de pointe sont conçues pour
              répondre aux besoins croissants des véhicules électriques, offrant
              une solution pratique et fiable pour les entreprises et les
              particuliers. Avec leur technologie avancée et leur fiabilité
              éprouvée, les bornes DBT représentent le choix idéal pour ceux qui
              recherchent une
              <span style={{ fontWeight: "bold" }}>
                {" "}
                recharge efficace{" "}
              </span> et{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                respectueuse de l'environnement{" "}
              </span>
              .
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
              Chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              , nous nous engageons à fournir à nos clients des solutions de
              mobilité électrique de{" "}
              <span style={{ fontWeight: "bold" }}> qualité supérieure </span>.
              Grâce à notre{" "}
              <span style={{ fontWeight: "bold" }}> partenariat avec DBT </span>{" "}
              , nous sommes en mesure de proposer une gamme complète de bornes
              électriques adaptées à divers besoins. Que ce soit pour des
              applications résidentielles, commerciales ou industrielles, nos
              bornes DBT sont conçues pour offrir une{" "}
              <span style={{ fontWeight: "bold" }}> performance optimale </span>{" "}
              et une{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                facilité d'utilisation{" "}
              </span>{" "}
              . Optez pour{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              et les bornes électriques DBT pour une transition vers une
              mobilité plus propre et plus durable, avec la tranquillité
              d'esprit que vous méritez.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <img
              src={BorneRecharge2}
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
     <Devis title="Devis Borne De Recharge" Société="Société (facultatif) *" Volume="Rèférence Bornes Recharges *" />
      <Footer marginTop={"7rem"} />
    </div>
  );
}

export default BorneDeRecharge;
