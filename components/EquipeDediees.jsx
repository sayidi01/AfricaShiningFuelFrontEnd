import React from "react";
import NavBar from "./NavBar";
import { Grid, Typography, Container } from "@mui/material";
import Footer from "./Footer";
import DesEquipesDedies11 from "../src/images/equipesDedies1.png";

function EquipeDediees() {
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
              src={DesEquipesDedies11}
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
              </span>{" "}
              , nous croyons en la force des équipes dédiées pour atteindre
              l'excellence opérationnelle et la satisfaction client.{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Nos équipes dédiées{" "}
              </span>{" "}
              sont composées de professionnels hautement qualifiés et engagés,
              dotés d'une expertise approfondie dans leur domaine d'activité
              respectif. Chaque équipe est spécialement formée pour répondre aux
              besoins spécifiques de nos clients et pour fournir des solutions
              sur mesure qui dépassent les attentes. Nos équipes dédiées sont
              axées sur la collaboration et le travail d'équipe, travaillant de
              manière synergique pour assurer un service fiable et de qualité à
              nos clients. Nous attachons une grande importance à la
              communication et à la transparence au sein de nos équipes,
              favorisant un environnement de travail où les idées sont échangées
              librement et où chacun est encouragé à contribuer à l'innovation
              et à l'amélioration continue. Chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              , nous sommes fiers de nos équipes dédiées qui incarnent nos
              valeurs d'intégrité, d'engagement et d'excellence. Leur dévouement
              et leur professionnalisme sont au cœur de notre succès et nous
              permettent de maintenir notre position de leader sur le marché
              tout en offrant un service exceptionnel à nos clients.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer marginTop={"7rem"} />
    </div>
  );
}

export default EquipeDediees;
