import React from "react";
import NavBar from "./NavBar";
import { Container, Typography, Grid, Box, Stack } from "@mui/material";
import { Input, Button, ConfigProvider, Space } from "antd";
import { TinyColor } from "@ctrl/tinycolor";
import "../src/index.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const colors3 = ["#40e495", "#659a9a", "#2bb673"];
const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

function Shipping({codePostal}) {
    const navigate = useNavigate()

    
  return (
    <div>
      <NavBar />
      <Container sx={{ my: 8 }} maxWidth={"lg"} style={{ padding: "none" }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={12}>
            <Typography
              sx={{
                fontSize: { xs: 30, sm: 42 },
                color: "#659a9a",
                fontWeight: "bold",
              }}
            >
              <span style={{ borderBottom: "5px solid #659a9a" }}>VOTRE</span>{" "}
              COMMANDE
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Stack
              sx={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 10px 50px 1px",
                padding: {
                  xs: "0 5px",
                  md: "0 50px",
                },
              }}
              gap={5}
            >
              <Box
                sx={{
                  borderBottom: "2px solid  #659a9a ",
                }}
              >
                <Typography
                  sx={{ fontSize: { xs: 25, sm: 35 }, color: "#659a9a" }}
                >
                  Adresse Livraiosn
                </Typography>
              </Box>
              <Box
                display={{ xs: "block", sm: "flex" }}
                alignItems="center"
                justifyContent={"space-between"}
                marginBottom="3rem"
              >
                <Typography
                  style={{ color: "gray", fontFamily: "Delicatessen Script" }}
                  sx={{
                    fontSize: { xs: "19px", sm: "20px" },
                  }}
                >
                  Prénom *
                </Typography>
                <Input
                  style={{
                    width: "350px",
                    marginTop: 0,
                  }}
                />
              </Box>
              <Box
                display={{ xs: "block", sm: "flex" }}
                alignItems="center"
                justifyContent={"space-between"}
                marginBottom="3rem"
              >
                <Typography
                  style={{ color: "gray", fontFamily: "Delicatessen Script" }}
                  sx={{
                    fontSize: { xs: "19px", sm: "20px" },
                  }}
                >
                  Nom *
                </Typography>
                <Input
                  style={{
                    width: "350px",
                    marginTop: 0,
                  }}
                />
              </Box>
              <Box
                display={{ xs: "block", sm: "flex" }}
                alignItems="center"
                justifyContent={"space-between"}
                marginBottom="3rem"
              >
                <Typography
                  style={{ color: "gray", fontFamily: "Delicatessen Script" }}
                  sx={{
                    fontSize: { xs: "19px", sm: "20px" },
                  }}
                >
                  Adresse *
                </Typography>
                <Input
                  style={{
                    width: "350px",
                    marginTop: 0,
                  }}
                />
              </Box>
              <Box
                display={{ xs: "block", sm: "flex" }}
                alignItems="center"
                justifyContent={"space-between"}
                marginBottom="3rem"
              >
                <Typography
                  style={{ color: "gray", fontFamily: "Delicatessen Script" }}
                  sx={{
                    fontSize: { xs: "19px", sm: "20px" },
                  }}
                >
                  Ville *
                </Typography>
                <Input
                  style={{
                    width: "350px",
                    marginTop: 0,
                  }}
                />
              </Box>
              <Box
                display={{ xs: "block", sm: "flex" }}
                alignItems="center"
                justifyContent={"space-between"}
                marginBottom="3rem"
              >
                <Typography
                  style={{ color: "gray", fontFamily: "Delicatessen Script" }}
                  sx={{
                    fontSize: { xs: "19px", sm: "20px" },
                  }}
                >
                  Code Postal *
                </Typography>
                <Input
                  style={{
                    width: "350px",
                    marginTop: 0,
                  }}
                />
              </Box>
              <Box
                display={{ xs: "block", sm: "flex" }}
                alignItems="center"
                justifyContent={"space-between"}
                marginBottom="3rem"
              >
                <Typography
                  style={{ color: "gray", fontFamily: "Delicatessen Script" }}
                  sx={{
                    fontSize: { xs: "19px", sm: "20px" },
                  }}
                >
                  Télephone *
                </Typography>
                <Input
                  style={{
                    width: "350px",
                    marginTop: 0,
                  }}
                />
              </Box>

              <Button
                type="primary"
                style={{
                  backgroundColor: "#333",
                  color: "#fff",
                  borderRadius: "0",
                  width: 150,
                  height: 50,
                  fontSize: 18,
                  textTransform: "none",
                  margin: "auto",
                  display: "block",
                }}
              >
                SUIVANT
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack
              sx={{
                boxShadow:
                  "#659a9a 0px 0px 0px 2px, #659a9a 0px 4px 6px -1px,#659a9a 0px 1px 0px inset",
                alignItems: "center",
              }}
              gap={4}
            >
              <Space>
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        colorPrimary: `linear-gradient(116deg,  ${colors3.join(
                          ", "
                        )})`,
                        colorPrimaryHover: `linear-gradient(116deg, ${getHoverColors(
                          colors3
                        ).join(", ")})`,
                        colorPrimaryActive: `linear-gradient(116deg, ${getActiveColors(
                          colors3
                        ).join(", ")})`,
                        lineWidth: 0,
                      },
                    },
                  }}
                >
                  <Button
                    className="button-icons"
                    type="primary"
                    style={{
                      width: "300px",
                      height: "50px",
                      fontSize: 27,
                      marginTop: 5,
                    }}
                  >
                    Fuel oil n° 2
                  </Button>
                </ConfigProvider>
              </Space>
              <Box display={"flex"} flexDirection="column" gap={5}>
                <Box display={"flex"} gap={5}>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    11000 DH
                  </Typography>
                  <Typography variant="h6">TTC/Litre</Typography>
                </Box>
                <Box
                  sx={{
                    borderBottom: "3px solid #EEEEEE",
                    width: "80%",
                    margin: "0 auto",
                  }}
                />
                <Box display={"flex"} gap={2} alignItems="center">
                  <Typography variant="h6" sx={{ color: "#659a9a" }}>
                    Code postal :{" "}
                  </Typography>
                  <Typography variant="h6">{codePostal} </Typography>
                </Box>
                <Box display={"flex"} gap={2} alignItems="center">
                  <Typography variant="h6" sx={{ color: "#659a9a" }}>
                    Quantité :{" "}
                  </Typography>
                  <Typography variant="h6"> 1000 </Typography>
                </Box>
                <Box display={"flex"} gap={2} alignItems="center">
                  <Typography variant="h6" sx={{ color: "#659a9a" }}>
                    {" "}
                    Produit :{" "}
                  </Typography>
                  <Typography variant="h6"> Fuel oil n° 2 </Typography>
                </Box>
                <Box display={"flex"} gap={2} alignItems="center">
                  <Typography variant="h6" sx={{ color: "#659a9a" }}>
                    {" "}
                    Livraison :{" "}
                  </Typography>
                  <Typography variant="h6"> 5jours </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  borderBottom: "3px solid #EEEEEE",
                  width: "80%",
                  margin: "0 auto",
                }}
              />
              <Box gap={5}>
                <Typography variant="h6">TOTAL : </Typography>
                <div style={{ display: "flex", gap: 5 }}>
                  <Typography variant="h4" style={{ fontWeight: "bold" }}>
                    {" "}
                    13000 DH{" "}
                  </Typography>
                  <Typography variant="h6">TTC</Typography>
                </div>
              </Box>
              <Space>
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        colorPrimary: `linear-gradient(116deg,  ${colors3.join(
                          ", "
                        )})`,
                        colorPrimaryHover: `linear-gradient(116deg, ${getHoverColors(
                          colors3
                        ).join(", ")})`,
                        colorPrimaryActive: `linear-gradient(116deg, ${getActiveColors(
                          colors3
                        ).join(", ")})`,
                        lineWidth: 0,
                      },
                    },
                  }}
                >
                    
                  <Button
                  onClick={() => navigate("/order")}
                    className="button-icons"
                    type="primary"
                    style={{
                      width: "300px",
                      height: "50px",
                      fontSize: 27,
                      marginBottom: 5,
                    }}
                 
                  >
                   Modifier
                  </Button>
                 

                  
                </ConfigProvider>
              </Space>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </div>
  );
}

export default Shipping;
