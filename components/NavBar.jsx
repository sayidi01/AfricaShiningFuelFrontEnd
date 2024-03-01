import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import Logo from "../src/LOGO_AFRICA_SHINING-removebg-preview.png";
import Drawer from "@mui/material/Drawer";
import SearchIcon from "@mui/icons-material/Search";
import Popover from "@mui/material/Popover";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import "../src/Navbar.css";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";

function NavBar() {
  const [open, setOpen] = useState({
    mobileproduits: false,
    mobileServices: false,
    mobileServicesPlus: false,
    mobileEvolutionsMarche: false,
    mobilePourquoiChoisirASF: false,
  });

  const handleClick = (listName) => {
    setOpen((prevState) => ({
      ...prevState,
      [listName]: !prevState[listName],
    }));
  };

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
  
  const navigate = useNavigate()
  

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <img src={Logo} alt="logo" width={180} onClick={() => navigate('/landing')} />
          </div>
          <Stack
            sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}
            direction={"row"}
            spacing={5}
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 18,
            }}
          >
            <div>
              <Typography
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpenProducts}
                onMouseLeave={handlePopoverCloseProducts}
                style={{
                  color: openProducts ? " #659a9a" : "black",
                  fontFamily: "Montserrat-sans serif",
                  fontSize: "19px",
                  fontWeight: "500",
                }}
              >
                Nos Produits
              </Typography>
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: "none",
                }}
                open={openProducts}
                anchorEl={anchorElProducts}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverCloseProducts}
                disableRestoreFocus
              >
                <Paper sx={{ p: 2 }} >
                  <Divider sx={{ mx: 1, border: "  #659a9a 2px solid" }} />
                  <NavLink to={'/gazoil'} style={{ textDecoration: 'none' }}>
                  <Typography role="button"
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                      cursor: "pointer"
                    }}
                  >
                    Gazoil
                  </Typography>
                  </NavLink>
                 
                  <Typography
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                  >
                    Fuel 2
                  </Typography>
                  <Typography
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                  >
                    Lubrifiants
                  </Typography>
                  <Typography
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                  >
                    AD Blue
                  </Typography>
                  <Typography
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                  >
                    Citerne
                  </Typography>
                  <Typography
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                  >
                    Borne De Recharge
                  </Typography>
                  <Typography
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                  >
                    Produits de Nettoyage
                  </Typography>
                  <Typography
                    sx={{
                      p: 1,
                      color: "gray",
                      fontFamily: "initial",
                      fontWeight: "bolder",
                      fontSize: 18,
                    }}
                  >
                    Bois De Chauffage
                  </Typography>
                </Paper>
              </Popover>
            </div>
            <div>
              <Typography
                aria-owns={open ? "mouse-over-popover-1" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpenServices}
                onMouseLeave={handlePopoverCloseServices}
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
              <Popover
                id="mouse-over-popover-1"
                sx={{
                  pointerEvents: "none",
                }}
                open={openServices}
                anchorEl={services}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverCloseServices}
                disableRestoreFocus
              >
                <Divider sx={{ mx: 1, border: "  #659a9a 2px solid" }} />
                <Typography
                  sx={{
                    p: 1,
                    color: "gray",
                    fontFamily: "initial",
                    fontWeight: "bolder",
                    fontSize: 18,
                  }}
                >
                  Livraison
                </Typography>
                <Typography
                  sx={{
                    p: 1,
                    color: "gray",
                    fontFamily: "initial",
                    fontWeight: "bolder",
                    fontSize: 18,
                  }}
                >
                  Carte Carburant Toute Marque
                </Typography>
                <Typography
                  sx={{
                    p: 1,
                    color: "gray",
                    fontFamily: "initial",
                    fontWeight: "bolder",
                    fontSize: 18,
                  }}
                >
                  Abonnement Telebadge
                </Typography>
              </Popover>
            </div>
            <div>
              <Typography
                aria-owns={open ? "mouse-over-popover-2" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpenServicesPlus}
                onMouseLeave={handlePopoverCloseServicesPlus}
                style={{
                  color: openServicesPlus ? " #659a9a" : "black",
                  fontFamily: "Montserrat-sans serif",
                  fontSize: "19px",
                  fontWeight: "500",
                }}
              >
                Services Plus
              </Typography>
              <Popover
                id="mouse-over-popover-2"
                sx={{
                  pointerEvents: "none",
                }}
                open={openServicesPlus}
                anchorEl={servicesPlus}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverCloseServicesPlus}
                disableRestoreFocus
              >
                <Divider sx={{ mx: 1, border: "  #659a9a 2px solid" }} />
                <Typography
                  sx={{
                    p: 1,
                    color: "gray",
                    fontFamily: "initial",
                    fontWeight: "bolder",
                    fontSize: 18,
                  }}
                >
                  Nettoyage A Domicile
                </Typography>
                <Typography
                  sx={{
                    p: 1,
                    color: "gray",
                    fontFamily: "initial",
                    fontWeight: "bolder",
                    fontSize: 18,
                  }}
                >
                  Collecte Lubrifiant
                </Typography>
                <Typography
                  sx={{
                    p: 1,
                    color: "gray",
                    fontFamily: "initial",
                    fontWeight: "bolder",
                    fontSize: 18,
                  }}
                >
                  Nettoyage Cuve
                </Typography>
                <Typography
                  sx={{
                    p: 1,
                    color: "gray",
                    fontFamily: "initial",
                    fontWeight: "bolder",
                    fontSize: 18,
                  }}
                >
                  Jauge Connecte
                </Typography>
              </Popover>
            </div>
            <div>
              <Typography
                aria-owns={open ? "mouse-over-popover-3" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpenEvaluationMarche}
                onMouseLeave={handlePopoverCloseEvaluationMarche}
                style={{
                  color: openEvaluationMarche ? " #659a9a" : "black",
                  fontFamily: "Montserrat-sans serif",
                  fontSize: "19px",
                  fontWeight: "500",
                }}
              >
                Evolution marché
              </Typography>
              <Popover
                id="mouse-over-popover-3"
                sx={{
                  pointerEvents: "none",
                }}
                open={openEvaluationMarche}
                anchorEl={EvaluationMarche}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverCloseEvaluationMarche}
                disableRestoreFocus
              >
                <Divider sx={{ mx: 1, border: "  #659a9a 2px solid" }} />
                <Typography
                  sx={{
                    p: 1,
                    color: "gray",
                    fontFamily: "initial",
                    fontWeight: "bolder",
                    fontSize: 18,
                  }}
                >
                  Actualité ASF
                </Typography>
              </Popover>
            </div>
            <div>
              <Typography
                aria-owns={open ? "mouse-over-popover-4" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpenprqChoisirASF}
                onMouseLeave={handlePopoverCloseprqChoisirASF}
                style={{
                  color: openprqChoisirASF ? " #659a9a" : "black",
                  fontFamily: "Montserrat-sans serif",
                  fontSize: "19px",
                  fontWeight: "500",
                }}
              >
                Pourquoi Choisir ASF
              </Typography>
              <Popover
                id="mouse-over-popover-4"
                sx={{
                  pointerEvents: "none",
                }}
                open={openprqChoisirASF}
                anchorEl={prqChoisirASF}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverCloseprqChoisirASF}
                disableRestoreFocus
              >
                <Divider sx={{ mx: 1, border: "  #659a9a 2px solid" }} />
                <Typography
                  sx={{
                    p: 1,
                    color: "gray",
                    fontFamily: "initial",
                    fontWeight: "bolder",
                    fontSize: 18,
                  }}
                >
                  Presentation Du groupe
                </Typography>
                <Typography
                  sx={{
                    p: 1,
                    color: "gray",
                    fontFamily: "initial",
                    fontWeight: "bolder",
                    fontSize: 18,
                  }}
                >
                  Nos Engagement RSE
                </Typography>
                <Typography
                  sx={{
                    p: 1,
                    color: "gray",
                    fontFamily: "initial",
                    fontWeight: "bolder",
                    fontSize: 18,
                  }}
                >
                  Des Offres Competitives
                </Typography>
                <Typography
                  sx={{
                    p: 1,
                    color: "gray",
                    fontFamily: "initial",
                    fontWeight: "bolder",
                    fontSize: 18,
                  }}
                >
                  Des Equipes Dediées
                </Typography>
                <Typography
                  sx={{
                    p: 1,
                    color: "gray",
                    fontFamily: "initial",
                    fontWeight: "bolder",
                    fontSize: 18,
                  }}
                >
                  Notre Politique RH
                </Typography>
              </Popover>
            </div>
            <Typography  className="hover-professionnel" style={{color: 'black', fontFamily: "Montserrat-sans serif", fontSize: '19px', fontWeight: 500,"&:hover": {color: 'green'}}}>Professionnel</Typography>
          </Stack>

          <Box
            style={{
              paddingTop: 18,
              width: 150,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <PersonIcon onClick={() => navigate('/compte')} style={{ color: "black", marginRight: 15 }} />
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
        sx={{ display: { lg: "none" } }}
        open={openn}
        onClose={toggleDrawer(false)}
      >
        
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", textAlign: "center" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader"sx={{fontFamily: 'Montserrat, sans serif', fontWeight: 'bolder', fontSize: 20 }}>
              Menu
              <IconButton onClick={toggleDrawer(false)} style={{ marginLeft: 'auto' }}>
             <CloseIcon />
            </IconButton>
            </ListSubheader>
            
          }
        >
          <ListItemButton onClick={() => handleClick("mobileproduits")}>
            <ListItemIcon></ListItemIcon>
            <ListItemText
              sx={{
                color: open.mobileproduits ? " #659a9a" : "black",
              }}
              primary="Nos produits"
            />
            {open.mobileproduits ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open.mobileproduits} timeout="auto" unmountOnExit>
            <List  sx={{borderLeft: '4px solid #659a9a', marginLeft: '8px'}} component="div" disablePadding>
              <ListItemButton  sx={{ pl: 4 , color: 'grey'}} >
                <NavLink to={'/gazoil'}> 
                <ListItemText primary="Gazoil" />
                </NavLink>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4, color: 'grey' }}>
                <ListItemText primary="Fuel 2" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4, color: 'grey' }}>
                <ListItemText primary="Lubrifiants" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 , color: 'grey'}}>
                <ListItemText primary="AD Blue" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 , color: 'grey'}}>
                <ListItemText primary="Citerne" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4, color: 'grey' }}>
                <ListItemText primary="Borne De Recharge" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 , color: 'grey'}}>
                <ListItemText primary="Produits De Nettoyage" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 , color: 'grey',  fontWeight: 'bold'}}>
                <ListItemText primary="Bois De Chauffage" />
              </ListItemButton>
            </List>
          </Collapse>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={() => handleClick("mobileServices")}>
              <ListItemIcon></ListItemIcon>
              <ListItemText
                sx={{ color: open.mobileServices ? " #659a9a" : "black" }}
                primary="Nos Services"
              />
              {open.mobileServices ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open.mobileServices} timeout="auto" unmountOnExit>
              <List sx={{borderLeft: '4px solid #659a9a', marginLeft: '8px'}} component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Livraison" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Carte Carburant Toute Marque" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Abonnement Telebadge" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={() => handleClick("mobileServicesPlus")}>
              <ListItemIcon></ListItemIcon>
              <ListItemText   sx={{ color: open.mobileServicesPlus ? " #659a9a" : "black" }} primary="Services Plus" />
              {open.mobileServicesPlus ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open.mobileServicesPlus} timeout="auto" unmountOnExit>
              <List sx={{borderLeft: '4px solid #659a9a', marginLeft: '8px'}} component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Nettoyage A Domicile" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Collecte Lubrifiant" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Nettoyage cuve" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Jauge Connecte" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={() => handleClick("mobileEvolutionsMarche")}
            >
              <ListItemIcon></ListItemIcon>
              <ListItemText   sx={{ color: open.mobileEvolutionsMarche ? " #659a9a" : "black" }} primary="Evolution Marché" />
              {open.mobileEvolutionsMarche ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={open.mobileEvolutionsMarche}
              timeout="auto"
              unmountOnExit
            >
              <List sx={{borderLeft: '4px solid #659a9a', marginLeft: '8px'}} component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText  primary="Actualité ASF" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={() => handleClick("mobilePourquoiChoisirASF")}
            >
              <ListItemIcon></ListItemIcon>
              <ListItemText   sx={{ color: open.mobilePourquoiChoisirASF ? " #659a9a" : "black" }} primary="Pourquoi Choisir ASF" />
              {open.mobilePourquoiChoisirASF ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={open.mobilePourquoiChoisirASF}
              timeout="auto"
              unmountOnExit
            >
              <List sx={{borderLeft: '4px solid #659a9a', marginLeft: '8px'}} component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Presentation Du Groupe" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Nos Engagement RSE" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Des Offres Competitives" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Des Equipes Dediées" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Notre Politique RH" sx={{ fontFamily:  'inherit !important' }} />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </List>
        <Typography
        sx={{
         textAlign: 'center',
          pt: 2,
           "&:hover": {
           color: "#659a9a",
             },
             fontFamily: 'inherit',
             fontWeight: 'bolder',
  }}
>
  PROFESSIONNEL
</Typography>


      </Drawer>
    </>
  );
}

export default NavBar;
