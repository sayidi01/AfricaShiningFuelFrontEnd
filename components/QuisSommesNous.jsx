import React from "react";
import NavBar from "./NavBar";
import { Grid, Typography, Container } from "@mui/material";
import Footer from "./Footer";
import QuiSommes from'../src/images/LOGO_AFRICA_SHINING.png'
function QuisSommesNous() {
  return (
    <div>
        <NavBar/>
      <Container sx={{ my: 10 }} maxWidth={"lg"} style={{ padding: "none" }}>
      <Typography
          sx={{
            fontSize: {
              xs: 25,
              sm: 35,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            },
          }}
        >
         Quis Sommes Nous ?
        </Typography>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingBottom: 120,
            marginTop: '3rem'
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
              src={QuiSommes}
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
              </span>
              , notre histoire est celle d'une entreprise familiale née de la
              passion pour l'innovation énergétique et le service client de
              qualité. Fondée en 2019, notre entreprise s'est rapidement
              affirmée comme un acteur majeur du secteur de la distribution de
              carburants, en offrant des solutions énergétiques fiables et
              responsables à nos clients. Notre engagement envers l'excellence
              et la durabilité se reflète dans tout ce que nous faisons. Nous
              sommes fiers de fournir des produits de qualité supérieure, tout
              en nous efforçant de réduire notre empreinte environnementale.
              Chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              , nous croyons fermement en la responsabilité sociale des
              entreprises et nous nous engageons à contribuer positivement aux
              communautés que nous servons. En tant qu'entreprise familiale,
              nous attachons une grande importance aux relations avec nos
              clients. Notre équipe dévouée est toujours à l'écoute de leurs
              besoins et s'efforce de fournir un service client exceptionnel à
              chaque interaction. Nous sommes profondément reconnaissants pour
              la confiance que nos clients nous accordent et nous nous engageons
              à continuer à mériter cette confiance chaque jour. Avec une vision
              audacieuse pour l'avenir,{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              s'efforce de rester à la pointe de l'innovation énergétique, tout
              en maintenant des valeurs de qualité, d'intégrité et de
              responsabilité. Rejoignez-nous dans notre mission de faire briller
              l'avenir de l'énergie en Afrique et au-delà.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer marginTop={'3rem'}/>
    </div>
  );
}

export default QuisSommesNous;
