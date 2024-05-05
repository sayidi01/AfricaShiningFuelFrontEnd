import { Container, Grid, Typography, Box } from "@mui/material";
import React, { useState, useCallback } from "react";
import { Button, Input } from "antd";
import Footer from "./Footer";
import { axiosInstance } from "../src/api";
import UserContext from "../context/userContext";
import { toast } from "react-hot-toast";


function CarnetAdresse() {

  const [carnetDadresse, setCarnetDadresse] = useState({
    prenom: "",
    nom : "",
    telephone:"",
    adresse:"",
    ville: "",
    codePostal: "",

  })

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setCarnetDadresse((prev) => ({
      ...prev,
      [name]: value,
    }));

  }

  const updateData = useCallback(() => {
    axiosInstance
    .put("/customer/fioul/edit", )
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
  })
  return (
    <div>
      <Container sx={{ my: 8 }} maxWidth={"lg"} style={{ padding: "none" }}>
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
              <Input name="prenom" onChange={handleInputChange} style={{ width: "60%" }} variant="filled" />
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
              <Input name="nom" onChange={handleInputChange}style={{ width: "60%" }} variant="filled" />
            </Box>
            <Box
              sx={{
                display: { xs: "block", md: "flex" },
                paddingTop: 4,
                justifyContent: "space-around",
              }}
            >
              <Typography sx={{ fontSize: 20 }}>Téléphone *</Typography>
              <Input name="telephone" onChange={handleInputChange}style={{ width: "60%" }} variant="filled" />
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
              <Input name="adresse" onChange={handleInputChange} style={{ width: "60%" }} variant="filled" />
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
              <Input name="ville"  onChange={handleInputChange}style={{ width: "60%" }} variant="filled" />
            </Box>
            <Box
              sx={{
                display: { xs: "block", md: "flex" },
                paddingTop: 4,
                justifyContent: "space-around",
              }}
            >
              <Typography sx={{ fontSize: 20 }}>Code Postal *</Typography>
              <Input name="codePostal" onChange={handleInputChange} style={{ width: "60%" }} variant="filled" />
            </Box>
          </Grid>
          <Grid item xs={12} md={12} sx={{ paddingTop: 3}}>
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
      </Container>
    </div>
    
  );
}

export default CarnetAdresse;
