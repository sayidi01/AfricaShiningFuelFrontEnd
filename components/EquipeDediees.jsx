import React from "react";
import NavBar from "./NavBar";
import { Grid, Typography } from "@mui/material";
import Footer from "./Footer";

function EquipeDediees() {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 22 },
              fontFamily: "inherit",
              marginTop: { xs: "2rem", sm: "5rem" },
              marginLeft: { xs: "1rem", sm: "5rem" },
            }}
          >
            Chez{" "}
            <span style={{ color: "#FFA447", fontWeight: "bold" }}>
              {" "}
              Africa Shining Fuel{" "}
            </span>
            , nous croyons en la force des équipes dédiées pour atteindre
            l'excellence opérationnelle et la satisfaction client.
            <br />{" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              Nos équipes dédiées{" "}
            </span>{" "}
            sont composées de professionnels hautement qualifiés et engagés,
            dotés d'une expertise approfondie dans leur domaine
            <br /> d'activité respectif.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 22 },
              fontFamily: "inherit",
              marginTop: { xs: "2rem", sm: "4rem" },
              marginLeft: { xs: "1rem", sm: "5rem" },
            }}
          >
            Chaque équipe est spécialement formée pour répondre aux besoins
            spécifiques de nos clients et pour fournir des solutions sur mesure
            qui
            <br /> dépassent les attentes. Nos équipes dédiées sont axées sur la
            collaboration et le travail d'équipe, travaillant de manière
            synergique pour
            <br /> assurer un service fiable et de qualité à nos clients.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 22 },
              fontFamily: "inherit",
              marginTop: { xs: "2rem", sm: "4rem" },
              marginLeft: { xs: "1rem", sm: "5rem" },
            }}
          >
            Nous attachons une grande importance à la communication et à la
            transparence au sein de nos équipes, favorisant un environnement<br /> de
            travail
             où les idées sont échangées librement et où chacun est
            encouragé à contribuer à l'innovation et à l'amélioration continue.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 22 },
              fontFamily: "inherit",
              marginTop: { xs: "2rem", sm: "4rem" },
              marginLeft: { xs: "1rem", sm: "5rem" },
            }}
          >
            Chez{" "}
            <span style={{ color: "#FFA447", fontWeight: "bold" }}>
              {" "}
              Africa Shining Fuel{" "}
            </span>
            , nous sommes fiers de nos équipes dédiées qui incarnent nos valeurs
            d'intégrité, d'engagement et d'excellence.<br /> Leur dévouement et leur
            professionnalisme sont au cœur de notre succès et nous permettent de
            maintenir notre position de leader sur le marché<br /> tout en offrant un
            service exceptionnel à nos clients.
          </Typography>
        </Grid>
      </Grid>
      <Footer marginTop={'7rem'}/>
    </div>
  );
}

export default EquipeDediees;
