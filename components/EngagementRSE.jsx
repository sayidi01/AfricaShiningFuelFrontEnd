import React from "react";
import NavBar from "./NavBar";
import { Grid, Typography, Container } from "@mui/material";
import Footer from "./Footer";
import RSE from "../src/images/RSE.png";
function EngagementRSE() {
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
              src={RSE}
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
              L'engagement <span style={{ fontWeight: "bold" }}> RSE </span>{" "}
              (Responsabilité Sociétale des Entreprises) est au cœur de notre
              mission chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              . Nous nous engageons à agir de manière responsable, éthique et
              durable dans toutes nos activités. Chez{" "}
              <span style={{ fontWeight: "bold" }}> ASF </span>, nous croyons
              fermement en notre responsabilité envers la société,
              l'environnement et nos parties prenantes. Nous mettons en œuvre
              des pratiques et des initiatives{" "}
              <span style={{ fontWeight: "bold" }}> RSE </span> dans tous les
              aspects de notre entreprise, de la production et la distribution
              de carburants à nos relations avec nos clients, nos employés et
              nos partenaires. Nous nous efforçons de minimiser notre impact
              environnemental en adoptant des technologies et des processus
              éco-responsables, en réduisant nos émissions de carbone et en
              favorisant l'efficacité énergétique. Par le biais de notre
              engagement RSE, nous contribuons activement au développement
              durable des communautés locales où nous opérons, en soutenant des
              projets sociaux, éducatifs et environnementaux. Nous nous
              engageons également à respecter les droits de l'homme, à
              promouvoir la diversité et l'inclusion, et à maintenir les normes
              les plus élevées en matière de gouvernance d'entreprise. Chez ASF,
              nous considérons notre{" "}
              <span style={{ fontWeight: "bold" }}> engagement RSE </span> comme
              une partie intégrante de notre identité et de notre succès. Nous
              sommes déterminés à être un leader en matière de durabilité et à
              contribuer positivement au bien-être des générations actuelles et
              futures.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer marginTop={"6rem"} />
    </div>
  );
}

export default EngagementRSE;
