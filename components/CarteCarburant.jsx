import React from "react";
import NavBar from "./NavBar";
import { Box, Grid, Typography, Container } from "@mui/material";
import CarteCarburant1 from "../src/images/cartecarburant1.png";
import CarteCarburant2 from "../src/images/descCARTECARBURANT2.png";

import Footer from "./Footer";
function CarteCarburant() {
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
              src={CarteCarburant1}
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
              Embarquez dans une nouvelle ère de gestion de vos dépenses en
              carburant avec la carte multi- marque gazole d'
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              . Élaborée pour offrir une flexibilité maximale, cette carte vous
              ouvre les portes d'un{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                vaste réseau de stations-service{" "}
              </span>{" "}
              à travers le pays, vous permettant de faire le plein de carburant
              en toute commodité, où que vous soyez. Que vous soyez un
              conducteur individuel ou une entreprise disposant d'une flotte de
              véhicules, la carte multi-marque gazole vous offre une{" "}
              <span style={{ fontWeight: "bold" }}> solution pratique </span> et
              <span style={{ fontWeight: "bold" }}> efficace </span> pour
              répondre à vos besoins en carburant.
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
              Grâce à la carte multi-marque gazole d'
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              , vous bénéficiez d'une{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                gestion simplifiée de vos dépenses en carburant{" "}
              </span>{" "}
              . En vous permettant de choisir parmi plusieurs stations-service,
              cette carte vous offre la liberté de sélectionner celle qui
              correspond le mieux à vos préférences et à votre itinéraire. De
              plus, avec des fonctionnalités de suivi des dépenses intégrées,
              vous pouvez facilement contrôler vos coûts et optimiser votre
              budget carburant, tout en bénéficiant d'une facturation claire et
              transparente. Optez pour la{" "}
              <span style={{ fontWeight: "bold" }}> commodité </span> et{" "}
              <span style={{ fontWeight: "bold" }}> l'efficacité </span> avec la
              carte multi-marque gazole d'
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              . Que vous soyez un professionnel toujours en déplacement ou un
              particulier soucieux de maîtriser ses dépenses, cette carte vous
              offre une solution pratique et flexible pour vos besoins en
              carburant. Avec
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              , simplifiez votre gestion de carburant et profitez d'une
              expérience de ravitaillement sans tracas à chaque étape de votre
              trajet.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <img
              src={CarteCarburant2}
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

export default CarteCarburant;
