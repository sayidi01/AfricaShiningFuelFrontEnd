import { Box, Typography, Grid, Button, Container } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import Devis from "./Devis";
import descLubrifiant1 from "../src/images/descLUBRIFIANT1.png";
import descLubrifiant2 from "../src/images/descLUBRIFIANT2.png";
import descLubrifiant3 from "../src/images/descLUBRIFIANT3.jpeg";
import { Input } from "antd";
const { TextArea } = Input;

import Footer from "./Footer";

function Lubrifiants() {
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
              src={descLubrifiant1}
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
              Découvrez l'excellence à l'état pur avec nos lubrifiants de pointe
              chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              . Chaque composition de nos lubrifiants reflète notre
              détermination inflexible à garantir une{" "}
              <span style={{ fontWeight: "bold" }}> qualité </span>
              supérieure et des{" "}
              <span style={{ fontWeight: "bold" }}> performances </span>{" "}
              exceptionnelles. Notre processus de développement rigoureux
              combine l'expertise technique et la recherche constante pour créer
              des lubrifiants qui dépassent les normes industrielles.
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
              La <span style={{ fontWeight: "bold" }}> qualité </span>{" "}
              exceptionnelle de nos lubrifiants se traduit par une protection
              accrue et des performances optimales pour vos moteurs, assurant
              une durabilité et une efficacité maximales. Chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              , la <span style={{ fontWeight: "bold" }}> satisfaction </span> du
              client est notre priorité, et c'est pourquoi nous nous engageons à
              fournir des lubrifiants qui répondent non seulement, mais qui
              dépassent les attentes.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <img
              src={descLubrifiant2}
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
              src={descLubrifiant3}
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
      <Devis title="Devis Lubrifiants"  Société="Société (facultatif)" Volume="Référence Lubrifiants"/>
      <Footer marginTop={"7rem"} />
    </div>
  );
}

export default Lubrifiants;
