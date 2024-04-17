import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Container, Typography, Grid, Box, Stack } from "@mui/material";
import { Input, Select, Radio, Button, ConfigProvider, Space } from "antd";
import { TinyColor } from "@ctrl/tinycolor";
import iconsCamion from "./src/images/icons-camion-c1.png";
import iconsFioul from "./src/images/icons-fioul-v.png";
import "./src/index.css"
const colors3 = ["#40e495", "#659a9a", "#2bb673"];
const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());
function Maquette() {
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
                  VOTRE COMMANDE EN LIGNE
                </Typography>
              </Box>
              <Box
                display={{ xs: "block", sm: "flex" }}
                alignItems="center"
                gap={4}
              >
                <Typography variant="body1">Code postal :</Typography>
                <Input style={{ width: "25%", height: "40px" }} />
              </Box>
              <Box
                display={{ xs: "block", sm: "flex" }}
                alignItems="center"
                gap={7.5}
              >
                <Typography variant="body1">Quantité:</Typography>
                <Input style={{ width: "25%", height: "40px" }} />
                <Typography variant="body1">Litres</Typography>
              </Box>
              <Box
                display={{ xs: "block", sm: "flex" }}
                alignItems="center"
                gap={9.5}
              >
                <Typography variant="body1"> produit </Typography>
                <Select
                  showSearch
                  style={{
                    width: "25%",
                  }}
                  placeholder="Sélectionnez un produit "
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={[
                    {
                      value: "1",
                      label: "Fuel oil n° 2 ",
                    },
                   
                  ]}
                />
              </Box>
              <Box
                sx={{
                  borderBottom: "2px solid  #659a9a ",
                }}
              >
                <Typography
                  sx={{ fontSize: { xs: 25, sm: 35 }, color: "#659a9a" }}
                >
                  CHOISIR TYPE LIVRAISON
                </Typography>
              </Box>
              <Stack spacing={5}>
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  gap={7}
                  style={{
                    borderRadius: "2rem",
                    border: "1px solid black",
                  }}
                >
                  <Radio style={{ fontSize: 18 }}>Livraison Standard</Radio>
                  <Typography> Sous 5 jour(s) </Typography>
                  <div style={{ display: { xs: "none", md: "block" } }}>
                    <img src={iconsCamion} alt="camion" width={60} />
                  </div>
                </Box>
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  gap={7}
                  style={{
                    borderRadius: "2rem",
                    border: "1px solid black",
                  }}
                >
                  <Radio style={{ fontSize: 18 }}>Livraison Rapide</Radio>
                  <Typography> Sous 3 jour(s) </Typography>
                  <div style={{ display: { xs: "none", md: "block" } }}>
                    <img src={iconsCamion} alt="camion" width={60} />
                  </div>
                </Box>
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  gap={7}
                  style={{
                    borderRadius: "2rem",
                    border: "1px solid black",
                  }}
                >
                  <Radio style={{ fontSize: 18 }}>Livraison Express</Radio>
                  <Typography> Sous 1 jour(s) </Typography>
                  <div style={{ display: { xs: "none", md: "block" } }}>
                    <img src={iconsCamion} alt="camion" width={60} />
                  </div>
                </Box>
              </Stack>
              <Box sx={{ backgroundColor: "cornsilk" }}>
                <Typography>
                  <span style={{ color: "red" }}> ATTENTION </span> : En
                  livraison Express, toutes les commandes passées après 15h
                  seront traitées sous 2 jours ouvrés !
                </Typography>
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
                  fontFamily: "Montserrat",
                  textTransform: "none",
                  margin: "auto",
                  display: "block",
                }}
              >
                continuer
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack
              sx={{
                boxShadow:
                  "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
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
                  <Typography variant="h6"> 33000 </Typography>
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
                  <Typography variant="h6"> Fioul Superieur </Typography>
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
                  <Typography variant="h4" style={{fontWeight: 'bold'}}> 13000 DH </Typography>
                  <Typography variant="h6">TTC</Typography>
                </div>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Maquette;
