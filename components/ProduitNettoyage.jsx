import React from "react";
import NavBar from "./NavBar";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
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
      <Grid container>
        <Grid container justifyContent="center" alignItems="center">
          <Typography
            sx={{
              fontSize: { xs: 20, sm: 30 },
              fontFamily: "inherit",
              marginTop: { xs: "4rem", sm: "6rem" },
              fontWeight: "bolder",
            }}
          >
            Devis Produits De Nettoyage
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box
            display={"flex"}
            gap={6}
            alignItems={"center"}
            marginTop={{ xs: "2rem", sm: "1rem" }}
          >
            <Typography
              sx={{
                fontFamily: "inherit",
                fontSize: { xs: 20, sm: 23 },
                marginLeft: { xs: "1rem", sm: "8rem" },
              }}
            >
              Civilité *
            </Typography>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Mme"
                />
                <FormControlLabel value="male" control={<Radio />} label="Mr" />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box
            display={{ xs: "block", sm: "flex" }}
            alignItems="center"
            sx={{ gap: "6rem" }}
          >
            <Typography
              style={{ color: "gray", fontFamily: "Delicatessen Script" }}
              sx={{
                marginLeft: { xs: "2rem", sm: "8rem" },
                marginTop: { xs: "3rem", sm: "3.5rem" },
                fontSize: { xs: "19px", sm: "20px" },
              }}
            >
              Nom *
            </Typography>
            <Input
              style={{
                width: "350px",
                height: "30px",
                marginLeft: "2rem",
              }}
              className="input-email-mobile"
            />
          </Box>
          <Box
            display={{ xs: "block", sm: "flex" }}
            alignItems="center"
            sx={{ gap: "6rem" }}
          >
            <Typography
              style={{ color: "gray", fontFamily: "Delicatessen Script" }}
              sx={{
                marginLeft: { xs: "2rem", sm: "8rem" },
                marginTop: { xs: "3rem", sm: "3.5rem" },
                fontSize: { xs: "19px", sm: "20px" },
              }}
            >
              Prenom *
            </Typography>
            <Input
              style={{
                width: "350px",
                height: "30px",
                marginLeft: "1rem",
              }}
              className="input-email-mobile"
            />
          </Box>
          <Box
            display={{ xs: "block", sm: "flex" }}
            alignItems="center"
            sx={{ gap: "2rem" }}
          >
            <Typography
              style={{ color: "gray", fontFamily: "Delicatessen Script" }}
              sx={{
                marginLeft: { xs: "2rem", sm: "8rem" },
                marginTop: { xs: "3rem", sm: "3.5rem" },
                fontSize: { xs: "19px", sm: "20px" },
              }}
            >
              Socité (facultatif)
            </Typography>
            <Input
              style={{
                width: "350px",
                height: "30px",
                marginLeft: "1rem",
              }}
              className="input-email-mobile"
            />
          </Box>
          <Box
            display={{ xs: "block", sm: "flex" }}
            alignItems="center"
            sx={{ gap: "5rem" }}
          >
            <Typography
              style={{ color: "gray", fontFamily: "Delicatessen Script" }}
              sx={{
                marginLeft: { xs: "2rem", sm: "8rem" },
                marginTop: { xs: "3rem", sm: "3.5rem" },
                fontSize: { xs: "19px", sm: "20px" },
              }}
            >
              Telephone *
            </Typography>
            <Input
              style={{
                width: "350px",
                height: "30px",
                marginLeft: "1rem",
              }}
              className="input-email-mobile"
            />
          </Box>
          <Box
            display={{ xs: "block", sm: "flex" }}
            alignItems="center"
            sx={{ gap: "2rem" }}
          >
            <Typography
              style={{ color: "gray", fontFamily: "Delicatessen Script" }}
              sx={{
                marginLeft: { xs: "2rem", sm: "8rem" },
                marginTop: { xs: "3rem", sm: "3.5rem" },
                fontSize: { xs: "19px", sm: "20px" },
              }}
            >
              Réfernce produit
            </Typography>
            <Input
              style={{
                width: "350px",
                height: "30px",
                marginLeft: "1rem",
              }}
              className="input-email-mobile"
            />
          </Box>
          <Box
            display={{ xs: "block", sm: "flex" }}
            alignItems="center"
            sx={{ gap: "3rem" }}
          >
            <Typography
              style={{ color: "gray", fontFamily: "Delicatessen Script" }}
              sx={{
                marginLeft: { xs: "2rem", sm: "8rem" },
                marginTop: { xs: "3rem", sm: "3.5rem" },
                fontSize: { xs: "19px", sm: "20px" },
              }}
            >
              informations
              <br /> Complémentaires
            </Typography>
            <TextArea
              style={{
                marginTop: "3rem",
                width: "350px",
                marginLeft: window.innerWidth < 600 ? "2rem" : "0",
              }}
              rows={4}
            />
          </Box>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              marginTop: "2rem",
            }}
          >
            <Button
              type="primary"
              style={{
                backgroundColor: "#333",
                color: "#fff",
                borderRadius: "0",
                width: 150,
                height: 50,
                fontSize: 18,
                fontFamily: "Montserrat",
                textTransform: "none",
              }}
            >
              Envoyer
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              marginTop: "2rem",
              width: "350px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Delicatessen Script",
                fontSize: 23,
                marginLeft: "2rem",
              }}
            >
              SAS Fécourt
            </Typography>
            <Typography
              sx={{
                fontFamily: "inherit",
                fontSize: 20,
                marginLeft: "2rem",
                color: "gray",
              }}
            >
              CFC Anfa, Casablanca
            </Typography>
            <Typography
              sx={{
                fontFamily: "inherit",
                fontSize: 20,
                marginLeft: "2rem",
                color: "gray",
              }}
            >
              Tel : (+212)0 700 738 084 <br /> J.M. Senhaji
            </Typography>
            <Typography
              sx={{
                fontFamily: "inherit",
                fontSize: 20,
                marginLeft: "2rem",
                color: "gray",
              }}
            >
              contact@AfricaShiningFuel.ma
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Footer marginTop={"5rem"} />
    </div>
  );
}

export default ProduitNettoyage;
