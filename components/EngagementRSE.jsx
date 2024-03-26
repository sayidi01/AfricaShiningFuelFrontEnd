import React from "react";
import NavBar from "./NavBar";
import { Grid, Typography } from "@mui/material";
import Footer from "./Footer";
function EngagementRSE() {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 22 },
              marginLeft: { xs: "1rem", sm: "5rem" },
              marginTop: { xs: "3rem", sm: "7rem" },
            }}
          >
            L'engagement RSE (Responsabilité Sociétale des Entreprises) est au
            cœur de notre mission chez Africa Shining Fuel. Nous nous engageons
            à agir  <br />de manière responsable, éthique et durable dans toutes nos
            activités. Chez ASF, nous croyons fermement en notre responsabilité
            envers la société, l'environnement et nos parties prenantes.
          </Typography>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 22 },
              marginLeft: { xs: "1rem", sm: "5rem" },
              marginTop: { xs: "3rem", sm: "4rem" },
            }}
          >
            Nous mettons en œuvre des pratiques et des initiatives RSE dans tous
            les aspects de notre entreprise, de la production et la distribution<br /> 
            de carburants à nos relations avec nos clients, nos employés
            et nos partenaires. Nous nous efforçons de minimiser notre impact<br /> 
            environnemental en adoptant des technologies et des processus
            éco-responsables, en réduisant nos émissions de carbone et en<br /> 
            favorisant l'efficacité énergétique.
          </Typography>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 22 },
              marginLeft: { xs: "1rem", sm: "5rem" },
              marginTop: { xs: "3rem", sm: "4rem" },
            }}
          >
            Par le biais de notre engagement RSE, nous contribuons activement au
            développement durable des communautés locales où nous opérons, en
            soutenant des projets sociaux, éducatifs et environnementaux. Nous
            nous engageons également à respecter les droits de l'homme, à
            promouvoir  <br />la diversité et l'inclusion, et à maintenir les normes
            les plus élevées en matière de gouvernance d'entreprise.
          </Typography>
          <Typography sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 22 },
              marginLeft: { xs: "1rem", sm: "5rem" },
              marginTop: { xs: "3rem", sm: "4rem" },
            }}>
            Chez ASF, nous considérons notre engagement RSE comme une partie
            intégrante de notre identité et de notre succès. Nous sommes<br /> 
            déterminés  à être un leader en matière de durabilité et à contribuer
            positivement au bien-être des générations actuelles et futures.
          </Typography>
        </Grid>
      </Grid>
      <Footer marginTop={'6rem'}/>
    </div>
  );
}

export default EngagementRSE;
