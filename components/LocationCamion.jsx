import { Box, Grid, Typography, Button, Container, Stack } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LocationCamion1 from "../src/images/descLocationCamion1.png";
import LocationCamion2 from "../src/images/decLocationCamion2png.jpeg";
import LocationCamion3 from "../src/images/descLocationCamion3.png";
function LocationCamion() {
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
              src={LocationCamion1}
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
              </span>{" "}
              , nous proposons un service de location de camions pour travaux,
              spécialement conçu pour répondre aux besoins des chantiers les
              plus exigeants. Nos camions de chantier, robustes et fiables, sont
              disponibles pour des locations à court et à long terme, offrant
              une solution flexible et efficace pour vos projets de construction
              et de travaux publics.
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
              Notre flotte de camions de chantier comprend une gamme variée de
              véhicules lourds, adaptés à différents types de travaux, qu'il
              s'agisse de transport de matériaux, de déblaiement, de
              terrassement ou de tout autre besoin spécifique sur le chantier.
              Chaque camion est maintenu dans un état optimal, avec des
              contrôles réguliers et une maintenance rigoureuse pour garantir
              <span style={{ fontWeight: "bold" }}>
                {" "}
                une performance maximale{" "}
              </span>{" "}
              et{" "}
              <span style={{ fontWeight: "bold" }}> une sécurité accrue </span>.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <img
              src={LocationCamion2}
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
              src={LocationCamion3}
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
              Nous comprenons l'importance de la ponctualité et de la fiabilité
              dans le secteur des travaux publics. C'est pourquoi notre service
              de location de camions s'accompagne d'
              <span style={{ fontWeight: "bold" }}>
                une gestion logistique efficace et d'un support client dédié
              </span>
              . Nos équipes sont à votre disposition pour vous conseiller sur le
              choix du camion le plus adapté à vos besoins et pour s'assurer que
              chaque location se déroule sans encombre. Avec{" "}
              <span style={{ fontWeight: "bold", color: "#FFA447" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              , vous bénéficiez d'une solution complète pour vos besoins de
              transport sur chantier. Contactez-nous dès aujourd'hui pour en
              savoir plus sur notre service de location de camions de chantier
              et découvrez comment nous pouvons contribuer au succès de vos
              projets de construction.
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

export default LocationCamion;
