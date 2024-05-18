import { Container, Grid, Typography, Box } from "@mui/material";
import React, { useState, useCallback, useContext, useEffect } from "react";
import { Button, Input } from "antd";
import Footer from "../components/Footer";
import { axiosInstance } from "../src/api";
import UserContext from "../context/userContext";
import { toast } from "react-hot-toast";

function CarnetAdresse() {
  const { setData, setisConnected, data, isConnected } =
    useContext(UserContext);
  

  const [isEditMode, setIsEditMode] = useState(false);

  const [carnetDadresse, setCarnetDadresse] = useState({
    first_name: "",
    last_name: "",
    telephone: "",
    adresse: "",
    ville: "",
    codePostal: "",
  });
  console.log(carnetDadresse);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarnetDadresse((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateData = useCallback(() => {
    console.log(carnetDadresse);
    axiosInstance
      .put("/customer/fioul/edit", { ...carnetDadresse })
      .then(({ data }) => {
        console.log(data);
        toast.success("vos informations sont modifier et sauvgarder");
        setData(data.data);
        setIsEditMode(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("vous avez un erreur dans votre mise a jour ");
      });
  }, [carnetDadresse, data]);

  return (
    <div>
      <Container sx={{ my: 8 }} maxWidth={"lg"} style={{ padding: "none" }}>
        {isEditMode ? (
          <Grid
            container
            sx={{
              boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
              padding: {
                xs: "0 15px",
                md: "0 70px",
              },
            }}
          >
            <Grid item xs={12} md={12}>
              <Typography
                sx={{
                  fontSize: {
                    xs: 20,
                    md: 25,
                    borderBottom: "2px solid #e94d40",
                    color: "#e94d40",
                  },
                }}
              >
                CARNET D'ADRESSES
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ fontSize: { xs: 18, md: 22 }, paddingTop: 3 }}>
                informations de contact
              </Typography>
              <Box
                sx={{
                  display: { xs: "block", md: "flex" },
                  paddingTop: 4,
                  justifyContent: "space-around",
                }}
              >
                <Typography sx={{ fontSize: 20 }}>Prénom *</Typography>
                <Input
                  name="first_name"
                  onChange={handleInputChange}
                  style={{ width: "60%" }}
                  variant="filled"
                />
              </Box>
              <Box
                sx={{
                  display: { xs: "block", md: "flex" },
                  paddingTop: 4,
                  justifyContent: "space-around",
                }}
                gap={4}
              >
                <Typography sx={{ fontSize: 20 }}>Nom *</Typography>
                <Input
                  name="last_name"
                  onChange={handleInputChange}
                  style={{ width: "60%" }}
                  variant="filled"
                />
              </Box>
              <Box
                sx={{
                  display: { xs: "block", md: "flex" },
                  paddingTop: 4,
                  justifyContent: "space-around",
                }}
              >
                <Typography sx={{ fontSize: 20 }}>Téléphone *</Typography>
                <Input
                  name="telephone"
                  onChange={handleInputChange}
                  style={{ width: "60%" }}
                  variant="filled"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ fontSize: { xs: 18, md: 22 }, paddingTop: 3 }}>
                Adresse{" "}
              </Typography>
              <Box
                sx={{
                  display: { xs: "block", md: "flex" },
                  paddingTop: 4,
                  justifyContent: "space-around",
                }}
              >
                <Typography sx={{ fontSize: 20 }}>Adresse *</Typography>
                <Input
                  name="adresse"
                  onChange={handleInputChange}
                  style={{ width: "60%" }}
                  variant="filled"
                />
              </Box>
              <Box
                sx={{
                  display: { xs: "block", md: "flex" },
                  paddingTop: 4,
                  justifyContent: "space-around",
                  gap: 10,
                }}
              >
                <Typography sx={{ fontSize: 20 }}></Typography>
                <Input style={{ width: "60%" }} variant="filled" />
              </Box>
              <Box
                sx={{
                  display: { xs: "block", md: "flex" },
                  paddingTop: 4,
                  justifyContent: "space-around",
                  gap: 6,
                }}
              >
                <Typography sx={{ fontSize: 20 }}>Ville*</Typography>
                <Input
                  name="ville"
                  onChange={handleInputChange}
                  style={{ width: "60%" }}
                  variant="filled"
                />
              </Box>
              <Box
                sx={{
                  display: { xs: "block", md: "flex" },
                  paddingTop: 4,
                  justifyContent: "space-around",
                }}
              >
                <Typography sx={{ fontSize: 20 }}>Code Postal *</Typography>
                <Input
                  name="codePostal"
                  onChange={handleInputChange}
                  style={{ width: "60%" }}
                  variant="filled"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={12} sx={{ paddingY: 3 }}>
              <Button
                onClick={updateData}
                style={{
                  backgroundColor: "gray",
                  fontWeight: "bold",
                  height: 40,
                  fontSize: 18,
                  color: "white",
                }}
              >
                Sauvgarder
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid Container>
            <Grid item xs={12} md={12}>
              <Typography
                sx={{
                  fontSize: {
                    xs: 20,
                    md: 25,
                    borderBottom: "2px solid #e94d40",
                    color: "#e94d40",
                  },
                }}
              >
                CARNET D'ADRESSES
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 22 },
                  paddingTop: 3,
                  fontWeight: "bold",
                }}
              >
                ADRESSE DE LIVRASION
              </Typography>
              <Box
                sx={{
                  paddingTop: 4,
                }}
              >
                <Typography sx={{ fontSize: 20 }}>
                  Prénom : {data.first_name}
                </Typography>
                <Typography sx={{ fontSize: 20, paddingTop: 2 }}>
                  Nom: {data.last_name}
                </Typography>
                <Typography sx={{ fontSize: 20, paddingTop: 2 }}>
                  Téléphone: {data.telephone}
                </Typography>
                <Typography sx={{ fontSize: 20, paddingTop: 2 }}>
                  Adresse: {data.adresse}
                </Typography>
                <Typography sx={{ fontSize: 20, paddingTop: 2 }}>
                  Ville: {data.ville}
                </Typography>
                <Typography sx={{ fontSize: 20, paddingTop: 2 }}>
                  Code Postal: {data.codePostal}
                </Typography>
              </Box>
              <Grid item xs={12} md={12} sx={{ paddingY: 3 }}>
                <Button
                  onClick={handleEdit}
                  style={{
                    backgroundColor: "gray",
                    fontWeight: "bold",
                    height: 40,
                    fontSize: 18,
                    color: "white",
                  }}
                >
                  Èditer
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{ borderBottom: "2px solid #e94d40", paddingTop: 2 }}
            ></Box>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 22 },
                  paddingTop: 3,
                  fontWeight: "bold",
                }}
              >
                ADRESSE DE FACTURATION
              </Typography>
              <Box
                sx={{
                  paddingTop: 4,
                }}
              >
                <Typography sx={{ fontSize: 20 }}>
                  Prénom : {data.first_name}
                </Typography>
                <Typography sx={{ fontSize: 20, paddingTop: 2 }}>
                  Nom: {data.last_name}
                </Typography>
                <Typography sx={{ fontSize: 20, paddingTop: 2 }}>
                  Téléphone: {data.telephone}
                </Typography>
                <Typography sx={{ fontSize: 20, paddingTop: 2 }}>
                  Adresse: {data.adresse}
                </Typography>
                <Typography sx={{ fontSize: 20, paddingTop: 2 }}>
                  Ville: {data.ville}
                </Typography>
                <Typography sx={{ fontSize: 20, paddingTop: 2 }}>
                  Code Postal: {data.codePostal}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} sx={{ paddingY: 3 }}>
              <Button
                onClick={handleEdit}
                style={{
                  backgroundColor: "gray",
                  fontWeight: "bold",
                  height: 40,
                  fontSize: 18,
                  color: "white",
                }}
              >
                Éditer
              </Button>
            </Grid>
          </Grid>
        )}
        <Footer marginTop={"5rem"} />
      </Container>
    </div>
  );
}

export default CarnetAdresse;
