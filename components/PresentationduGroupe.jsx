import React from "react";
import NavBar from "./NavBar";
import { Grid, Typography, Container } from "@mui/material";
import Footer from "./Footer";
import PresentationGroupe1 from "../src/images/prsentationGroupe.jpeg";

function PresentationduGroupe() {
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
              src={PresentationGroupe1}
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
              , nous sommes bien plus qu'une simple entreprise de distribution
              de carburants. Nous sommes un groupe diversifié et dynamique,
              engagé à fournir des solutions énergétiques innovantes et durables
              à nos clients à travers le Maroc. Fondé sur des valeurs solides et
              une vision ambitieuse, notre groupe opère dans plusieurs secteurs
              clés de l'industrie énergétique, allant de la distribution de
              carburants à la production d'énergies renouvelables. Notre
              présence diversifiée nous permet de répondre aux besoins
              énergétiques variés de nos clients, tout en contribuant au
              développement économique et social de notre pays. Avec des
              décennies d'expérience dans le secteur, nous avons développé une
              expertise inégalée dans la gestion et la distribution de
              carburants, ainsi que dans le développement de solutions
              énergétiques innovantes. Notre engagement envers l'excellence
              opérationnelle et la satisfaction client guide chacune de nos
              actions, nous permettant de rester un leader de l'industrie
              énergétique au Maroc. Chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              , nous sommes fiers de notre héritage, mais nous regardons aussi
              vers l'avenir avec optimisme et détermination. Nous sommes résolus
              à continuer à innover et à investir dans des solutions
              énergétiques durables qui contribuent à un avenir meilleur pour
              nos clients, nos collaborateurs et notre planète.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Footer marginTop={"6rem"} />
    </div>
  );
}

export default PresentationduGroupe;
