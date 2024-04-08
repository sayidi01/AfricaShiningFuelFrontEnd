import React from "react";
import NavBar from "./NavBar";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import Footer from "./Footer";
import Devis from "./Devis";
import descBoisChauffage1 from "../src/images/descBOISCHAUFFAGE1.png";
import descBoisChauffage2 from "../src/images/descBOISCHAUFFAGE2.png";
import descBoisChauffage3 from "../src/images/descBOISCHAUFFAGE3.png";
import { Input } from "antd";
const { TextArea } = Input;
function BoisDeChauffage() {
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
              src={descBoisChauffage1}
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
              Dans notre collection de bois de chauffage chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              , chaque bûche est méticuleusement sélectionnée pour offrir une
              expérience de chauffage optimale. Notre engagement envers la
              <span style={{ fontWeight: "bold" }}> qualité </span> se reflète
              dans chaque aspect de notre approvisionnement en{" "}
              <span style={{ fontWeight: "bold" }}> bois de chauffage </span>,
              depuis la sélection rigoureuse des essences jusqu'à la découpe
              précise des bûches. Nous nous efforçons de vous fournir un produit
              qui brûle uniformément, générant une chaleur douce et durable pour
              vos espaces.
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
              Chaque type de bois que nous proposons est soigneusement séché
              pour garantir un{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                taux d'humidité optimal{" "}
              </span>{" "}
              , assurant ainsi une combustion propre et efficace. Nous
              comprenons l'importance d'un
              <span style={{ fontWeight: "bold" }}>
                {" "}
                bois de chauffage{" "}
              </span>{" "}
              bien sec pour éviter les émissions nocives et maximiser
              l'efficacité énergétique de votre système de chauffage. Avec nos
              bûches de bois bien séchées, vous pouvez profiter d'un feu
              confortable et réconfortant sans souci.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <img
              src={descBoisChauffage2}
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
              src={descBoisChauffage3}
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
              En plus de notre engagement envers la qualité du bois de
              chauffage, nous nous engageons également à offrir un service
              exceptionnel à nos clients. Nous comprenons que la commodité est
              essentielle lorsqu'il s'agit de l'approvisionnement en bois de
              chauffage, c'est pourquoi nous proposons une{" "}
              <span style={{ fontWeight: "bold" }}> livraison rapide </span> et
              <span style={{ fontWeight: "bold" }}> fiable </span> directement à
              votre porte. Notre équipe dévouée est là pour répondre à vos
              questions et vous assister à chaque étape du processus,
              garantissant ainsi une expérience client sans tracas. Avec{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              , vous pouvez avoir confiance en la qualité de notre bois de
              chauffage et en notre engagement envers votre satisfaction.
              Explorez notre gamme de bois de chauffage dès aujourd'hui et
              découvrez comment nous pouvons vous aider à créer une ambiance
              chaleureuse et accueillante dans tous vos espaces, qu'ils soient
              résidentiels ou commerciaux, tout au long de l'année.
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
      <Devis title="Devis Bois Chauffage" Société="Société (facultatif) *" Volume="Bois Chauffage (NB de Stére) *"/>
      <Footer marginTop={"7rem"} />
    </div>
  );
}

export default BoisDeChauffage;
