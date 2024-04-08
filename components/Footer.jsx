import { Stack, Typography, Button, Box, Container } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import { Input } from "antd";
import { Grid } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../src/images/LOGO_AFRICA_SHINING.png";
import facebook from "../src/images/facebook.png";
import Linkedin from "../src/images/linkdin.png";
import X from "../src/images/X.png";
import telephone from "../src/images/telephone.png";
import Adresse from "../src/images/office-push-pin.png";
import Email from "../src/images/email.png";
import '../src/index.css'
const { TextArea } = Input;

function Footer({ marginTop }) {
  const navigate = useNavigate();
  return (
    <div>
      <Stack
        style={{
          backgroundColor: " rgba(235, 235, 235, 0.5)",
          paddingY: 10,
          marginTop: marginTop,
        }}
      >
        <Container maxWidth={"lg"}>
          <div
            style={{
              margin: "auto",
              width: "fit-content",
              textAlign: "center",
              marginTop: "3rem",
            }}
          >
            <Typography
              style={{
                fontWeight: "bolder",
                fontSize: 40,
                fontFamily: "Montserrat",
                lineHeight: 1.2,
              }}
            >
              Inscrivez-vous à notre Newsletter
            </Typography>
            <Typography
              marginTop={3}
              maxWidth={"50rem"}
              marginX={"auto"}
              style={{ fontFamily: "Montserrat" }}
            >
              Soyez toujours informé des dernières actualités, offres exclusives
              et événements. Inscrivez-vous pour rester connecté avec notre
              univers passionnant et recevoir en amont toutes les nouveautés.
            </Typography>
          </div>
          <Box
            style={{
              margin: "auto",
              textAlign: "center",
              display: "flex",
              marginTop: "4rem",
              gap: 6,
              justifyContent: "center",
            }}
          >
            <TextArea
              placeholder="Enter your email"
              style={{
                width: 500,
                height: 40,
                border: "1px solid",
                color: "black",
                borderRadius: 8,
                backgroundColor: "rgba(128, 128, 128, 0.5)",
              }}
            />
            <div style={{ margin: "24px 0" }} />
            <div style={{ margin: "50px 0" }} />
            <Button
              style={{
                backgroundColor: "black",
                color: "white",
                width: 150,
                height: 40,
                borderRadius: 8,
                textTransform: "none",
                fontWeight: "bolder",
              }}
            >
              Entrer
            </Button>
          </Box>
          <div>
           
            <Typography
            className="button"
              onClick={() => {
                navigate("/contacteznous");
                window.scrollTo({ top: 0, behavior: "instant" });
              }}
              style={{
                fontWeight: "bolder",
                fontFamily: "Montserrat",
                fontSize: 25,
                textAlign: "center",
              }}
            >
              Contactez-nous
            </Typography>
            <Divider
              variant="middle"
              sx={{
                height: 3,
                margin: "10px auto",
                backgroundColor: "black",
                width: "calc(100% - 1450px)",
                marginTop: 0.5,
              }}
            />
          </div>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            marginTop={5}
            flexWrap={"wrap"}
            rowGap={2}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#659a9a",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={telephone} width={30} />
              </div>
              <div style={{ marginLeft: 15 }}>
                <Typography style={{ fontFamily: "Montserrat", fontSize: 12 }}>
                  TÉLÉPHONE
                </Typography>
                <Typography style={{ fontSize: 13, fontFamily: "serif" }}>
                  (+212)0 700 738 084
                </Typography>
                <Typography style={{ fontSize: 13, fontFamily: "serif" }}>
                  J.M. Senhaji
                </Typography>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#659a9a",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={Adresse} width={30} />
              </div>
              <div style={{ marginLeft: 10 }}>
                <Typography style={{ fontFamily: "Montserrat", fontSize: 12 }}>
                  ADRESSE
                </Typography>
                <Typography style={{ fontSize: 13, fontFamily: "serif" }}>
                  CFC Anfa, Casablanca
                </Typography>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#659a9a",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={Email} width={30} />
              </div>
              <div style={{ marginLeft: 10 }}>
                <Typography style={{ fontFamily: "Montserrat", fontSize: 12 }}>
                  EMAIL
                </Typography>
                <a
                  href="https://mail.google.com/mail/u/0/?hl=fr&hl=fr#inbox?compose=new"
                  style={{ fontSize: 16, fontFamily: "serif" }}
                >
                  contact@AfricaShiningFuel.ma
                </a>
              </div>
            </div>
          </Stack>
          <Divider
            variant="middle"
            sx={{
              height: 1,
              margin: "10px auto",
              backgroundColor: "black",
              width: "calc(100% - 300px)",
              marginTop: 5,
            }}
          />

          <Grid container justifyContent={"space-between"} flexWrap={"wrap"}>
            <Grid
              item
              xs={12}
              md={3}
              textAlign={"center"}
              paddingY={5}
              style={{ marginBottom: "-50px" }}
            >
              <img src={Logo} alt="logo" width={250} />
            </Grid>
            <Grid
              item
              xs={12}
              md={9}
              sx={{ textAlign: "center", marginTop: 8 }}
            >
              <Grid
                container
                flexWrap={"wrap"}
                rowGap={1}
                // direction={{ xs: "column", sm: "row" }}
              >
                <Grid item xs={12} md={4} lg={3}>
                  <Typography
                    onClick={() => navigate("/gazoil")}
                    style={{ fontFamily: "Montserrat-sans serif" }}
                  >
                    Gasoil
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Typography
                    onClick={() => navigate("/BornesRecharge")}
                    style={{ fontFamily: "Montserrat-sans serif" }}
                  >
                    Bornes de Recharge
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Typography
                    onClick={() => navigate("/Fuel2")}
                    style={{ fontFamily: "Montserrat-sans serif" }}
                  >
                    Fuel oil n° 2
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Typography style={{ fontFamily: "Montserrat-sans serif" }}>
                    Mentions légales / CGU
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Typography style={{ fontFamily: "Montserrat-sans serif" }}>
                    Condition générales de vente
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Typography style={{ fontFamily: "Montserrat-sans serif" }}>
                    Politique de confidentialité
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Link
                    to={"/engagementrse"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography style={{ fontFamily: "Montserrat-sans serif" }}>
                      Environnement
                    </Typography>
                  </Link>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Link
                    to={"/engagementrse"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography style={{ fontFamily: "Montserrat-sans serif" }}>
                      Qui Sommes-nous ?
                    </Typography>
                  </Link>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Typography style={{ fontFamily: "Montserrat-sans serif" }}>
                    FAQ
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Typography
              style={{
                fontWeight: "bolder",
                fontFamily: "Montserrat",
                fontSize: 25,
                textAlign: "center",
                marginTop: '2rem'
              }}
            >
              SUIVEZ-NOUS
            </Typography>
          <Box display={"flex"} justifyContent={"space-between"} marginTop={5}>
            <a href="https://www.facebook.com/profile.php?id=61556572472998">
              <div>
                <img style={{ width: 40 }} src={facebook} />
              </div>
            </a>
            <a href="https://www.linkedin.com/company/101880850/admin/feed/posts/">
              <div>
                <img style={{ width: 40 }} src={Linkedin} />
              </div>
            </a>
            <a href="https://twitter.com/Africashiningfu">
              <div>
                <img style={{ width: 40 }} src={X} />
              </div>
            </a>
          </Box>
        </Container>
      </Stack>
    </div>
  );
}

export default Footer;
