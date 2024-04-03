import React from "react";
import NavBar from "./NavBar";
import { Grid, Typography, Container } from "@mui/material";
import descNettoyageCuve1 from "../src/images/descNETTOYAGECUVE1.png";
import descNettoyageCuve2 from "../src/images/descNETTOYAGECUVE2.png";
import descNettoyageCuve3 from "../src/images/descNETTOYAGECUVE3.png";
import Footer from "./Footer";
function NettoyageCuve() {
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
              src={descNettoyageCuve1}
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
              Bienvenue chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              , où nous vous offrons un service de nettoyage de cuves
              professionnel et efficace. Grâce
              <span style={{ fontWeight: "bold" }}> à notre expertise </span> et
              à{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                notre équipement de pointe{" "}
              </span>
              , nous assurons un nettoyage complet et rigoureux de vos cuves,
              garantissant ainsi un environnement sûr et conforme aux{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                normes de qualité{" "}
              </span>{" "}
              les plus strictes.
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
              Notre{" "}
              <span style={{ fontWeight: "bold" }}> équipe spécialisée </span>{" "}
              est formée pour intervenir sur tous types de cuves, qu'il s'agisse
              de cuves de stockage de carburant, de produits chimiques ou
              d'autres liquides. Nous utilisons des méthodes et des produits
              adaptés à chaque type de cuve, garantissant ainsi un nettoyage en
              profondeur et une élimination efficace des résidus et des
              contaminants.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <img
              src={descNettoyageCuve2}
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
              src={descNettoyageCuve3}
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
              En tant que société engagée envers l'excellence et la satisfaction
              de nos clients, nous mettons un point d'honneur à fournir un
              service de{" "}
              <span style={{ fontWeight: "bold" }}> qualité supérieure </span> à
              chaque intervention. Avec
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              , vous pouvez avoir l'assurance que vos cuves seront entre de
              bonnes mains, et que le travail sera effectué avec
              <span style={{ fontWeight: "bold" }}>
                {" "}
                professionnalisme{" "}
              </span> et{" "}
              <span style={{ fontWeight: "bold" }}> efficacité </span>.
              Faites-nous confiance pour prendre soin de vos cuves et maintenir
              un environnement de travail sûr et propre.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer marginTop={"6rem"} />
    </div>
  );
}

export default NettoyageCuve;
