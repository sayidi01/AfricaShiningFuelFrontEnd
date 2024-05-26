import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { alpha } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Customers from "../src/images/customers-icons.png";
import Products from "../src/images/products-icons.png";
import Orders from "../src/images/orders-icons.png";
import Devis from "../src/images/devis-icons.png";
import users from "../src/images/users-icons.png";
import candidatureRh from "../src/images/candidatureRh-icons.png";
import NewsLetter from "../src/images/nwesletter-icons.png";
import Logout from "../src/images/Logout-icons.png";
import CantactezNous from "../src/images/cantactez-nous.png";
import Logo from "../src/images/LOGO_AFRICA_SHINING.png";

import Home from "../src/images/home-icons.png";
import { Link, Outlet, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
    overflowX: 'auto'
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.common.black,
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Dashbord() {
  const navigate = useNavigate();

  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <img src={Logo} alt="logo" width={180} />
          </div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            "Home",
            "Customers",
            "Users",
            "Orders",
            "Products",
            "Devis",
            "Candiature RH",
            "Newsletter",
            "Contactez-Nous",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={
                  text === "Orders"
                    ? () => navigate("/dashbord/orders")
                    : undefined
                }
              >
                {text === "Home" && (
                  <ListItemIcon>
                    <img src={Home} width={30} alt="Home" />
                  </ListItemIcon>
                )}
                {text === "Customers" && (
                  <ListItemIcon>
                    <img src={Customers} width={30} alt="Customers" />
                  </ListItemIcon>
                )}
                {text === "Users" && (
                  <ListItemIcon>
                    <img src={users} alt="Users" width={30} />
                  </ListItemIcon>
                )}
                {text === "Orders" && (
                  <ListItemIcon>
                    <img src={Orders} alt="Orders" width={30} />
                  </ListItemIcon>
                )}
                {text === "Products" && (
                  <ListItemIcon>
                    <img src={Products} alt="Products" width={30} />
                  </ListItemIcon>
                )}
                {text === "Devis" && (
                  <ListItemIcon>
                    <img src={Devis} alt="Devis" width={30} />
                  </ListItemIcon>
                )}
                {text === "Candiature RH" && (
                  <ListItemIcon>
                    <img src={candidatureRh} alt="Candiature RH" width={30} />
                  </ListItemIcon>
                )}
                {text === "Newsletter" && (
                  <ListItemIcon>
                    <img src={NewsLetter} alt="Newsletter" width={30} />
                  </ListItemIcon>
                )}
                {text === "Contactez-Nous" && (
                  <ListItemIcon>
                    <img src={CantactezNous} alt="Contactez-Nous" width={30} />
                  </ListItemIcon>
                )}
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    style: { fontWeight: "bold" },
                    fontSize: 17,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Logout", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {text === "Logout" && (
                  <ListItemIcon>
                    <img src={Logout} width={30} alt="Logout" />
                  </ListItemIcon>
                )}
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    style: { fontWeight: "bold" },
                    fontSize: 17,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}

export default Dashbord;
