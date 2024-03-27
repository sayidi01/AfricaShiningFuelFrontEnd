import React from "react";
import NavBar from "./NavBar";
import { Grid, Box, Typography } from "@mui/material";
import descNettoyageAdomicile1 from"../src/images/descNETTOYAGEDOMICILE1.png"
import descNettoyageAdomicile2 from"../src/images/descNETTOYAGEDOMICILE2.png"
import descNettoyageAdomicile3 from"../src/images/descNETTOYAGEDOMICILE3.png"
import Footer from "./Footer";
function NettoyageDomicile() {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              marginTop: { xs: "0rem", sm: "5rem" },
              marginLeft: { xs: "0rem", sm: "5rem" },
            }}
          >
            <img
              src={descNettoyageAdomicile1}
              alt="nettoyagedomicile"
              width={550}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 26 },
              fontFamily: "inherit",
              marginTop: { xs: "2rem", sm: "7rem" },
              marginLeft: { xs: "1rem", sm: "0rem" },
            }}
          >
            Optez pour la tranquillité d'esprit avec notre service de nettoyage
            à domicile chez{" "}
            <span style={{ color: "#FFA447" }}> Africa Shining Fuel </span>, une
            solution innovante pour
            <br />
            entretenir vos machines industrielles. Nous vous proposons un
            <br />
            nettoyage <span style={{ fontWeight: "bold" }}>
              {" "}
              sans eau{" "}
            </span> et <span style={{ fontWeight: "bold" }}> à la vapeur </span>
            , une approche révolutionnaire qui garantit un résultat impeccable
            tout en{" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              préservant l'environnement{" "}
            </span>{" "}
            . Grâce à notre technologie de pointe, nous éliminons efficacement
            la
            <br />
            saleté, les taches et les résidus, tout en désinfectant vos
            équipements industriels.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 26 },
              marginTop: { xs: "2rem", sm: "10rem" },
              marginLeft: { xs: "1rem", sm: "5rem" },
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
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              marginTop: { xs: "1rem", sm: "9rem" },
              marginLeft: { xs: "0rem", sm: "8rem" },
            }}
          >
            <img
              src={descNettoyageAdomicile2}
              alt="nettoyagedomicile"
              width={550}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              marginLeft: { xs: "0rem", sm: "5rem" },
              marginTop: { xs: "3rem", sm: "10rem" },
            }}
          >
            <img
              src={descNettoyageAdomicile3}
              alt="nettoyagedomicile"
              width={400}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 26 },
              fontFamily: "inherit",
              marginTop: { xs: "1rem", sm: "17rem" },
              marginLeft: {xs: '1rem', sm: '0rem'}
            }}
          >
            Chez <span style={{ color: "#FFA447" }}> Africa Shining Fuel </span>
            , nous sommes fiers de proposer des services de nettoyage novateurs
            qui répondent aux besoins spécifiques de nos clients. En choisissant
            notre service de nettoyage sans eau et avec vapeur, vous faites le
            choix d'une solution de nettoyage haut de gamme, respectueuse de
            l'environnement et parfaitement adaptée à vos exigences
            industrielles. Confiez-nous l'entretien de vos machines et profitez
            d'un nettoyage optimal, sans eau et avec la puissance de la vapeur.
          </Typography>
        </Grid>
      </Grid>
      <Footer marginTop={"9rem"} />
    </div>
  );
}

export default NettoyageDomicile;
