import React from "react";
import NavBar from "./NavBar";
import { Box, Grid, Typography } from "@mui/material";
import Footer from "./Footer";
function Livraison() {
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
            <img src="../src/images/descLIVRASION1.png" width={550} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            sx={{
              marginTop: { xs: "1rem", sm: "8rem" },
              fontSize: { xs: 18, sm: 22 },
              fontFamily: "inherit",
              marginLeft: { xs: "1rem", sm: "0rem" },
            }}
          >
            Investiguez notre service de livraison haut de gamme <br /> chez{" "}
            <span style={{ color: "#FFA447" }}> Africa Shining Fuel</span>,
            soutenu par une flotte de <br />
            camions de tout calibre. Notre réputation de{" "}
            <span style={{ fontWeight: "bold" }}> sérieux </span> <br /> et de{" "}
            <span style={{ fontWeight: "bold" }}> ponctualité </span> fait de
            nous{" "}
            <span style={{ fontWeight: "bold" }}> un choix de confiance</span>{" "}
            <br /> pour vos besoins en carburant. Nos chauffeurs expérimentés{" "}
            <br /> sont déterminés à garantir que votre carburant est livré en{" "}
            <br />
            <span style={{ fontWeight: "bold" }}> toute sécurité </span> et à{" "}
            <span style={{ fontWeight: "bold" }}> temps </span>, assurant ainsi
            la continuité de <br />
            vos activités.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 22 },
              marginTop: { xs: "2rem", sm: "13rem" },
              marginLeft: { xs: "1rem", sm: "5rem" },
            }}
          >
            Avec <span style={{ color: "#FFA447" }}> Africa Shining Fuel </span>
            , vous bénéficiez d'un service de livraison fiable et professionnel
            à chaque fois. Notre flotte de camions est équipée des dernières
            technologies et nos chauffeurs sont formés pour respecter les normes
            les plus strictes en matière de{" "}
            <span style={{ fontWeight: "bold" }}> sécurité </span> et de{" "}
            <span style={{ fontWeight: "bold" }}> qualité de service </span> .
            Vous pouvez être sûr que votre carburant sera livré en toute
            sécurité et dans{" "}
            <span style={{ fontWeight: "bold" }}> les délais convenus </span>,
            vous offrant ainsi une tranquillité d'esprit totale.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              marginTop: { xs: "1rem", sm: "10rem" },
              marginLeft: { xs: "0rem", sm: "5rem" },
            }}
          >
            <img src="../src/images/descLIVRAISON2.png" width={550} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              marginLeft: { xs: "0rem", sm: "5rem" },
              marginTop: { xs: "3rem", sm: "7rem" },
            }}
          >
            <img src="../src/images/descLIVRAISON3.png" width={550} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 22 },
              marginTop: { xs: "1rem", sm: "13rem" },
              marginLeft: { xs: "1rem", sm: "0rem" },
            }}
          >
            Nous comprenons l'importance de la{" "}
            <span style={{ fontWeight: "bold" }}> ponctualité </span> pour votre
            entreprise, <br /> c'est pourquoi nous nous engageons à respecter
            les horaires de livraison convenus. Avec{" "}
            <span style={{ color: "#FFA447" }}> Africa Shining Fuel </span> ,
            vous pouvez avoir confiance en notre capacité à vous fournir{" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              un service de livraison de carburant fiable et <br /> efficace{" "}
            </span>
            , vous permettant ainsi de vous concentrer sur ce qui compte <br />{" "}
            vraiment pour votre entreprise.
          </Typography>
        </Grid>
      </Grid>
      <Footer marginTop={'7rem'}/>
    </div>
  );
}

export default Livraison;
