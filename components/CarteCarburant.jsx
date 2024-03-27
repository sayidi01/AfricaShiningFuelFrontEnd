import React from "react";
import NavBar from "./NavBar";
import { Box, Grid, Typography } from "@mui/material";
import CarteCarburant1 from"../src/images/cartecarburant1.png"
import CarteCarburant2 from"../src/images/descCARTECARBURANT2.png"

import Footer from "./Footer";
function CarteCarburant() {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ marginTop: { xs: "0rem", sm: "6rem" } }}
        >
          <Box sx={{ marginLeft: { xs: "0rem", sm: "6rem" } }}>
            <img src={CarteCarburant1} width={550} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ marginTop: { xs: "1rem", sm: "10rem" } }}
        >
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 22 },
              marginLeft: { xs: "1rem", sm: "0rem" },
            }}
          >
            Embarquez dans une nouvelle ère de gestion de vos dépenses en
            carburant <br /> avec la carte multi- marque gazole{" "}
            <span style={{ color: "#FFA447" }}> d'Africa Shining Fuel</span>.
            Élaborée pour <br /> offrir une flexibilité maximale, cette carte
            vous ouvre les portes d'un{" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              vaste réseau de stations-service{" "}
            </span>{" "}
            à travers le pays, vous permettant de faire le <br /> plein de
            carburant en toute commodité, où que vous soyez. Que vous soyez{" "}
            <br /> un conducteur individuel ou une entreprise disposant d'une
            flotte de <br /> véhicules, la carte multi-marque gazole vous offre
            une{" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              solution pratique <br />{" "}
            </span>{" "}
            et <span style={{ fontWeight: "bold" }}> efficace </span> pour
            répondre à vos besoins en carburant.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            marginTop: { xs: "2rem", sm: "9rem" },
          }}
        >
          <Box>
            <img src={CarteCarburant2} width={550} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ marginTop: { xs: "2rem", sm: "17rem" } }}
        >
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 22 },
              marginLeft: { xs: "1rem", sm: "0rem" },
            }}
          >
            Grâce à la carte multi-marque gazole{" "}
            <span style={{ color: "#FFA447" }}> 
              {" "}
              d'Africa Shining Fuel, <br />{" "}
            </span>{" "}
            vous bénéficiez d'une{" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              gestion simplifiée de vos dépenses <br /> en carburant{" "}
            </span>{" "}
            . En vous permettant de choisir parmi plusieurs <br />
            stations-service, cette carte vous offre la liberté de sélectionner{" "}
            <br />
            celle qui correspond le mieux à vos préférences et à votre
            itinéraire. <br /> De plus, avec des fonctionnalités de suivi des
            dépenses intégrées, <br /> vous pouvez facilement contrôler vos
            coûts et optimiser votre budget <br /> carburant, tout en
            bénéficiant d'une facturation claire et transparente.
          </Typography>
        </Grid>
        <Typography
          sx={{
            fontSize: { xs: 18, sm: 22 },
            fontFamily: "inherit",
            marginTop: { xs: "2rem", sm: "4rem" },
            marginLeft: { xs: "1rem", sm: "7rem" },
          }}
        >
          Optez pour la <span style={{ fontWeight: "bold" }} > commodité </span> et <span  style={{ fontWeight: "bold" }}>  l'efficacité </span> avec la carte multi-marque
          gazole d' <span  style={{ color: "#FFA447" }}>Africa Shining Fuel</span>. Que vous soyez un professionnel <br/> toujours
          en déplacement ou un particulier soucieux de maîtriser ses dépenses,
          cette carte vous offre une solution pratique et flexible <br/> pour vos
          besoins en carburant. Avec <span  style={{ color: "#FFA447" }} > Africa Shining Fuel</span>, simplifiez votre
          gestion de carburant et profitez d'une expérience de ravitaillement  <br/>
          sans tracas à chaque étape de votre trajet.
        </Typography>
      </Grid>
      <Footer marginTop={'6rem'}/>
    </div>
  );
}

export default CarteCarburant;
