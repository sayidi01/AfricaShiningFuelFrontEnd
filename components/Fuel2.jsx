import { Box, Typography, Grid, Button, Container } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import Devis from "./Devis";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import descFuel1 from "../src/images/descFUEL2(1).png";
import descFuel2 from "../src/images/descFUEL2(2).png";
import descFuel3 from "../src/images/descFuel2(3).png";
import { Input } from "antd";
const { TextArea } = Input;

import Footer from "./Footer";

function Fuel2() {
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
        Énergie d'Excellence par Africa Shining Fuel :
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
              src={descFuel1}
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
              Plongez dans de nouveaux horizons énergétiques avec le{" "}
              <span style={{ fontWeight: "bold" }}> fuel </span>
              exceptionnel d'
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              , une source de puissance conçue pour surpasser toutes vos
              attentes. Notre fuel représente l'engagement envers une{" "}
              <span style={{ fontWeight: "bold" }}> performance </span>{" "}
              optimale, une{" "}
              <span style={{ fontWeight: "bold" }}> fiabilité </span>
              inébranlable et la{" "}
              <span style={{ fontWeight: "bold" }}> qualité </span> qui fait
              notre renommée. La composition unique de notre{" "}
              <span style={{ fontWeight: "bold" }}> fuel </span> assure une
              combustion propre, préservant la longévité de vos moteurs tout en
              délivrant une puissance constante à vos opérations. Opter pour
              notre <span style={{ fontWeight: "bold" }}> fuel </span>, c'est
              choisir une expérience énergétique qui transcende les normes
              ordinaires.
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
              Adapté aux exigences diverses des moteurs haut de gamme et des
              opérations industrielles complexes, notre{" "}
              <span style={{ fontWeight: "bold" }}> fuel </span> offre une
              réponse personnalisée à vos besoins énergétiques les plus
              sophistiqués. Chaque ravitaillement devient une célébration de
              l'efficacité, une rencontre avec une énergie adaptée à vos
              attentes les plus raffinées. Au-delà de la performance mécanique,
              nous nous engageons envers des pratiques environnementales
              responsables. En choisissant notre{" "}
              <span style={{ fontWeight: "bold" }}> fuel </span>, vous optez
              pour une énergie qui respecte non seulement vos moteurs mais
              contribue également à la
              <span style={{ fontWeight: "bold" }}>
                {" "}
                préservation de notre planète{" "}
              </span>
              .
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <img
              src={descFuel2}
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
              src={descFuel3}
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
              La qualité de nos services se manifeste dans chaque interaction.
              Nous nous efforçons de dépasser vos attentes, garantissant une
              <span style={{ fontWeight: "bold" }}>
                {" "}
                livraison ponctuelle{" "}
              </span>{" "}
              et un{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                engagement continu{" "}
              </span>{" "}
              envers l'excellence du service.{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              vous invite à découvrir bien plus qu'un simple carburant. C'est le
              début d'une collaboration durable, où chaque goutte de notre
              énergie exceptionnelle et chaque interaction de qualité deviennent
              une expérience inoubliable. Choisissez l'excellence énergétique
              avec notre fuel et propulsez votre entreprise vers un avenir où
              <span style={{ fontWeight: "bold" }}> l'efficacité </span>, la{" "}
              <span style={{ fontWeight: "bold" }}> performance </span> et la{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                responsabilité environnementale{" "}
              </span>{" "}
              convergent harmonieusement.
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
      <Devis title="Devis Fuel oil n° 2" Société="Société(facultatif) *" Volume="Volume  Fuel oil n° 2 *" />
      <Footer marginTop={"80px"} />
    </div>
  );
}

export default Fuel2;
