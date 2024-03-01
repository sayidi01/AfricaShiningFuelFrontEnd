import React from "react";
import NavBar from "./NavBar";
import BackgroundImagee from "../src/david.jpeg";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Button from "@material-ui/core/Button";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import AddCardIcon from "@mui/icons-material/AddCard";
import NosServices from "../src/images/services.jpeg";
import Carousel from "../components/Carousel";

import Footer from "./Footer";
import Divider from "@mui/material/Divider";

function LandingPage() {
  return (
    <>
      <div>
        <NavBar />
        <Container
          style={{
            backgroundImage: `url(${BackgroundImagee})`,
            width: "100%",
            padding: "10rem 0",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maxWidth: "none",
          }}
        >
          <Box>
            <Box>
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                variant="h4"
              >
                <span style={{ color: "#659a9a" }}>PERFORMANCE</span>{" "}
                ÈNERGÉTIQUE,
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
                  service sur messure. Chez ASF , nous façonnons a l'avenir de
                  l'energie avec engagement, compétitivité et responsabilité
                  sociale.
                </Typography>
              </div>
              <Button
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
                  marginTop: "2rem",
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
            md={6}
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
                src="../src/images/station gaz.jpeg"
                alt="station"
              />
            </div>
          </Grid>
          <Grid  item sx={{ marginTop: { xs: 0, md: 12 },textAlign: { xs: 'center', md: 'left' } }} md={6}  >
            <Typography  
              style={{
                fontWeight: "inherit",
                fontFamily: "serif",
                fontSize: 32,
              }}
            >
              <span style={{ borderBottom: "4px solid" }}> QUI SOMME</span>S
              NOUS ?
            </Typography>

            <Typography  style={{ marginTop: "1rem" }} color={"gray"}>
              Avec une expérience inwi,
              <br />
              AFRICASHININGFUEL s'est établie comme un <br />
              leader incontesté dans le domaine des carburants
              <br /> au Maroc. Notre engagement envers la qualité et
              <br /> la fidélité de notre clientèle témoigne de notre
              <br /> excellence durable.
            </Typography>
            <div style={{ marginTop: "2rem" }}>
              <Button
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
        <div style={{ position: "relative" }}>
          {" "}
          <div
            style={{
              position: "absolute",
              top: 140,
              left: "50%",
              transform: "translateX(120%)",
            }}
          >
            {" "}
            <Typography
              style={{
                fontFamily: "sans-serif",
                fontWeight: "bold",
                fontSize: 30,
              }}
            >
              {" "}
              <span>NOS</span>{" "}
              <span style={{ borderBottom: "4px solid" }}>SERVICES</span>{" "}
            </Typography>{" "}
          </div>{" "}
        </div>{" "}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={300}
          marginTop={25}
        >
          <div
            style={{
              backgroundImage: `url(${NosServices})`,
              width: 1000,
              height: 293,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 1,
              backgroundColor: "rgba(0, 0, 0, .3)",
              backgroundBlendMode: "multiply",
              border: "2px solid black",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <div
              style={{
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: 24,
                textAlign: "end",
                color: "white",
                paddingRight: 10
              }}
            >
              <span>the </span>
              <span style={{ color: "#659a9a" }}> TFC card </span>
              <span>
                enables you to refuel <br />{" "}
              </span>
              <span>
                economically at up to 4,600 petrol stations <br />
              </span>
              <span>Our network covers</span>
              <span style={{ color: "#659a9a" }}>
                18 European countries <br />
              </span>
              <span> and continues o expand .</span>
            </div>
          </div>
        </Box>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent="center"
          alignItems="center"
          gap={4}
          marginTop={5}
        >
          <Button
            style={{
              backgroundColor: "#659a9a",
              color: "white ",
              textTransform: "capitalize",
              borderRadius: 25,
              fontSize: "15px",
              padding: "10px 80px",
            }}
          >
            Livraison
          </Button>
          <Button
            style={{
              backgroundColor: "black",
              color: "white ",
              textTransform: "capitalize",
              borderRadius: 25,
              fontSize: "15px",
              padding: "10px 80px",
            }}
          >
            Carte Carburant Toute Marque
          </Button>
          <Button
            style={{
              backgroundColor: "black",
              color: "white ",
              textTransform: "capitalize",
              borderRadius: 25,
              fontSize: "15px",
              padding: "10px 80px",
            }}
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
              <img
                src="../src/images/globe terrestre.png"
                alt="globe terrestre"
                width={90}
              />
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
                <Typography style={{ fontFamily: "Montserrat", width: "max-content" }}>
                  Villes au Maroc
                </Typography>
              </div>
            </div>
            <div style={{ alignItems: "center" }}>
              <img src="../src/images/stations2.png" width={90} />
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
                <Typography style={{ fontFamily: "Montserrat", width: "max-content" }}>B2B Affiliées</Typography>
              </div>
            </div>
            <div style={{ alignItems: "center" }}>
              <img src="../src/images/maps.png" width={90} />
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
                <Typography style={{ fontFamily: "Montserrat", width: "max-content" }}>
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
