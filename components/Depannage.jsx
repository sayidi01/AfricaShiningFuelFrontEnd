import { Box, Grid, Typography, Button, Container, Stack } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import depannage1 from "../src/images/descDepanage1.png";
import depannage2 from "../src/images/descDepanage2.png";
import depannage3 from "../src/images/decDepanage3.png";
function Depannage() {
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
              src={depannage1}
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
              <span style={{ fontWeight: "bold", color: "#FFA447" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              , nous sommes fiers de proposer{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                un service de dépannage auto rapide et fiable{" "}
              </span>{" "}
              pour vous assurer une tranquillité d'esprit sur la route. En cas
              de panne ou de problème mécanique, notre équipe de professionnels
              qualifiés est prête à intervenir 24/7 pour vous remettre en route
              le plus rapidement possible.
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
              Nos techniciens expérimentés disposent des compétences et des
              outils nécessaires pour diagnostiquer et résoudre une large gamme
              de problèmes automobiles, qu'il s'agisse de pannes de batterie, de
              crevaisons, de problèmes de moteur ou de tout autre souci
              mécanique. Grâce à notre flotte de véhicules d'intervention, nous
              pouvons vous assister où que vous soyez, garantissant une réponse
              rapide et efficace.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <img
              src={depannage2}
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
              src={depannage3}
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
              <span style={{ fontWeight: "bold" }}> Le sérieux </span> et la{" "}
              <span style={{ fontWeight: "bold" }}> ponctualité </span> de notre
              service de dépannage auto sont notre priorité. Chaque intervention
              est menée avec rigueur et professionnalisme pour minimiser votre
              temps d'immobilisation. Nous nous engageons à fournir un service
              de haute qualité, en respectant les normes de sécurité les plus
              strictes et en utilisant des pièces de rechange fiables. Faites
              confiance à
              <span style={{ fontWeight: "bold", color: "#FFA447" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              pour vos besoins de dépannage auto. Contactez-nous dès aujourd'hui
              et découvrez comment notre service de dépannage peut vous assister
              en cas de besoin urgent sur la route.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box width="50%" margin="auto">
        <Typography
          style={{ borderBottom: "1px solid #FFA447" }}
          sx={{
            marginTop: { xs: "2rem", sm: "5rem" },
          }}
        ></Typography>
      </Box>

      <Footer marginTop={"5rem"} />
    </div>
  );
}

export default Depannage;
