import React from "react";
import NavBar from "./NavBar";
import BackgroundImagee from "../src/images/david.jpeg";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import AddCardIcon from "@mui/icons-material/AddCard";
import Carousel from "../components/Carousel";
import SliderLandingPage from "./SliderLandingPage";
import Footer from "./Footer";
import Divider from "@mui/material/Divider";
import station from "../src/images/station gaz.jpeg";
import { useNavigate } from "react-router-dom";
import globeTerestre from "../src/images/globe terrestre.png";
import stations2 from "../src/images/globe terrestre.png";
import maps from "../src/images/maps.png";
import SliderNosServices from "./SliderNosServices";
import { isProd } from "../src/config";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <NavBar />
        <Container
          style={{
            backgroundImage: `url(${BackgroundImagee})`,
            width: "100%",
            padding: "0rem 0",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maxWidth: "none",
            backgroundAttachment: "fixed",
          }}
        >
          <SliderLandingPage />
          <Box>
            <Box sx={{ marginTop: { xs: "1rem", sm: "1rem" } }}>
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                variant="h4"
              >
                <span style={{ color: "#659a9a" }}>PERFORMANCE</span>{" "}
                ÉNERGÉTIQUE,
              </Typography>
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                variant="h4"
              >
                Optez pour{" "}
                <span style={{ color: "#659a9a", fontWeight: "bolder" }}>
                  ASF
                </span>
              </Typography>
              <div style={{ margin: "1rem auto" }}>
                <Typography
                  variant="body1"
                  style={{
                    color: "#659a9a",
                    fontFamily: "Montserrat",
                    fontSize: "15px",
                    textAlign: "center",
                    maxWidth: "40rem",
                    margin: "auto",
                  }}
                >
                  Découvrez une gamme compléte de carburants , lubrifiants et
                  service sur messure. Chez{" "}
                  <span style={{ fontWeight: "bold" }}>ASF</span>, nous
                  façonnons  l'avenir de l'energie avec engagement,
                  compétitivité et responsabilité sociale.
                </Typography>
              </div>
              <Button
              onClick={() => navigate("/quisommesnous")}
                variant="contained"
                color="primary"
                size="large"
                style={{
                  borderRadius: "25px",
                  textTransform: "none",
                  padding: "10px 40px",
                  fontSize: "15px",
                  backgroundColor: "black",
                  display: "block",
                  margin: "0 auto",
                  marginTop: "5rem",
                  marginBottom: "7rem",
                }}
              >
                Découvrir
              </Button>
              <Stack
                direction={"row"}
                spacing={5}
                marginTop={5}
                justifyContent="center"
                style={{ textTransform: "capitalize" }}
              >
                <Button
                  onClick={() => navigate("/gazoil")}
                  startIcon={<LocalGasStationIcon />}
                  style={{
                    backgroundColor: "#659a9a",
                    color: "white",
                    borderRadius: "9px",
                    position: "relative",
                    top: "30px 10px",
                    rotate: "-9.96deg",
                    width: "250px",
                    height: "60px",
                    marginRight: "50px",
                    textTransform: "capitalize",
                  }}
                >
                  Carburant Gasoil{" "}
                </Button>
                <Button
                  onClick={() => navigate("/cartecarburant")}
                  startIcon={<AddCardIcon />}
                  style={{
                    backgroundColor: "#659a9a",
                    color: "white",
                    borderRadius: "9px",
                    position: "relative",
                    top: "30px 10px",
                    rotate: "-9.96deg",
                    width: "250px",
                    height: "60px",
                    textTransform: "capitalize",
                  }}
                >
                  {" "}
                  Carte Carburant{" "}
                </Button>
              </Stack>
              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  onClick={() => navigate("/livraison")}
                  startIcon={<DepartureBoardIcon />}
                  style={{
                    backgroundColor: "#659a9a",
                    color: "white",
                    borderRadius: "9px",
                    position: "relative",
                    top: "30px 10px",
                    width: "150px",
                    height: "50px",
                    textTransform: "capitalize",
                    marginBottom: 40,
                  }}
                >
                  {" "}
                  Livraison
                </Button>
              </div>
            </Box>
          </Box>
        </Container>
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: "40px",
            marginTop: "4rem",
          }}
        >
          NOS ACTIVITÉS
        </Typography>
        <Box marginTop={3}>
          <Typography
            style={{
              color: "grey",
              fontFamily: "Montserrat",
              fontSize: "15px",
              textAlign: "center",
              maxWidth: "40rem",
              margin: "auto",
            }}
          >
            Explorez nos activités énergétiques sur mesure chez ASF. Des
            carburants de qualité aux solutions innovantes, nous adaptons nos
            services aux besoins spécifiques des entreprises de transport,
            carrières et usines. Choisissez l'énergie qui va au-delà du
            réservoir, avec ASF à vos côtés.
          </Typography>
        </Box>
        <Carousel />
        <Divider
          variant="middle"
          sx={{
            height: 10,
            margin: "10px auto",
            backgroundColor: "rgba(101, 154, 154, 0.3)",
            borderRadius: 2,
            marginTop: 20,
            width: "calc(100% - 800px)",
          }}
        />
        ;
        <Grid
          container
          spacing={2}
          marginTop={{ xs: -3, md: 10 }}
          sx={{
            justifyContent: "center",
          }}
        >
          <Grid
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
            item
            xs={0}
            md={5}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <img
                style={{ borderRadius: 10, width: 300, height: 520 }}
                src={station}
                alt="station"
              />
            </div>
          </Grid>
          <Grid
            item
            sx={{
              marginTop: { xs: 0, md: 12 },
              textAlign: { xs: "center", md: "left" },
            }}
            md={5}
          >
            <Typography
              style={{
                fontWeight: "inherit",
                fontFamily: "serif",
                fontSize: 32,
              }}
            >
                QUI SOMMES-NOUS ?
            </Typography>

            <Typography style={{ marginTop: "1rem" }} color={"gray"}>
              Chez <span style={{fontWeight: 'bold'}}> Africa Shining Fuel </span>, notre histoire est celle d'une
              entreprise familiale née de la passion pour l'innovation
              énergétique et le service client de qualité. Fondée en 2019, notre
              entreprise s'est rapidement affirmée comme un acteur majeur du
              secteur de la distribution de carburants, en offrant des solutions
              énergétiques fiables et responsables à nos clients.
            </Typography>
            <div style={{ marginTop: "2rem" }}>
              <Button
                onClick={() => navigate("/quisommesnous")}
                style={{
                  backgroundColor: "black",
                  color: "white ",
                  textTransform: "capitalize",
                  borderRadius: 25,
                  fontSize: "15px",
                  padding: "10px 40px",
                }}
              >
                Découvrir
              </Button>
            </div>
          </Grid>
        </Grid>
        <Box
          sx={{
            position: "relative",
            width: "80%",
            marginTop: { xs: "1rem", sm: "0rem" },
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Motserrat",
              fontSize: 32,
              position: "absolute",
              bottom: 0,
              top: { xs: 20, sm: 70 },
              right: 0,
            }}
          >
            NOS SERVICES
          </Typography>
        </Box>
        <SliderNosServices />
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent="center"
          alignItems="center"
          gap={4}
          marginTop={8}
        >
          <Button
            onClick={() => navigate("/livraison")}
            style={{
              backgroundColor: "#659a9a",
              color: "white ",
              textTransform: "capitalize",
              borderRadius: 25,
              fontSize: "15px",
              padding: "10px 80px",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={() => {
              document.getElementById(" Livraison").style.backgroundColor =
                "black";
            }}
            onMouseLeave={() => {
              document.getElementById(" Livraison").style.backgroundColor =
                "#659a9a";
            }}
            id=" Livraison"
          >
            Livraison
          </Button>
          <Button
            onClick={() => navigate("/cartecarburant")}
            style={{
              backgroundColor: "black",
              color: "white ",
              textTransform: "capitalize",
              borderRadius: 25,
              fontSize: "15px",
              padding: "10px 50px",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={() => {
              document.getElementById(
                "Carte Carburant toute marque ASF"
              ).style.backgroundColor = "#659a9a";
            }}
            onMouseLeave={() => {
              document.getElementById(
                "Carte Carburant toute marque ASF"
              ).style.backgroundColor = "black";
            }}
            id="Carte Carburant toute marque ASF"
          >
            Carte Carburant toute marque ASF
          </Button>
          <Button
            style={{
              backgroundColor: "black",
              color: "white ",
              textTransform: "capitalize",
              borderRadius: 25,
              fontSize: "15px",
              padding: "10px 80px",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={() => {
              document.getElementById(
                "abonnement telebadge"
              ).style.backgroundColor = "#659a9a";
            }}
            onMouseLeave={() => {
              document.getElementById(
                "abonnement telebadge"
              ).style.backgroundColor = "black";
            }}
            id="abonnement telebadge"
          >
            Abonnement Télébadge
          </Button>
        </Stack>
        <Container maxWidth="lg">
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            marginTop={5}
            borderTop={"1px solid grey"}
            borderBottom={"1px solid grey"}
            padding={5}
            flexWrap={"wrap"}
          >
            <div style={{ alignItems: "center" }}>
              <img src={globeTerestre} alt="globe terrestre" width={90} />
              <div style={{ marginLeft: "1rem" }}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    fontFamily: "sans-serif",
                  }}
                >
                  18 +
                </Typography>
                <Typography
                  style={{ fontFamily: "Montserrat", width: "max-content" }}
                >
                  Villes au Maroc
                </Typography>
              </div>
            </div>
            <div style={{ alignItems: "center" }}>
              <img src={stations2} width={90} />
              <div style={{ marginLeft: "1rem" }}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    fontFamily: "sans-serif",
                  }}
                >
                  60 +
                </Typography>
                <Typography
                  style={{ fontFamily: "Montserrat", width: "max-content" }}
                >
                  B2B Affiliées
                </Typography>
              </div>
            </div>
            <div style={{ alignItems: "center" }}>
              <img src={maps} width={90} />
              <div style={{ marginLeft: "2rem" }}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    fontFamily: "sans-serif",
                  }}
                >
                  3
                </Typography>
                <Typography
                  style={{ fontFamily: "Montserrat", width: "max-content" }}
                >
                  Bureaux au Maroc
                </Typography>
              </div>
            </div>
          </Stack>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
