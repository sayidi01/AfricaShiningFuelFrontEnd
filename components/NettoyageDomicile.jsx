import React from "react";
import NavBar from "./NavBar";
import { Grid, Typography, Container } from "@mui/material";
import descNettoyageAdomicile1 from "../src/images/descNETTOYAGEDOMICILE1.png";
import descNettoyageAdomicile2 from "../src/images/descNETTOYAGEDOMICILE2.png";
import descNettoyageAdomicile3 from "../src/images/descNETTOYAGEDOMICILE3.png";
import Footer from "./Footer";
function NettoyageDomicile() {
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
              src={descNettoyageAdomicile1}
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
              Optez pour la tranquillité d'esprit avec notre service de
              nettoyage à domicile chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              , une solution innovante pour entretenir vos machines
              industrielles. Nous vous proposons un nettoyage{" "}
              <span style={{ fontWeight: "bold" }}> sans eau </span> et à la
              <span style={{ fontWeight: "bold" }}> vapeur </span> , une
              approche révolutionnaire qui garantit un résultat impeccable tout
              en{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                préservant l'environnement{" "}
              </span>{" "}
              . Grâce à notre technologie de pointe, nous éliminons efficacement
              la saleté, les taches et les résidus, tout en désinfectant vos
              équipements industriels.
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
              Notre équipe expérimentée utilise la puissance de la vapeur pour
              nettoyer en profondeur vos machines, sans avoir recours à des
              produits chimiques agressifs. Cette méthode{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                respectueuse de l'environnement{" "}
              </span>{" "}
              permet non seulement de préserver la santé de vos employés, mais
              aussi de prolonger la durée de vie de vos équipements. Avec notre
              service de nettoyage sans eau, vous bénéficiez d'une solution
              économique, écologique et efficace pour maintenir vos machines
              industrielles en parfait état.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <img
              src={descNettoyageAdomicile2}
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
              src={descNettoyageAdomicile3}
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
              , nous sommes fiers de proposer des services de nettoyage
              novateurs qui répondent aux besoins spécifiques de nos clients. En
              choisissant notre <span style={{fontWeight: 'bold'}}> service de nettoyage  </span>  sans eau et avec vapeur,
              vous faites le choix d'une solution de nettoyage haut de gamme,
              respectueuse de l'environnement et parfaitement adaptée à vos
              exigences industrielles. Confiez-nous l'entretien de vos machines
              et profitez d'un nettoyage optimal, sans eau et avec la puissance
              de la vapeur.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer marginTop={"7rem"} />
    </div>
  );
}

export default NettoyageDomicile;
