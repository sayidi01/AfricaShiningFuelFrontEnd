import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import Logo from "../src/images/LOGO_AFRICA_SHINING.png";
import Drawer from "@mui/material/Drawer";
import SearchIcon from "@mui/icons-material/Search";

import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";

import "../src/Navbar.css";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function NavBar() {
  const [open, setOpen] = useState({
    mobileproduits: false,
    mobileServices: false,
    mobileServicesPlus: false,
    mobileEvolutionsMarche: false,
    mobilePourquoiChoisirASF: false,
  });

  // const handleClick = (listName) => {
  //   setOpen((prevState) => ({
  //     ...prevState,
  //     [listName]: !prevState[listName],
  //   }));
  // };

  const [openn, setOpenn] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenn(newOpen);
  };
  const [anchorElProducts, setAnchorElProducts] = useState(null);

  const [services, setServices] = useState(null);

  const [servicesPlus, setservicesPlus] = useState(null);

  const [EvaluationMarche, setEvaluationMarche] = useState(null);

  const [prqChoisirASF, setPrqChoisirASF] = useState(null);

  const handlePopoverOpenprqChoisirASF = (event) => {
    setPrqChoisirASF(event.currentTarget);
  };

  const handlePopoverCloseprqChoisirASF = () => {
    setPrqChoisirASF(null);
  };

  const openprqChoisirASF = Boolean(prqChoisirASF);

  const handlePopoverOpenEvaluationMarche = (event) => {
    setEvaluationMarche(event.currentTarget);
  };
  const handlePopoverCloseEvaluationMarche = () => {
    setEvaluationMarche(null);
  };

  const openEvaluationMarche = Boolean(EvaluationMarche);

  const handlePopoverOpenServicesPlus = (event) => {
    setservicesPlus(event.currentTarget);
  };

  const handlePopoverCloseServicesPlus = () => {
    setservicesPlus(null);
  };

  const openServicesPlus = Boolean(servicesPlus);

  const handlePopoverOpenServices = (event) => {
    setServices(event.currentTarget);
  };

  const handlePopoverCloseServices = () => {
    setServices(null);
  };

  const openServices = Boolean(services);

  const handlePopoverOpenProducts = (event) => {
    setAnchorElProducts(event.currentTarget);
  };

  const handlePopoverCloseProducts = () => {
    setAnchorElProducts(null);
  };

  const openProducts = Boolean(anchorElProducts);

  const navigate = useNavigate();

  const handleClick = (listName) => {
    setOpen((prevState) => {
      const updatedOpenState = {};
      // Close all categories except the one being clicked
      Object.keys(prevState).forEach((key) => {
        updatedOpenState[key] = key === listName ? !prevState[key] : false;
      });
      return updatedOpenState;
    });
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <a href="/">
              <img src={Logo} alt="logo" width={180} />
            </a>
          </div>
          <Stack
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: 'flex' },
            }}
            direction={"row"}
            spacing={5}
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: '-20px'
            }}
          >
            <div>
              <Typography
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpenProducts}
                style={{
                  color: openProducts ? " #659a9a" : "black",
                  fontFamily: "Montserrat-sans serif",
                  fontSize: "19px",
                  fontWeight: "500",
                }}
              >
                Nos Produits
              </Typography>
              <Menu
                id="mouse-over-popover"
                anchorEl={anchorElProducts}
                open={openProducts}
                onClose={handlePopoverCloseProducts}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Divider sx={{ mx: 1, border: "  #659a9a 2px solid" }} />
                <Box onMouseLeave={handlePopoverCloseProducts}>
                <Link to={"/gazoil"} style={{ textDecoration: "none" }}>
                  <MenuItem
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                    onClick={handlePopoverCloseProducts}
                  >
                    Gasoil
                  </MenuItem>
                </Link>
                <Link to={"/Fuel2"} style={{ textDecoration: "none" }}>
                  <MenuItem
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                    onClick={handlePopoverCloseProducts}
                  >
                    Fuel oil n° 2
                  </MenuItem>
                </Link>
                <Link to={"/Lubrifiants"} style={{ textDecoration: "none" }}>
                  <MenuItem
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                    onClick={handlePopoverCloseProducts}
                  >
                    Lubrifiants
                  </MenuItem>
                </Link>
                <Link to={"/hydrogenevert"} style={{ textDecoration: "none" }}>
                  <MenuItem
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                    onClick={handlePopoverCloseProducts}
                  >
                    Hydrogène vert
                  </MenuItem>
                </Link>
                <Link to={"/Citerne"} style={{ textDecoration: "none" }}>
                  <MenuItem
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                    onClick={handlePopoverCloseProducts}
                  >
                    Citernes
                  </MenuItem>
                </Link>
                <Link to={"/BornesRecharge"} style={{ textDecoration: "none" }}>
                  <MenuItem
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                    onClick={handlePopoverCloseProducts}
                  >
                    Bornes de Recharge
                  </MenuItem>
                </Link>
                <Link
                  to={"/produitnettoyage"}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                    onClick={handlePopoverCloseProducts}
                  >
                    Produits de Nettoyage
                  </MenuItem>
                </Link>
                <Link to={"/boischauffage"} style={{ textDecoration: "none" }}>
                  <MenuItem
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                    onClick={handlePopoverCloseProducts}
                  >
                    Bois De Chauffage
                  </MenuItem>
                </Link>
                </Box>
              </Menu>
            </div>
            <div>
              <Typography
                aria-owns={open ? "mouse-over-popover-1" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpenServices}
                className="hoservices"
                style={{
                  color: openServices ? " #659a9a" : "black",
                  fontFamily: "Montserrat-sans serif",
                  fontSize: "19px",
                  fontWeight: "500",
                }}
              >
                Nos Services
              </Typography>
              <Menu
                id="mouse-over-popover-1"
                anchorEl={services}
                open={openServices}
                onClose={handlePopoverCloseServices}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Divider sx={{ mx: 1, border: "  #659a9a 2px solid" }} />
                <Box onMouseLeave={handlePopoverCloseServices}>
                  <Link to={"/livraison"} style={{ textDecoration: "none" }}>
                    <MenuItem
                      sx={{
                        p: 1,
                        color: "gray",
                        fontFamily: "initial",
                        fontWeight: "bolder",
                        fontSize: 18,
                      }}
                      onClick={handlePopoverCloseServices}
                    >
                      Livraisons
                    </MenuItem>
                  </Link>
                  <Link
                    to={"/cartecarburant"}
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem
                      sx={{
                        p: 1,
                        color: "gray",
                        fontFamily: "initial",
                        fontWeight: "bolder",
                        fontSize: 18,
                      }}
                      onClick={handlePopoverCloseServices}
                    >
                      Carte Carburant Toutes Marques
                    </MenuItem>
                  </Link>
                  <Link to={"/abonnementtelepage"} style={{ textDecoration: "none" }}>
                    <MenuItem
                      sx={{
                        p: 1,
                        color: "gray",
                        fontFamily: "initial",
                        fontWeight: "bolder",
                        fontSize: 18,
                      }}
                      onClick={handlePopoverCloseServices}
                    >
                      Abonnement Télépéage
                    </MenuItem>
                  </Link>
                </Box>
              </Menu>
            </div>
            <div>
              <Typography
                aria-owns={open ? "mouse-over-popover-2" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpenServicesPlus}
                style={{
                  color: openServicesPlus ? " #659a9a" : "black",
                  fontFamily: "Montserrat-sans serif",
                  fontSize: "19px",
                  fontWeight: "500",
                }}
              >
                Services Plus
              </Typography>
              <Menu
                id="mouse-over-popover-2"
                anchorEl={servicesPlus}
                open={openServicesPlus}
                onClose={handlePopoverCloseServicesPlus}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Divider sx={{ mx: 1, border: "  #659a9a 2px solid" }} />
                <Box onMouseLeave={handlePopoverCloseServicesPlus}>
                <Link
                  to={"/nettoyagedomicile"}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                    onClick={handlePopoverCloseServicesPlus}
                  >
                    Nettoyage Sans Eau
                  </MenuItem>
                </Link>
                <Link
                  to={"/collectelubrifiant"}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                    onClick={handlePopoverCloseServicesPlus}
                  >
                    Collecte Lubrifiant
                  </MenuItem>
                </Link>
                <Link to={"/nettoyagecuve"} style={{ textDecoration: "none" }}>
                  <MenuItem
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                    onClick={handlePopoverCloseServicesPlus}
                  >
                    Nettoyage Cuve
                  </MenuItem>
                </Link>
                <Link to={"/jaugeconnecte"} style={{ textDecoration: "none" }}>
                  <MenuItem
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                    onClick={handlePopoverCloseServicesPlus}
                  >
                    Jauge Connecte
                  </MenuItem>
                </Link>
                </Box>
              </Menu>
            </div>
            <div>
              <Typography
                aria-owns={open ? "mouse-over-popover-3" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpenEvaluationMarche}
                style={{
                  color: openEvaluationMarche ? " #659a9a" : "black",
                  fontFamily: "Montserrat-sans serif",
                  fontSize: "19px",
                  fontWeight: "500",
                }}
              >
                Evolution marché
              </Typography>
              <Menu
                id="mouse-over-popover-3"
                anchorEl={EvaluationMarche}
                open={openEvaluationMarche}
                onClose={handlePopoverCloseEvaluationMarche}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Divider sx={{ mx: 1, border: "  #659a9a 2px solid" }} />
                <Box onMouseLeave={handlePopoverCloseEvaluationMarche}>
                <Link to={"/relationsInvestiseurs"} style={{ textDecoration: "none" }}>
                  <MenuItem
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                    onClick={handlePopoverCloseEvaluationMarche}
                  >
                    Relations Investiseurs
                  </MenuItem>
                </Link>
                <Link to={"/ActualiteASF"} style={{ textDecoration: "none" }}>
                  <MenuItem
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                    onClick={handlePopoverCloseEvaluationMarche}
                  >
                    Actutalités ASF
                  </MenuItem>
                </Link>
                </Box>
              </Menu>
            </div>
            <div>
              <Typography
                aria-owns={open ? "mouse-over-popover-4" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpenprqChoisirASF}
                style={{
                  color: openprqChoisirASF ? " #659a9a" : "black",
                  fontFamily: "Montserrat-sans serif",
                  fontSize: "19px",
                  fontWeight: "500",
                }}
              >
                Pourquoi Choisir ASF
              </Typography>
              <Menu
                id="mouse-over-popover-4"
                anchorEl={prqChoisirASF}
                open={openprqChoisirASF}
                onClose={handlePopoverCloseprqChoisirASF}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Divider sx={{ mx: 1, border: "  #659a9a 2px solid" }} />
                <Box onMouseLeave={handlePopoverCloseprqChoisirASF}>
                <Link
                  to={"/presentationgroupe"}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                    onClick={handlePopoverCloseprqChoisirASF}
                  >
                    Presentation Du Groupe
                  </MenuItem>
                </Link>
                <Link to={"/engagementrse"} style={{ textDecoration: "none" }}>
                  <MenuItem
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                    onClick={handlePopoverCloseprqChoisirASF}
                  >
                    Notre Engagement RSE
                  </MenuItem>
                </Link>
                <Link
                  to={"/offrecompetitive"}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                    onClick={handlePopoverCloseprqChoisirASF}
                  >
                    Des Offres Competitives
                  </MenuItem>
                </Link>
                <Link to={"/equipedediees"} style={{ textDecoration: "none" }}>
                  <MenuItem
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                    onClick={handlePopoverCloseprqChoisirASF}
                  >
                    Des Equipes Dediées
                  </MenuItem>
                </Link>
                <Link to={"/politiqueRH"} style={{ textDecoration: "none" }}>
                  <MenuItem
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                    onClick={handlePopoverCloseprqChoisirASF}
                  >
                    Notre Politique RH
                  </MenuItem>
                </Link>
                </Box>
              </Menu>
            </div>
            <Typography
              className="hover-professionnel"
              style={{
                color: "black",
                fontFamily: "Montserrat-sans serif",
                fontSize: "19px",
                fontWeight: 500,
                "&:hover": { color: "green" },
              }}
            >
              Professionnel
            </Typography>
          </Stack>

          <Box
            style={{
              width: 150,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <PersonIcon
              onClick={() => navigate("/compte")}
              style={{ color: "black", marginRight: 15 }}
            />

            <SearchIcon style={{ color: "black", marginRight: 15 }} />

            <MenuIcon
              sx={{ display: { lg: "none" } }}
              onClick={toggleDrawer(true)}
              style={{
                color: "black",
                marginRight: 15,
                alignItems: "center",
                paddingTop: 8,
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{ display: { lg: "none" }, width: "100%" }}
        open={openn}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { width: "100%" } }}
        anchor="right"
      >
        <List
          sx={{
            width: "100% !important",
            bgcolor: "background.paper",
            textAlign: "center",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{
                fontFamily: "Montserrat, sans serif",
                fontWeight: "bolder",
                fontSize: 20,
              }}
            >
              <Typography sx={{fontWeight: 'bold', fontSize: 25, marginTop: '3rem'}}>Menu</Typography>
              <IconButton
                onClick={toggleDrawer(false)}
                sx={{ marginLeft: "auto", display: "block", my: 3 }}
              >
                <CloseIcon />
              </IconButton>
            </ListSubheader>
          }
        >
          <ListItemButton onClick={() => handleClick("mobileproduits")}>
            <ListItemText
              sx={{
                color: open.mobileproduits ? " #659a9a" : "black",
              }}
              primaryTypographyProps={{ sx: { fontSize: 20 ,   fontWeight: 'bold'} }}
              primary="Nos produits"
            />
            {open.mobileproduits ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open.mobileproduits} timeout="auto" unmountOnExit>
            <List
              sx={{ borderLeft: "4px solid #659a9a" }}
              component="div"
              disablePadding
            >
              <ListItemButton sx={{ pl: 4, color: "grey" }}>
                <NavLink
                  to={"/gazoil"}
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  <ListItemText
                    primaryTypographyProps={{ sx: { fontSize: 16 } }}
                    primary="Gasoil"
                  />
                </NavLink>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4, color: "grey" }}>
                <Link
                  to={"/Fuel2"}
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  <ListItemText
                    primaryTypographyProps={{ sx: { fontSize: 16 } }}
                    primary="Fuel oil n° 2"
                  />
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4, color: "grey" }}>
                <Link
                  to={"/Lubrifiants"}
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  <ListItemText
                    primaryTypographyProps={{ sx: { fontSize: 16 } }}
                    primary="Lubrifiants"
                  />
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4, color: "grey" }}>
                <Link
                  to={"/hydrogenevert"}
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  <ListItemText
                    primaryTypographyProps={{ sx: { fontSize: 16 } }}
                    primary="Hydrogéne vert"
                  />
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4, color: "grey" }}>
                <Link
                  to={"/Citerne"}
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  <ListItemText
                    primaryTypographyProps={{ sx: { fontSize: 16 } }}
                    primary="Citerne"
                  />
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4, color: "grey" }}>
                <Link
                  to={"/BornesRecharge"}
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  <ListItemText
                    primaryTypographyProps={{ sx: { fontSize: 16 } }}
                    primary="Borne De Recharge"
                  />
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4, color: "grey" }}>
                <Link
                  to={"/produitnettoyage"}
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  <ListItemText
                    primaryTypographyProps={{ sx: { fontSize: 16 } }}
                    primary="Produits De Nettoyage"
                  />
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4, color: "grey", fontWeight: "bold" }}>
                <Link
                  to={"/boischauffage"}
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  <ListItemText
                    primaryTypographyProps={{ sx: { fontSize: 16 } }}
                    primary="Bois De Chauffage"
                  />
                </Link>
              </ListItemButton>
            </List>
          </Collapse>
          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={() => handleClick("mobileServices")}>
              <ListItemText
                sx={{ color: open.mobileServices ? " #659a9a" : "black" }}
                primaryTypographyProps={{ sx: { fontSize: 20 , fontWeight: 'bold'} }}
                primary="Nos Services"
              />
              {open.mobileServices ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open.mobileServices} timeout="auto" unmountOnExit>
              <List
                sx={{ borderLeft: "4px solid #659a9a" }}
                component="div"
                disablePadding
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <Link
                    to={"/livraison"}
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <ListItemText
                      primaryTypographyProps={{ sx: { fontSize: 16 } }}
                      primary="Livraison"
                    />
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link
                    to={"/cartecarburant"}
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <ListItemText
                      primaryTypographyProps={{ sx: { fontSize: 16 } }}
                      primary="Carte Carburant Toute Marque"
                    />
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link
                    to={"/abonnementtelepage"}
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <ListItemText
                      primaryTypographyProps={{ sx: { fontSize: 16 } }}
                      primary="Abonnement Télépage"
                    />
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={() => handleClick("mobileServicesPlus")}>
              <ListItemText
                sx={{ color: open.mobileServicesPlus ? " #659a9a" : "black" }}
                primaryTypographyProps={{ sx: { fontSize: 20 , fontWeight: 'bold'} }}
                primary="Services Plus"
              />
              {open.mobileServicesPlus ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open.mobileServicesPlus} timeout="auto" unmountOnExit>
              <List
                sx={{ borderLeft: "4px solid #659a9a" }}
                component="div"
                disablePadding
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <Link
                    to={"/nettoyagedomicile"}
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <ListItemText
                      primaryTypographyProps={{ sx: { fontSize: 16 } }}
                      primary="Nettoyage Sans Eau"
                    />
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link
                    to={"/collectelubrifiant"}
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <ListItemText
                      primaryTypographyProps={{ sx: { fontSize: 16 } }}
                      primary="Collecte Lubrifiants"
                    />
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link
                    to={"/nettoyagecuve"}
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <ListItemText
                      primaryTypographyProps={{ sx: { fontSize: 16 } }}
                      primary="Nettoyage cuve"
                    />
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link
                    to={"/jaugeconnecte"}
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <ListItemText
                      primaryTypographyProps={{ sx: { fontSize: 16 } }}
                      primary="Jauge Connecte"
                    />
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={() => handleClick("mobileEvolutionsMarche")}
            >
              <ListItemText
                sx={{
                  color: open.mobileEvolutionsMarche ? " #659a9a" : "black",
                }}
                primaryTypographyProps={{ sx: { fontSize: 20 , fontWeight: 'bold'} }}
                primary="Evolution Marché"
              />
              {open.mobileEvolutionsMarche ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={open.mobileEvolutionsMarche}
              timeout="auto"
              unmountOnExit
            >
              <List
                sx={{ borderLeft: "4px solid #659a9a" }}
                component="div"
                disablePadding
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <Link
                    to={"/relationsinvestiseurs"} 
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <ListItemText
                      primaryTypographyProps={{ sx: { fontSize: 16 } }}
                      primary=" Relations Investisseurs"
                    />
                  </Link>
                </ListItemButton>
              </List>
              <List
                sx={{ borderLeft: "4px solid #659a9a" }}
                component="div"
                disablePadding
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <Link
                    to={"/ActualiteASF"}
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <ListItemText
                      primaryTypographyProps={{ sx: { fontSize: 16 } }}
                      primary="Actualité ASF"
                    />
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={() => handleClick("mobilePourquoiChoisirASF")}
            >
              <ListItemText
                sx={{
                  color: open.mobilePourquoiChoisirASF ? " #659a9a" : "black",
                }}
                primaryTypographyProps={{ sx: { fontSize: 20, fontWeight: 'bold' } }}
                primary="Pourquoi Choisir ASF"
              />
              {open.mobilePourquoiChoisirASF ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={open.mobilePourquoiChoisirASF}
              timeout="auto"
              unmountOnExit
            >
              <List
                sx={{ borderLeft: "4px solid #659a9a" }}
                component="div"
                disablePadding
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <Link
                    to={"/presentationgroupe"}
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <ListItemText
                      primaryTypographyProps={{ sx: { fontSize: 16 } }}
                      primary="Presentation Du Groupe"
                    />
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link
                    to={"/engagementrse"}
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <ListItemText
                      primaryTypographyProps={{ sx: { fontSize: 16 } }}
                      primary="Nos Engagement RSE"
                    />
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link
                    to={"/offrecompetitive"}
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <ListItemText
                      primaryTypographyProps={{ sx: { fontSize: 16 } }}
                      primary="Des Offres Competitives"
                    />
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link
                    to={"/equipedediees"}
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <ListItemText
                      primaryTypographyProps={{ sx: { fontSize: 16 } }}
                      primary="Des Equipes Dediées"
                    />
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link
                    to={"/politiqueRH"}
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <ListItemText
                      primaryTypographyProps={{ sx: { fontSize: 16 } }}
                      primary="Notre Politique RH"
                      sx={{ fontFamily: "inherit !important" }}
                    />
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </List>
        <Typography
          sx={{
            textAlign: "center",
            pt: 2,
            "&:hover": {
              color: "#659a9a",
            },
            fontFamily: "inherit",
            fontWeight: "bolder",
          }}
        >
          PROFESSIONNEL
        </Typography>
      </Drawer>
    </>
  );
}

export default NavBar;
