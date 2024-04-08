import React from "react";
import NavBar from "./NavBar";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import Devis from "./Devis";
import descProduitNettoyage1 from "../src/images/descNETTOYAGE1.png";
import descProduitNettoyage2 from "../src/images/descNETTOYAGE2.png";
import { Input } from "antd";
const { TextArea } = Input;

import Footer from "./Footer";
function ProduitNettoyage() {
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
              src={descProduitNettoyage1}
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
              Entrez dans le monde du nettoyage industriel avec les produits de
              la <span style={{ fontWeight: "bold" }}> marque Paredes </span>,
              distribués en partenariat avec{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              Notre collaboration avec Paredes nous permet de vous offrir une
              gamme complète de produits de nettoyage industriels de{" "}
              <span style={{ fontWeight: "bold" }}> haute qualité </span> ,
              conçus pour répondre aux besoins les plus exigeants de divers
              secteurs industriels. Que ce soit pour le nettoyage des
              équipements, des sols, des machines ou des surfaces, nos produits
              Paredes sont formulés avec des ingrédients{" "}
              <span style={{ fontWeight: "bold" }}> puissants </span> et
              <span style={{ fontWeight: "bold" }}>
                {" "}
                respectueux de l'environnement{" "}
              </span>{" "}
              , garantissant une efficacité maximale tout en préservant la
              sécurité des travailleurs et l'intégrité des installations.
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
              Chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              , nous nous engageons à fournir à nos clients des solutions de
              nettoyage industrielles de premier ordre, soutenues par notre
              <span style={{ fontWeight: "bold" }}>
                {" "}
                partenariat solide avec la marque Paredes{" "}
              </span>
              . Notre équipe d'experts est à votre disposition pour vous
              conseiller sur les produits les mieux adaptés à vos besoins
              spécifiques et vous fournir un service clientèle exceptionnel.
              Avec{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              et <span  style={{ fontWeight: "bold" }}>  Paredes </span> à vos côtés, vous pouvez être assuré d'obtenir des
              résultats de nettoyage optimaux et de maintenir un environnement
              de travail propre, sûr et conforme aux <span  style={{ fontWeight: "bold" }} >  normes les plus strictes de
              qualité et d'hygiène </span>.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <img
              src={descProduitNettoyage2}
              width={"100%"}
              style={{
                borderRadius: "1.875rem",
                border: "1px solid #dbeefe",
              }}
            />
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
     <Devis title="Devis Produits De Nettoyage" Société="Société (facultatif) *" Volume="Référnce produit" />
      <Footer marginTop={"5rem"} />
    </div>
  );
}

export default ProduitNettoyage;
