import React from "react";
import NavBar from "./NavBar";
import { Grid, Typography, Container } from "@mui/material";
import Footer from "./Footer";
import descGazoil1 from "../src/images/descGAZOIL.jpeg";
import Fuel from "../src/images/fuel2.jpeg";
import lubrifiant from "../src/images/descLUBRIFIANT1.png";
function ActualitéASF() {
  return (
    <div>
      <NavBar />
      <Container sx={{ my: 8 }} maxWidth={"lg"} style={{ padding: "none" }}>
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
          ACTUALITÉS ASF ’GASOIL’
        </Typography>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingBottom: 120,
            marginTop: "3rem",
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
              Le gasoil, un carburant indispensable pour les entreprises et les
              industries, est au cœur de notre engagement chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              . Nous proposons une gamme complète de gasoils de qualité
              supérieure, spécialement conçus pour répondre aux besoins variés
              de nos clients professionnels. Notre gasoil est reconnu pour sa
              fiabilité et son efficacité énergétique, offrant une combustion
              propre et une performance optimale pour les flottes de véhicules
              et les équipements industriels. Pour ceux qui recherchent des
              performances encore plus élevées, notre gasoil premium, enrichi en
              additifs de pointe, assure une protection accrue du moteur et une
              durabilité maximale. Chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>
              , nous mettons un point d'honneur à garantir la qualité et la
              sécurité de notre gasoil à chaque étape de sa production et de sa
              distribution. Notre équipe dévouée est à votre disposition pour
              vous fournir des conseils d'experts et une assistance
              personnalisée afin de répondre à vos besoins en carburant. Faites
              confiance à{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              pour votre approvisionnement en gasoil et découvrez comment notre
              engagement envers l'excellence peut contribuer au succès de votre
              entreprise.
            </Typography>
          </Grid>
        </Grid>
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
          ACTUALITÉS ASF ’FUEL’
        </Typography>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingBottom: 120,
            marginTop: "3rem",
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
              Le fuel oïl n°2, un élément fondamental de notre gamme de produits
              chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              , reste une source d'énergie essentielle pour de nombreuses
              industries. Notre offre comprend différents types de fuel, adaptés
              aux besoins spécifiques de nos clients professionnels. Le fuel
              standard est un choix courant pour les industries nécessitant une
              source de chauffage fiable et efficace. Il offre une combustion
              homogène, assurant un fonctionnement optimal des équipements
              industriels. Pour ceux qui recherchent une solution encore plus
              performante, notre fuel supérieur est enrichi en additifs pour
              garantir une résistance accrue aux conditions climatiques
              extrêmes. La production de notre fuel oïl n°2 est soumise à des
              normes strictes de qualité et de sécurité. Du processus
              d'extraction du pétrole brut à l'ajout d'additifs, nous veillons à
              ce que chaque étape soit effectuée avec précision pour garantir la
              fiabilité de notre produit. Chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              , nous nous engageons à fournir à nos clients professionnels des
              solutions énergétiques adaptées à leurs besoins spécifiques. Notre
              équipe dévouée travaille en étroite collaboration avec nos clients
              pour comprendre leurs exigences et leur offrir des produits et
              services de qualité supérieure. Contactez-nous dès aujourd'hui
              pour découvrir comment nous pouvons répondre à vos besoins en
              matière de fuel.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <img
              src={Fuel}
              width={"100%"}
              style={{
                borderRadius: "1.875rem",
                border: "1px solid #dbeefe",
              }}
            />
          </Grid>
        </Grid>
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
          ACTUALITÉS ASF ’LUBRIFIANTS’
        </Typography>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingBottom: 120,
            marginTop: "3rem",
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
              src={lubrifiant}
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
              Les lubrifiants sont l'âme silencieuse de la mécanique moderne,
              agissant comme des gardiens invisibles de la performance et de la
              longévité des machines. Chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              , nous vous proposons bien plus que de simples lubrifiants ; nous
              vous offrons une solution complète pour protéger et optimiser vos
              équipements. Nos lubrifiants de pointe sont spécialement formulés
              pour répondre aux exigences les plus strictes de l'industrie,
              offrant une lubrification supérieure, une résistance à l'usure
              accrue et une durabilité exceptionnelle. Que vous ayez besoin de
              lubrifiants pour vos moteurs, transmissions, hydrauliques ou
              engrenages, nous avons la solution adaptée à vos besoins. Chez{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              , nous sommes fiers de notre engagement envers l'excellence et
              l'innovation. Nos lubrifiants sont le fruit d'une recherche
              approfondie et d'un développement continu, garantissant des
              performances optimales dans toutes les conditions. Comptez sur
              notre savoir-faire pour assurer la protection et la performance de
              vos équipements, et découvrez la différence{" "}
              <span style={{ color: "#FFA447", fontWeight: "bold" }}>
                {" "}
                Africa Shining Fuel{" "}
              </span>{" "}
              dès aujourd'hui.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer marginTop={"3rem"} />
    </div>
  );
}

export default ActualitéASF;
