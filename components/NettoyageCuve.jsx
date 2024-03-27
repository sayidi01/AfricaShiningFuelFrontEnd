import React from "react";
import NavBar from "./NavBar";
import { Grid, Box, Typography } from "@mui/material";
import descNettoyageCuve1 from"../src/images/descNETTOYAGECUVE1.png"
import descNettoyageCuve2 from"../src/images/descNETTOYAGECUVE2.png"
import descNettoyageCuve3 from "../src/images/descNETTOYAGECUVE3.png"
import Footer from "./Footer";
function NettoyageCuve() {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              marginLeft: { xs: "0rem", sm: "5rem" },
              marginTop: { xs: "0rem", sm: "6rem" },
            }}
          >
            <img src={descNettoyageCuve1} alt="Nettoyage de cuve" width={550} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            sx={{
              marginTop: { xs: "1rem", sm: "11rem" },
              fontSize: { xs: 18, sm: 26 },
              fontFamily: "inherit",
              marginLeft: { xs: "1rem", sm: "0rem" },
            }}
          >
            Bienvenue chez{" "}
            <span style={{ color: "#FFA447" }}> Africa Shining Fuel </span> , où
            nous vous offrons un service <br /> de nettoyage de cuves
            professionnel et efficace. Grâce{" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              à notre expertise <br />
            </span>{" "}
            et à{" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              notre équipement de pointe{" "}
            </span>
            , nous assurons un nettoyage complet <br /> et rigoureux de vos
            cuves, garantissant ainsi un environnement sûr et conforme aux{" "}
            <span style={{ fontWeight: "bold" }}> normes de qualité </span> les
            plus strictes.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 26 },
              marginLeft: { xs: "1rem", sm: "5rem" },
              marginTop: { xs: "3rem", sm: "15rem" },
            }}
          >
            Notre{" "}
            <span style={{ fontWeight: "bold" }}> équipe spécialisée </span> est
            formée pour intervenir sur tous types de cuves, qu'il s'agisse de
            cuves de stockage de carburant, de produits chimiques ou d'autres
            liquides. Nous utilisons des méthodes et des produits adaptés à
            chaque type de cuve, garantissant ainsi un nettoyage en profondeur
            et une élimination efficace des résidus et des contaminants.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              marginTop: { xs: "1rem", sm: "7rem" },
              marginLeft: { xs: "0rem", sm: "7rem" },
            }}
          >
            <img src={descNettoyageCuve2} alt="Nettoyage de cuve" width={450} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box
            sx={{
              marginTop: { xs: "3rem", sm: "5rem" },
              marginLeft: { xs: "0rem", sm: "5rem" },
            }}
          >
            <img src={descNettoyageCuve3} alt="Nettoyage de cuve" width={450} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 26 },
              fontFamily: "inherit",
              marginTop: { xs: "1rem", sm: "11rem" },
              marginLeft: {xs: '1rem', sm: '0rem'}
            }}
          >
            En tant que société engagée envers l'excellence et la satisfaction 
            de nos clients, nous mettons un point d'honneur à fournir un service  
            de <span style={{ fontWeight: "bold" }}> qualité supérieure </span>{" "}
            à chaque intervention. Avec
            <span style={{ color: "#FFA447" }}> Africa Shining Fuel </span>,
            vous pouvez avoir l'assurance que vos cuves seront entre de bonnes
            mains, et que le travail sera effectué avec
            <span style={{ fontWeight: "bold" }}> professionnalisme </span> et
           <span style={{ fontWeight: "bold" }}>  efficacité </span>. Faites-nous confiance pour prendre soin de vos cuves et
            maintenir un environnement de travail sûr et propre.
          </Typography>
        </Grid>
      </Grid>
      <Footer marginTop={'6rem'}/>
    </div>
  );
}

export default NettoyageCuve;
