import React from "react";
import NavBar from "./NavBar";
import { Box, Grid, Typography, Container } from "@mui/material";
import Footer from "./Footer";
import descLivraison1 from "../src/images/descLIVRASION1.png";
import descLivraison2 from "../src/images/descLIVRAISON2.png";
import descLivraison3 from "../src/images/descLIVRAISON3.png";
function Livraison() {
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
              src={descLivraison1}
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
              Investiguez notre service de livraison haut de gamme chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              , soutenu par une flotte de camions de tout calibre. Notre
              réputation de{" "}
              <span style={{ fontWeight: "bold" }}> sérieux </span> et de{" "}
              <span style={{ fontWeight: "bold" }}> ponctualité</span> fait de
              nous un{" "}
              <span style={{ fontWeight: "bold" }}> choix de confiance </span>{" "}
              pour vos besoins en carburant. Nos chauffeurs expérimentés sont
              déterminés à garantir que votre carburant est livré en{" "}
              <span style={{ fontWeight: "bold" }}> toute sécurité </span> et à
              <span style={{ fontWeight: "bold" }}> temps </span> , assurant
              ainsi la continuité de vos activités.
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
              Avec{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              , vous bénéficiez d'un service de livraison fiable et
              professionnel à chaque fois. Notre flotte de camions est équipée
              des dernières technologies et nos chauffeurs sont formés pour
              respecter les normes les plus strictes en matière de{" "}
              <span style={{ fontWeight: "bold" }}> sécurité </span> et de{" "}
              <span style={{ fontWeight: "bold" }}> qualité de service </span> .
              Vous pouvez être sûr que votre carburant sera livré en toute
              sécurité et dans{" "}
              <span style={{ fontWeight: "bold" }}> les délais convenus </span>{" "}
              , vous offrant ainsi une tranquillité d'esprit totale.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <img
              src={descLivraison2}
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
              src={descLivraison3}
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
              Nous comprenons l'importance de la{" "}
              <span style={{ fontWeight: "bold" }}> ponctualité </span> pour
              votre entreprise, c'est pourquoi nous nous engageons à respecter
              les horaires de livraison convenus. Avec{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              , vous pouvez avoir confiance en notre capacité à vous fournir{" "}
              <span  style={{ fontWeight: "bold" }}>
                {" "}
                un service de livraison de carburant fiable et efficace{" "}
              </span>
              , vous permettant ainsi de vous concentrer sur ce qui compte
              vraiment pour votre entreprise.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer marginTop={"7rem"} />
    </div>
  );
}

export default Livraison;
