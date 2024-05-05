import React, { useState } from "react";
import NavBar from "./NavBar";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import flameFioul from "../src/images/flame_fioul.png";
import iconsBois from "../src/images/icons_bois.png";
import iconsElectrecite from "../src/images/icons_electrecite.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CARNETADRESSE from "../components/CarnetAdresse"
import TableauBord from "../components/TableauBord"
import MesCommandes from "./MesCommandes";
import InformationsCompte from "./InformationsCompte";

function AccountCustomer() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabChange = (newValue) => {
    setValue(newValue);
  };

  
  return (
    <div>
      <NavBar />
      <Container sx={{ my: 8 }} maxWidth={"lg"} style={{ padding: "none" }}>
        <Grid item xs={12} md={12}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: 32, md: 40 },
              color: "#659a9a",
            }}
          >
            <span style={{ borderBottom: "5px solid #659a9a" }}>MON</span>{" "}
            COMPTE
          </Typography>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 32, md: 41 },
                fontWeight: "bold",
                color: "#DDDDDD",
                paddingTop: 8,
                justifyContent: "flex-end",
                display: "flex",
              }}
            >
              ESPACE CLIENT
            </Typography>
          </Box>
          <Box
            sx={{
              paddingTop: 5,
              display: "flex",
              justifyContent: { xs: "center", md: "space-around" },
              flexDirection: {xs: "column", md: "row"},
              alignItems: "center",
              gap: { xs: 3, md: 0 },
            }}
          >
            <Button
              sx={{
                fontSize: { xs: 18, md: 25, backgroundColor: "#E72929" },
                whiteSpace: "nowrap",
                color: "white",
                alignItems: "center",
                width: { xs: "100%", md: "auto" },
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#FFC100",
                },
              }}
              endIcon={<img src={flameFioul} alt="icons fioul" width={50} />}
            >
              ESPACE FIOUL
            </Button>
            <Button
              endIcon={<img src={iconsBois} alt="icons fioul" width={50} />}
              variant="contained"
              sx={{
                fontSize: { xs: 18, md: 25, backgroundColor: "#FF8A08" },
                whiteSpace: "nowrap",
                alignItems: "center",
                width: { xs: "100%", md: "auto" },
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#DC6B19",
                },
              }}
            >
              ESPACE GRANULÉS DE BOIS
            </Button>
            <Button
              endIcon={
                <img src={iconsElectrecite} alt="icons fioul" width={50} />
              }
              variant="contained"
              sx={{
                fontSize: { xs: 18, md: 25, backgroundColor: "#378CE7" },
                whiteSpace: "nowrap",
                alignItems: "center",
                width: { xs: "100%", md: "auto" },
                fontWeight: "bold",
              }}
            >
              ESPACE GAZ & ÉLECTRICITÉ
            </Button>
          </Box>
          <Box
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              display: "flex",
              justifyContent: "center",
              paddingTop: 10

            }}

          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons={false}
              sx={{
                // Supprimer la couleur bleue par défaut et la remplacer par votre propre couleur verte
                '& .Mui-selected': {
                  color: '#659a9a !important', // Définir la couleur du texte sélectionné
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: 'black', // Rendre le fond de l'indicateur transparent
                },
                
              }}
            >
              <Tab label="TABLEAU BORD" sx={{ fontSize: { xs: 16, sm: 18 } }} />
              <Tab
                label="INFORMATIONS DE COMPTE"
                sx={{ fontSize: { xs: 16, sm: 18 } }}
              />
              <Tab
                label="CARNET D'ADRESSES"
                sx={{ fontSize: { xs: 16, sm: 18 } }}
              />
              <Tab
                label="MES COMMANDES"
                sx={{ fontSize: { xs: 16, sm: 18 } }}
              />
            </Tabs>
          </Box>
          {value === 2 && <CARNETADRESSE />}
          {value === 0 && <TableauBord onEditClick={() => handleTabChange(2)}/> }
          {value === 3 && <MesCommandes/>}
          {value === 1 && <InformationsCompte/>}

        </Grid>
      </Container>
    </div>
  );
}

export default AccountCustomer;
