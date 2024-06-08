import React, { useState, useEffect, useContext } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {
  Container,
  Typography,
  Grid,
  Box,
  Stack,
  CircularProgress,
} from "@mui/material";
import { Input, Select, Radio, Button, ConfigProvider, Space } from "antd";
import { TinyColor } from "@ctrl/tinycolor";
import iconsCamion from "../src/images/icons-camion-c1.png";
import ModalSigninSignup from "./ModalSigninsignUp";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

import "../src/index.css";
import { axiosInstance } from "../src/api";
import UserContext from "../context/userContext";

const colors3 = ["#40e495", "#659a9a", "#2bb673"];
const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

function Maquette() {
  const { isConnected } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [cities, setCities] = useState("idle"); // State to store city data
  const [allProducts, setAllProducts] = useState([]);

  const [selectedCityId, setSelectedCityId] = useState(""); // State to store selected city ID
  const [selectedCityName, setSelectedCityName] = useState(""); // State to store selected city name
  const [quantity, setQuantity] = useState(0); // Set quantity to 0 by default
  const [postalCodeDisabled, setPostalCodeDisabled] = useState(true);
  const [codePostal, setCodePostal] = useState(""); // State to store code postal value
  const [selectedProduct, setSelectedProduct] = useState(""); // State to store selected product label
  const [pricePerLitre, setPricePerLitre] = useState(""); // State to store selected product label
  const [selectedDelivery, setSelectedDelivery] = useState("standard");
  const [fuelPrice, setFuelPrice] = useState(6.8);

  const location = useLocation();

  useEffect(() => {
    const getParamsFromURL = () => {
      const searchParams = new URLSearchParams(location.search);
      const queryParams = {};
      for (const param of searchParams.entries()) {
        queryParams[param[0]] = param[1];
      }
      return queryParams;
    };

    const existingData = getParamsFromURL();

    if (Object.keys(existingData).length == 0) return;

    console.log(existingData.quantity);
    if (existingData.codePostal) setCodePostal(existingData.codePostal);
    if (existingData.quantity) setQuantity(existingData.quantity);
    if (existingData.selectedProduct)
      setSelectedProduct(existingData.selectedProduct);
    if (existingData.selectedDelivery)
      setSelectedDelivery(existingData.selectedDelivery);
    if (existingData.city) setSelectedCityId(Number(existingData.city));
    if (existingData.pricePerLitre)
      setPricePerLitre(Number(existingData.pricePerLitre));

    console.log(existingData);
  }, []);

  const onSignIn = () => {
    if (
      !selectedCityId ||
      !quantity ||
      !selectedProduct ||
      !selectedDelivery ||
      !pricePerLitre ||
      codePostal.length === 0
    ) {
      toast.error("Veuillez remplir tous les champs obligatoires !");
      return;
    }

    if (!isConnected) {
      const total = calculateTotal();
      const price = calculatePrice();

      const url = `/order?codePostal=${codePostal}&quantity=${quantity}&selectedProduct=${selectedProduct}&selectedDelivery=${selectedDelivery}&calculateTotal=${total}&calculatePrice=${price}&city=${selectedCityId}&pricePerLitre=${pricePerLitre}`;
      navigate(url);

      setShowModal(true);
      return;
    }

    navigateToShipping();
  };

  const navigateToShipping = () => {
    const total = calculateTotal();
    const price = calculatePrice();

    const url = `/shipping?codePostal=${codePostal}&quantity=${quantity}&selectedProduct=${selectedProduct}&selectedDelivery=${selectedDelivery}&calculateTotal=${total}&calculatePrice=${price}&city=${selectedCityId}&pricePerLitre=${pricePerLitre}`;
    navigate(url);
  };

  // Set default delivery to standard

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

  useEffect(() => {
    // Fetch products data from the backend endpoint
    axiosInstance
      .get("/products")
      .then(({ data }) => {
        console.log(data);
        const responseProducts = data.data;
        if (Array.isArray(responseProducts)) {
          setAllProducts(responseProducts);
        } else {
          toast.error("Failed to retrieve products, please try again");
        }
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
    console.log(value, option);
    setSelectedProduct(option.label);
    setPricePerLitre(option.solde);
  };

  const calculatePrice = () => {
    // Do not calculate price if product is not selected
    if (!selectedProduct) return 0;

    let finalPrice = pricePerLitre
    if (selectedCityId) {
      const selectedCity = cities.find((city) => city.id === selectedCityId);
      if (selectedCity) {
        console.log(selectedCity.price);
        finalPrice += parseFloat(selectedCity.price); // Add price per city to the default price per litre
      } else return "City not found";
    }

    let totalPrice = finalPrice * quantity;

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

  if (cities == "idle") return <CircularProgress />;

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
                  required
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
                  required
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
                  required
                  filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={allProducts.map((prod) => ({
                    value: prod.name,
                    label: prod.name,
                    solde: prod.price,
                  }))}
                  onChange={handleProductChange}
                  value={selectedProduct}
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
                    name="deliveryType"
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
                    name="deliveryType"
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
                    name="deliveryType"
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
                onClick={onSignIn}
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
                    {selectedProduct
                      ? selectedProduct
                      : "Sélectionner un produit"}
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
      {showModal && (
        <ModalSigninSignup
          onClose={() => setShowModal(false)}
          onSignIn={() => {
            setShowModal(false);
            navigateToShipping();
          }}
        />
      )}
    </div>
  );
}

export default Maquette;
