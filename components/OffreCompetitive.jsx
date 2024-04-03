import React from "react";
import NavBar from "./NavBar";
import { Grid, Typography, Container } from "@mui/material";
import Footer from "./Footer";
import OffreCompetitive1 from "../src/images/OffreCompetitives.png";

function OffreCompetitive() {
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
          <Grid item xs={12} md={8}>
            <img
              src={OffreCompetitive1}
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
            md={4}
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
              , nous nous engageons à offrir à nos clients des offres
              compétitives qui répondent à leurs besoins en matière de
              carburants et de services connexes. Notre objectif est de fournir
              des solutions rentables et de haute qualité tout en maintenant un
              excellent rapport qualité- prix.{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Nos offres compétitives{" "}
              </span>{" "}
              sont le résultat d'une expertise approfondie du marché et d'une
              analyse minutieuse des besoins de nos clients. Nous travaillons en
              étroite collaboration avec nos partenaires pour développer des
              solutions innovantes et personnalisées qui répondent aux défis
              spécifiques de chaque secteur d'activité. En tant que leader du
              marché, nous nous engageons à rester à la pointe de l'industrie en
              matière d'efficacité opérationnelle et d'optimisation des coûts.
              Nos offres compétitives sont conçues pour offrir une valeur
              ajoutée tangible à nos clients, en leur permettant de réaliser des
              économies substantielles tout en bénéficiant de produits et de
              services de haute qualité. Chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                ASF{" "}
              </span>{" "}
              , nous sommes fiers de notre réputation d'offrir des offres
              compétitives qui dépassent les attentes de nos clients et qui
              contribuent à leur succès. Nous nous engageons à continuer à
              innover et à élever les normes de l'industrie pour offrir des
              solutions encore plus compétitives à nos clients.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer marginTop={"3rem"} />
    </div>
  );
}

export default OffreCompetitive;
