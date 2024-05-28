import { Box, Grid, Typography, Button, Container, Stack } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Devis from "./Devis";
import Bitume1 from "../src/images/descBitume1.png";
import Bitume2 from "../src/images/descBitume2.png";
import Bitume3 from "../src/images/descBitume3.png";

function Bitume() {
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
              src={Bitume1}
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
              , nous sommes fiers de proposer du bitume de{" "}
              <span style={{ fontWeight: "bold" }}> haute qualité </span>, un
              matériau essentiel pour les projets de construction et
              d'infrastructure. Le bitume, reconnu pour ses propriétés adhésives
              et imperméabilisantes, est un composant clé dans la réalisation de
              routes durables, de parkings, de pistes d'atterrissage et d'autres
              surfaces nécessitant une finition robuste et résistante.
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
              Notre bitume est soigneusement sélectionné et testé pour répondre
              aux normes les plus strictes de l'industrie, assurant ainsi une
              performance optimale et une longévité exceptionnelle. Que vous
              soyez impliqué dans des projets de construction à grande échelle
              ou des applications plus spécifiques, nous fournissons un bitume
              qui garantit{" "}
              <span style={{ fontWeight: "bold" }}> une durabilité </span> et{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                une efficacité maximales{" "}
              </span>{" "}
              .
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <img
              src={Bitume2}
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
              src={Bitume3}
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
              , nous comprenons l'importance de la fiabilité et de la qualité
              dans vos projets. C'est pourquoi nos équipes s'engagent à vous
              offrir un service irréprochable et des produits de bitume qui
              répondent à vos attentes les plus élevées. Nos experts sont à
              votre disposition pour vous conseiller et vous aider à choisir le
              bitume le mieux adapté à vos besoins spécifiques. Optez pour la
              fiabilité et l'efficacité avec le bitume d'
              <span style={{ fontWeight: "bold", color: "#FFA447" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              . En choisissant notre bitume, vous choisissez un partenaire de
              confiance pour des solutions de pavage solides et durables, qui
              résistent aux conditions climatiques et à l'usure du temps.
              Contactez-nous dès aujourd'hui pour en savoir plus sur nos
              produits et services, et découvrez comment nous pouvons contribuer
              au succès de vos projets d'infrastructure.
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
      <Devis
        title="Devis Bitume"
        Société="Société (facultatif) *"
        Volume="Volume bitume"
      />
      <Footer marginTop={"5rem"} />
    </div>
  );
}

export default Bitume;
