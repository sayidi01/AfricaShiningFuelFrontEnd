import React from "react";
import NavBar from "./NavBar";
import { Grid, Typography, Container } from "@mui/material";
import telepage1 from "../src/images/descTELEBADGE1.png";
import telepage2 from "../src/images/descTELEBAGDE2.png";
import Footer from "./Footer";
function AbonnementTelepage() {
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
              src={telepage1}
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
              Explorez les avantages de notre service d'abonnement Télébadge
              chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              , conçu sur mesure pour répondre aux besoins spécifiques de votre
              flotte B to B. Avec Télébadge, offrez à vos camions et véhicules
              de service un{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                accès pratique{" "}
              </span> et{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                sécurisé aux stations-service{" "}
              </span>{" "}
              , garantissant ainsi des ravitaillements en carburant fluides et
              sans tracas.
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
              Grâce à notre solution Télébadge, vous bénéficiez d'un contrôle
              total sur les dépenses de carburant de votre flotte, avec des
              outils de surveillance en temps réel et des rapports détaillés sur
              l'utilisation du carburant. Personnalisable selon vos exigences,
              notre solution Télébadge vous permet de maximiser l'efficacité
              opérationnelle de votre flotte, tout en réduisant les coûts et en
              optimisant la productivité. Faites confiance à
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              pour vous fournir un service d'abonnement Télébadge fiable et
              performant, soutenu par notre engagement envers{" "}
              <span style={{ fontWeight: "bold" }}> l'excellence </span> et la
              <span style={{ fontWeight: "bold" }}> satisfaction client </span>.
              Simplifiez la gestion de votre flotte B to B et découvrez de
              nouveaux niveaux d'efficacité avec Télébadge.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <img
              src={telepage2}
              width={"100%"}
              style={{
                borderRadius: "1.875rem",
                border: "1px solid #dbeefe",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer marginTop={'3rem'}/>
    </div>
  );
}

export default AbonnementTelepage;
