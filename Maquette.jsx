import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Container, Typography, Grid, Box, Stack } from "@mui/material";
import { Input, Select, Radio, Button, ConfigProvider, Space } from "antd";
import { TinyColor } from "@ctrl/tinycolor";
import iconsCamion from "./src/images/icons-camion-c1.png";


import { useNavigate } from "react-router-dom";

import "./src/index.css";
import { axiosInstance } from "./src/api";


const colors3 = ["#40e495", "#659a9a", "#2bb673"];
const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

function Maquette() {
 
  const navigate = useNavigate();
  const [cities, setCities] = useState([]); // State to store city data
  const [selectedCityId, setSelectedCityId] = useState(""); // State to store selected city ID
  const [selectedCityName, setSelectedCityName] = useState(""); // State to store selected city name
  const [quantity, setQuantity] = useState(0); // Set quantity to 0 by default
  const [postalCodeDisabled, setPostalCodeDisabled] = useState(true);
  const [codePostal, setCodePostal] = useState(""); // State to store code postal value
  const [selectedProduct, setSelectedProduct] = useState(""); // State to store selected product label
  const [selectedDelivery, setSelectedDelivery] = useState("standard"); // Set default delivery to standard

  useEffect(() => {
    // Fetch city data from the backend endpoint
    axiosInstance
      .get("/prices")
      .then((response) => {
        console.log(response);
        setCities(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching city data:", error);
      });
  }, []);

  // Function to fetch postal code based on selected city
  const fetchPostalCode = (cityId) => {
    const selectedCity = cities.find((city) => city.id === cityId);
    if (selectedCity) {
      setCodePostal(selectedCity.code_postal);
    }
  };

  const handlePostalCodeChange = (e) => {
    setCodePostal(e.target.value);
  };

  const handleProductChange = (value, option) => {
    setSelectedProduct(option.label);
  };

  const calculatePrice = () => {
    // Do not calculate price if product is not selected
    if (!selectedProduct) return 0;
  
    let pricePerLitre = 11.05; // Default price per litre
  
    if (selectedCityId) {
      const selectedCity = cities.find((city) => city.id === selectedCityId);
      if (selectedCity) {
        pricePerLitre += parseFloat(selectedCity.price); // Add price per city to the default price per litre
      }
    }
  
    let totalPrice = pricePerLitre * quantity;
  
    if (selectedDelivery === "rapide") {
      totalPrice += 1000;
    } else if (selectedDelivery === "express") {
      totalPrice += 2500;
    }
  
    return totalPrice.toFixed(2);
  };
  const calculateTotal = () => {
    const totalPrice = parseFloat(calculatePrice()); // Convert totalPrice to a number
    return totalPrice.toFixed(2); // Returning total price with 2 decimal places
  };
  
  
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
                gap={12.5}
              >
                <Typography variant="body1"> Ville </Typography>
                <Select
                  showSearch
                  style={{ width: "25%" }}
                  placeholder="Sélectionnez une ville"
                  optionFilterProp="children"
                  onChange={(value, option) => {
                    setSelectedCityId(value);
                    setSelectedCityName(option.children);
                    setPostalCodeDisabled(false);
                    fetchPostalCode(value); // Fetch postal code when city is selected
                  }}
                  value={selectedCityId}
                >
                  {cities.map((city) => (
                    <Select.Option key={city.id} value={city.id}>
                      {city.city_name}
                    </Select.Option>
                  ))}
                </Select>
              </Box>
              <Box
                display={{ xs: "block", sm: "flex" }}
                alignItems="center"
                gap={4.5}
              >
                <Typography variant="body1">Code postal :</Typography>
                <Input
                  style={{ width: "25%", height: "40px" }}
                  disabled={postalCodeDisabled}
                  value={codePostal}
                  onChange={handlePostalCodeChange}
                />
              </Box>
              <Box
                display={{ xs: "block", sm: "flex" }}
                alignItems="center"
                gap={8}
              >
                <Typography variant="body1">Quantité:</Typography>
                <Input
                  type="number"
                  style={{ width: "25%", height: "40px" }}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <Typography variant="body1">Litres</Typography>
              </Box>
              <Box
                display={{ xs: "block", sm: "flex" }}
                alignItems="center"
                gap={9.8}
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
                      label: "DIESEL EXTRA 10 PPM  ",
                      solde: "11.05",
                    },
                  ]}
                  onChange={handleProductChange}
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
                  <Radio
                    style={{ fontSize: 18 }}
                    value="standard"
                    checked={selectedDelivery === "standard"}
                    onChange={(e) => setSelectedDelivery(e.target.value)}
                  >
                    Livraison Standard
                  </Radio>
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
                  <Radio
                    style={{ fontSize: 18 }}
                    value="rapide"
                    checked={selectedDelivery === "rapide"}
                    onChange={(e) => setSelectedDelivery(e.target.value)}
                  >
                    Livraison Rapide
                  </Radio>
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
                  <Radio
                    style={{ fontSize: 18 }}
                    value="express"
                    checked={selectedDelivery === "express"}
                    onChange={(e) => setSelectedDelivery(e.target.value)}
                  >
                    Livraison Express
                  </Radio>
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
              <Typography>*prix à titre indicatif</Typography>
              <Button
                onClick={() => navigate("/shipping")}
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
                    GAZOIL EXTRA 10 PPM
                  </Button>
                </ConfigProvider>
              </Space>
              <Box display={"flex"} flexDirection="column" gap={5}>
                <Box display={"flex"} gap={5}>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    {calculatePrice()} DH
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
                  <Typography variant="h6"> {codePostal} </Typography>
                 
                </Box>
                <Box display={"flex"} gap={2} alignItems="center">
                  <Typography variant="h6" sx={{ color: "#659a9a" }}>
                    Quantité :{" "}
                  </Typography>
                  <Typography variant="h6"> {quantity} </Typography>
                </Box>
                <Box display={"flex"} gap={2} alignItems="center">
                  <Typography variant="h6" sx={{ color: "#659a9a" }}>
                    {" "}
                    Produit :{" "}
                  </Typography>
                  <Typography variant="h6"> {selectedProduct} </Typography>
                </Box>
                <Box display={"flex"} gap={2} alignItems="center">
                  <Typography variant="h6" sx={{ color: "#659a9a" }}>
                    {" "}
                    Livraison :{" "}
                  </Typography>
                  <Typography variant="h6"> {selectedDelivery}</Typography>
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
                    {calculateTotal()} DH
                  </Typography>
                  <Typography variant="h6">TTC</Typography>
                </div>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Footer marginTop={"3rem"} />
    </div>
  );
}

export default Maquette;
