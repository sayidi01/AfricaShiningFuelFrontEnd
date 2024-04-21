import React from "react";
import NavBar from "./NavBar";
import { Grid, Typography, Container } from "@mui/material";
import RelationInvestor from "../src/images/relationInvestiseurs.png";
import Footer from "./Footer";
function RelationsInvestiseurs() {
  return (
    <div>
      <NavBar />
      <Container sx={{ my: 6 }} maxWidth={"lg"} style={{ padding: "none" }}>
        <Typography
          sx={{
            fontSize: {
              xs: 25,
              sm: 35,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            },
          }}
        >
          Relations Investisseurs
        </Typography>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingBottom: 120,
            marginTop: '3rem'
          }}
          gap={2}
          sx={{
            flexWrap: {
              md: "nowrap",
            },
          }}
        >
          <Grid item xs={12} md={6}>
            <img
              src={RelationInvestor}
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
            md={6}
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
              Dans un monde en constante évolution, les relations investisseurs
              revêtent une importance cruciale pour{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              . Nous sommes engagés à maintenir une communication transparente
              et ouverte avec nos investisseurs, afin de les informer des
              développements stratégiques, financiers et opérationnels de notre
              entreprise. Chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              , nous considérons nos investisseurs comme des partenaires
              précieux dans notre croissance et notre succès à long terme. Nous
              nous efforçons de fournir des informations précises et opportunes,
              ainsi qu'une analyse approfondie de nos performances, pour
              permettre à nos investisseurs de prendre des décisions éclairées.
              Notre équipe dédiée aux relations investisseurs est disponible
              pour répondre aux questions, fournir des informations
              supplémentaires et faciliter les échanges entre nos actionnaires
              et la direction. Nous nous engageons à maintenir des normes
              élevées de transparence, d'intégrité et de responsabilité dans
              toutes nos interactions avec la communauté des investisseurs. À{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              , nous sommes déterminés à construire et à entretenir des
              relations solides et durables avec nos investisseurs, fondées sur
              la confiance, la collaboration et la création de valeur mutuelle.
              Nous sommes reconnaissants pour la confiance et le soutien de nos
              investisseurs, et nous nous engageons à créer un environnement
              propice à la croissance et à la prospérité à long terme pour
              toutes les parties prenantes.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer marginTop={"3rem"} />
    </div>
  );
}

export default RelationsInvestiseurs;
