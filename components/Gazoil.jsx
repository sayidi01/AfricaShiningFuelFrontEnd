import { Typography, Grid, Box, Button, Container } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import { useTheme } from "@mui/material/styles";
import Footer from "../components/Footer";
import Devis from "./Devis";

import descGazoil1 from "../src/images/descGAZOIL.jpeg";
import descGazoil2 from "../src/images/descGazoil2.png";
import descGazoil3 from "../src/images/descGAZOIL3.png";
import { Input } from "antd";
const { TextArea } = Input;
function Gazoil() {
  const theme = useTheme();
  return (
    <div>
      <NavBar />
      <Typography
        sx={{
          fontSize: { xs: 19, sm: 24 },
          marginLeft: { xs: "1rem", sm: "8rem" },
          marginTop: { xs: "2rem", sm: "4rem" },
        }}
        style={{ color: "#FFA447", fontFamily: "inherit", fontWeight: "bold" }}
      >
        Gasoil Excellence et Services de Qualité par Africa Shining Fuel :
      </Typography>

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
              src={descGazoil1}
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
              Explorez l'excellence énergétique avec{" "}
              <span style={{ fontWeight: "bold" }}> Gasoil </span> Excellence,
              une véritable quintessence de{" "}
              <span style={{ fontWeight: "bold" }}> qualité </span>, et plongez
              dans un univers où la
              <span style={{ fontWeight: "bold" }}> fiabilité </span>, le{" "}
              <span style={{ fontWeight: "bold" }}> sérieux </span> et{" "}
              <span style={{ fontWeight: "bold" }}> l'engagement </span>{" "}
              définissent notre mission. Chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              , la <span style={{ fontWeight: "bold" }}> qualité </span>{" "}
              transcende chaque aspect de notre offre, du carburant que nous
              fournissons à la prestation de nos services. Notre Gasoil
              Excellence incarne la norme d'or de la qualité dans le secteur des
              carburants. Chaque goutte résulte d'un processus de raffinage
              rigoureux, garantissant une pureté inégalée, préservant la
              performance de vos moteurs et vous offrant une tranquillité
              d'esprit inébranlable. Opter pour notre gasoil, c'est choisir la
              fiabilité à chaque ravitaillement.
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
              En plus de la qualité exceptionnelle de notre carburant, notre
              engagement envers la{" "}
              <span style={{ fontWeight: "bold" }}> qualité de service </span>{" "}
              est tout aussi intransigeant. Notre équipe dédiée s'engage à
              fournir des services irréprochables, alliant expertise et
              dévouement pour répondre à vos besoins énergétiques spécifiques.
              La <span style={{ fontWeight: "bold" }}> ponctualité </span>
              est notre promesse ; chaque livraison est orchestrée avec
              précision pour respecter vos échéances.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <img
              src={descGazoil2}
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
              src={descGazoil3}
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
              Notre sérieux et notre engagement ne se limitent pas à la qualité
              du produit, mais définissent également notre approche de service.
              Nous sommes plus qu'un fournisseur de carburant ; nous sommes un{" "}
              <span style={{ fontWeight: "bold" }}> partenaire engagé </span>{" "}
              dans votre succès. Chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel
              </span>
              , nous considérons chaque interaction comme une occasion de
              démontrer notre dévouement envers la qualité, la ponctualité et le
              sérieux, établissant ainsi une{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                relation de confiance{" "}
              </span>{" "}
              à long terme avec nos clients. Optez pour l'excellence totale avec
              Gasoil Excellence et Services de Qualité par{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              , et découvrez une énergie qui transcende les attentes.
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
       <Devis title='Devis Gasoil ' Société="Société(Obligatoire) *" Volume="Volume Gazoil *" />   
      
      <Footer marginTop="50px" />
    </div>
  );
}

export default Gazoil;
