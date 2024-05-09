import { Typography, Grid, Stack, Box, TextField } from "@mui/material";
import NavBar from "./NavBar";
import React, { useCallback, useContext, useEffect, useState } from "react";
import "../src/MonCompte.css";
import { useTheme } from "@mui/material/styles";
import { axiosInstance } from "../src/api";
import { toast } from "react-hot-toast";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import iconsperson1 from"../src/images/icons8-personne-homme-64.png"
import iconsperson2 from"../src/images/new user.png"

import { UserOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import Footer from "./Footer";
import Checkbox from "@mui/material/Checkbox";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";


const label = { inputProps: { "aria-label": "Checkbox demo" } };
function MonCompte() {
  const navigate = useNavigate()
  const theme = useTheme();
  const { setData,  setisConnected , isConnected} = useContext(UserContext);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
   
    if (isConnected) {
      navigate("/AccountCustomer");
    }
  }, [isConnected,]);

  
  

  const handleChangeSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };

  const [loginCustomer, setLoginCustomer] = useState({
    email: "",
    password: ""
  })

  const handleInputChangeLoginCustomer = (e) => {
    const {name, value} = e.target;
    setLoginCustomer((prev) =>( {
      ...prev,
      [name]: value
    }))
  }

  const [customerGranulesDeBois, setcustomerGranulesDeBois] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmer_mot_de_passe: "",
  })
  console.log(customerGranulesDeBois)

  const handleInputChangeClientGranulesDeBois = (e) => {
    const { name, value } = e.target;
    setcustomerGranulesDeBois((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [customerClientFioul, setCustomerClientFioul] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmer_mot_de_passe: "",
  });
  console.log(customerClientFioul)

  const [clientGazElectrecite, setClientGazElectrecite] = useState({
    referenceClient: "",
    numeroPCEouPDL: "",
    email: "",
    customerType: selectedOption,
  })
  console.log(clientGazElectrecite)

  const handleInputChangeClientGazElectrecite = (e) => {
    const {name, value} = e.target
    setClientGazElectrecite((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleInputChangeClientFioul = (e) => {
    const { name, value } = e.target;
    setCustomerClientFioul((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitClientFioul = useCallback(() => {
    console.log(customerClientFioul)
    
    axiosInstance
      .post("/customer", {...customerClientFioul, customerType:selectedOption })
      .then((data) => {
        console.log(data);
        setData(data);
        setisConnected(true)
        navigate("/AccountCustomer")
        toast.success(data.message ?? "votre compte se crée avec succès");
      })

      .catch((err) => {
        console.log(err);
      });
  }, [customerClientFioul, selectedOption]);

    const handleSubmitClientGranulesDeBois = useCallback(() => {
      console.log(customerGranulesDeBois)
      axiosInstance
      .post("/customer/clientgranulesdebois", {...customerGranulesDeBois, customerType: selectedOption})
      .then((data) => {
        console.log(data)
        setData(data)
        setisConnected(true)
        navigate("/AccountCustomer")
        toast.success(data.message ?? "votre compte se crée avec succès");

      })
      .catch((err) => {
        console.log(err)
      })
    },[customerGranulesDeBois, selectedOption])


  const handleSubmitClientGazElectrecite = useCallback(() => {
   
    console.log(clientGazElectrecite)
    axiosInstance
    .post("/customer/clientgazelectrecite", {...clientGazElectrecite, customerType:selectedOption})
    .then((response) => {
      console.log(response.data)
      setData(response.data)
      setisConnected(true)
      navigate("/AccountCustomer")
      toast.success(response.data.message ?? "Votre compte a été créé avec succès");
    })
    .catch((error) => {
      console.error("Erreur lors de la création du client Gaz Electrecite :", error);
      toast.error("Une erreur s'est produite lors de la création du client Gaz Electrecite");
    });
  },[clientGazElectrecite, selectedOption])

  ;


  const handleSubmitLoginCustomer = useCallback(() => {
   
    axiosInstance
    .post("/customer/login",{...loginCustomer,customerType:selectedOption } )
    .then((res) => {
      console.log(res.data)
      setData(res.data)
      setisConnected(true)
      navigate("/AccountCustomer")
      toast.success(res.data.message ?? "Vous êtes connecté");
    })
    .catch((err) => {
      console.log("erreur connexion", err)
      toast.error("Une erreur s'est produite lors de la connexion du customer");
    })
  },[loginCustomer, setSelectedOption])

  
  return (
    <div>
      <NavBar />
      <Grid container className="mon-compte-container">
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={4}
          sx={{ marginLeft: { xs: "1rem", sm: "6rem" } }}
        >
          <Stack direction="row">
            <Typography
              variant="h4"
              style={{
                fontFamily: "Arial",
                color: "#659a9a",
                display: "inline-block",
                borderBottom: "6px solid #659a9a",
              }}
            >
              IDENT
            </Typography>
            <Typography
              variant="h4"
              style={{
                fontFamily: "Arial",
                color: "#659a9a",
                display: "inline",
              }}
            >
              IFICATION
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          backgroundColor: "rgba(235, 235, 235, 0.5)",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          marginTop: "5rem",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          style={{ borderRight: "2px solid gray" }}
          sx={{ paddingY: 1 }}
        >
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <div style={{ marginRight: "10px" }}>
              <img
                width={50}
                src={iconsperson1}
              />
            </div>
            <Typography
              variant="h5"
              style={{
                color: "#659a9a",
                fontFamily: "inherit",
                fontWeight: "bolder",
              }}
              sx={{ marginLeft: { xs: "-5px", fontSize: "1.4rem" } }}
            >
              VOUS AVEZ DÉJÀ UN COMPTE ?
            </Typography>
          </Box>
          <Typography
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              fontWeight: "bold",
              color: "#4F4A45",
            }}
          >
            Connectez-vous
          </Typography>
          <Typography
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              color: "gray",
              fontFamily: "serif",
              marginTop: 4,
            }}
          >
            à votre espace client{" "}
          </Typography>
          <Typography
            variant="h5"
            style={{
              color: theme.palette.grey[700],
              fontFamily: "Delicatessen Script",
            }}
            sx={{
              marginLeft: { xs: "2.5rem ", sm: "11.5rem" },
              marginTop: { xs: "3rem", sm: "4.5rem" },
            }}
          >
            Vous êtes ?
          </Typography>
          <Box sx={{ marginLeft: { xs: "2.5rem", sm: "11.5rem" } }}>
            <FormControl sx={{ maxWidth: "200px", marginTop: "1.5rem" }}>
              <InputLabel
                variant="standard"
                htmlFor="uncontrolled-native"
                sx={{ color: "gray" }}
              >
                Sélectionnez votre espace
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                  style: { width: "250px" },
                }}
                onChange={handleChangeSelectOption}
              >
                <option value={10}>Client Fioul</option>
                <option value={20}>Client Granulés de bois</option>
                <option value={30}>Client Gaz & Èlectrecité</option>
              </NativeSelect>
            </FormControl>
          </Box>
          <Stack
            style={{
              backgroundColor: "rgba(101, 154, 154, 0.5)",
              marginTop: theme.breakpoints.down("xs") ? "1rem" : "2rem",
            }}
          >
            <Box
              display={{ xs: "block", sm: "flex" }}
              alignItems="center"
              justifyContent={"space-around"}
              paddingTop={4}
              gap={9}
            >
              <Typography
                sx={{
                 
                  fontFamily: "Delicatessen Script",
                  fontSize: { xs: "19px", sm: "20px" },
                  color: "gray",
                }}
              >
                Email *
              </Typography>
              <Input
              onChange={handleInputChangeLoginCustomer}
                placeholder="Enter your Email"
                name="email"
                prefix={<UserOutlined />}
                style={{
                  width: "250px",
                
                }}
              />
            </Box>
            <Box
              display={{ xs: "block", sm: "flex" }}
              paddingTop={6}
            justifyContent={"space-around"}
            >
              <Typography
                sx={{
                
                  fontFamily: "Delicatessen Script",
                  fontSize: { xs: "19px", sm: "20px" },
                  color: "gray",
                }}
              >
                Mot de passe *
              </Typography>
              <Space
                direction="vertical"
                style={{
                  width: "250px",
                }}
                >
                <Input.Password
                  name="password"
                  className="input-password-mobile"
                  placeholder="input password"
                  onChange={handleInputChangeLoginCustomer}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Space>
            </Box>
            <NavLink to={"/motdepasseoublier"}>
              <Box
                display={{ xs: "block", sm: "flex" }}
                marginTop={"2rem"}
                marginLeft={{ xs: "2.5rem", sm: "11.5rem" }}
              >
                <Typography
                  style={{
                    color: "gray",
                    fontFamily: "Delicatessen Script",
                    textDecoration: "none",
                  }}
                >
                  Vous avez oublié votre mode de passe
                </Typography>
              </Box>
            </NavLink>
          </Stack>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              marginTop: "2rem",
            }}
          >
            <Button
            onClick={handleSubmitLoginCustomer}
              type="primary"
              style={{
                backgroundColor: "#333",
                color: "#fff",
                borderRadius: "0",
                width: 200,
                height: 50,
                fontSize: 20,
                fontFamily: "Montserrat",
              }}
            >
              S'INDENTIFIER
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ paddingY: 1 }}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ marginTop: { xs: "2rem", sm: "0" }, textAlign: "center" }}
          >
            <div>
              <img src={iconsperson2} width={50} />
            </div>
            <Typography
              style={{
                color: "#659a9a",
                fontFamily: "inherit",
                fontWeight: "bolder",
                fontSize: { xs: "1rem", sm: "1.6rem" },
              }}
            >
              VOUS N'AVEZ PAS ENCORE DE COMPTE ?
            </Typography>
          </Box>
          <Typography
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              fontWeight: "bold",
              color: "#4F4A45",
            }}
          >
            Créer un compte
          </Typography>
          <Typography
            variant="h5"
            style={{
              color: theme.palette.grey[700],
              fontFamily: "Delicatessen Script",
            }}
            sx={{
              marginLeft: { xs: "3.5rem", sm: "2rem" },
              marginTop: { xs: "3rem", sm: "6.2rem" },
            }}
          >
            Vous êtes ?
          </Typography>
          <Stack>
            <Box sx={{ marginLeft: { xs: "3.5rem", sm: "2rem" } }}>
               <FormControl sx={{ maxWidth: "200px", marginTop: "1.5rem" }}>
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native"
                  sx={{ color: "gray" }}
                >
                  Sélectionnez votre espace
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  onChange={handleChangeSelectOption}
                  inputProps={{
                    name: " customerType",
                    id: "uncontrolled-native",
                    style: { width: "250px" },
                  }}
                >
                  <option   value="ClientFioul">Client Fioul</option>
                  <option  value="ClientGranulésDeBois">
                    Client Granulés de bois
                  </option>
                  <option  value="ClientGaz&Èlectrecité">
                    Client Gaz & Èlectrecité
                  </option>
                </NativeSelect>
              </FormControl> 
             
            </Box>
            <Stack
              style={{
                backgroundColor: "rgba(101, 154, 154, 0.5)",
                marginTop: "1rem",
              }}
            >
              {(selectedOption === "ClientFioul") && (
                <Box>
                  
                  <Box
                    display={{ xs: "block", sm: "flex" }}
                    alignItems="center"
                    justifyContent={"space-evenly"}
                    gap={16}
                  >
                    <Typography
                      style={{
                        color: "gray",
                        fontFamily: "Delicatessen Script",
                      }}
                      sx={{
                       
                        marginTop: { xs: "3rem", sm: "3.5rem" },
                        fontSize: { xs: "19px", sm: "20px" },
                      }}
                    >
                      Prénom *
                    </Typography>
                    <Input
                      onChange={handleInputChangeClientFioul}
                      placeholder="Entrer votre Prenom"
                      name="first_name"
                      style={{
                        width: "250px",
                        height: "30px",
                       
                      }}
                      className="input-email-mobile"
                    />
                  </Box>
                  <Box
                    display={{ xs: "block", sm: "flex" }}
                    alignItems="center"
                    justifyContent={"space-evenly"}
                    gap={20}
                  >
                    <Typography
                      style={{
                        color: "gray",
                        fontFamily: "Delicatessen Script",
                      }}
                      sx={{
                      
                        marginTop: { xs: "3rem", sm: "1.5rem" },
                        fontSize: { xs: "19px", sm: "20px" },
                      }}
                    >
                      Nom *
                    </Typography>
                    <Input
                      onChange={handleInputChangeClientFioul}
                      placeholder="Entrer votre Nom"
                      name="last_name"
                      style={{
                        width: "250px",
                        height: "30px",
                      
                        marginTop: window.innerWidth < 600 ? "1rem" : "2rem",
                      }}
                    />
                  </Box>
                  <Box
                    display={{ xs: "block", sm: "flex" }}
                    alignItems="center"
                   justifyContent={"space-evenly"}
                   gap={21}
                   
                  >
                    <Typography
                      style={{
                        color: "gray",
                        fontFamily: "Delicatessen Script",
                      }}
                      sx={{
                       
                        marginTop: { xs: "3rem", sm: "1.5rem" },
                        fontSize: { xs: "19px", sm: "20px" },
                      }}
                    >
                      Email *
                    </Typography>
                    <Input
                      onChange={handleInputChangeClientFioul}
                      placeholder="Entrer votre Email"
                      name="email"
                      style={{
                        width: "250px",
                        height: "30px",
                        marginTop: window.innerWidth < 600 ? "1rem" : "2rem",
                      }}
                    />
                  </Box>
                  <Box
                    display={{ xs: "block", sm: "flex" }}
                    alignItems="center"
                    justifyContent={"space-evenly"}
                    gap={13}
                  >
                    <Typography
                      style={{
                        color: "gray",
                        fontFamily: "Delicatessen Script",
                      }}
                      sx={{
                        marginTop: { xs: "3rem", sm: "1.5rem" },
                        fontSize: { xs: "19px", sm: "20px" },
                      }}
                    >
                      Mot de Passe *
                    </Typography>
                    <Space
                      direction="vertical"
                      style={{
                        width: "250px",
                        height: "30px",
                       
                        marginTop: window.innerWidth < 600 ? "1rem" : "2rem",
                      }}
                    >
                      <Input.Password
                        onChange={handleInputChangeClientFioul}
                        name="password"
                        placeholder="Entrer votre Mot de passe"
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Space>
                  </Box>
                  <Box
                    display={{ xs: "block", sm: "flex" }}
                    alignItems="center"
                    justifyContent={"space-evenly"} 
                  >
                    <Typography
                      style={{
                        color: "gray",
                        fontFamily: "Delicatessen Script",
                      }}
                      sx={{
                       
                        marginTop: { xs: "3rem", sm: "3rem" },
                        fontSize: { xs: "19px", sm: "20px" },
                      }}
                    >
                      Confirmer le Mot de Passe *
                    </Typography>
                    <Space
                      direction="vertical"
                      style={{
                        width: "250px",
                        height: "30px",
                       
                        marginTop: window.innerWidth < 600 ? "1rem" : "2rem",
                      }}
                    >
                      <Input.Password
                        onChange={handleInputChangeClientFioul}
                        name="confirmer_mot_de_passe"
                        placeholder="Confirmer le mot de passe"
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Space>
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems="center"
                    marginTop={"2rem"}
                    marginLeft={"2rem"}
                    sx={{ gap: "1rem" }}
                  >
                    <Checkbox
                      {...label}
                      defaultChecked
                      onChange={handleInputChangeClientFioul}
                    />
                    <Typography
                      style={{
                        fontSize: window.innerWidth < 600 ? "13px" : "16px",
                        color: theme.palette.grey[700],
                        fontFamily: "Delicatessen Script",
                      }}
                    >
                      Déclare avoir lu les conditions générales de vente, les
                      conditions générales <br /> d'utilisation et la politique
                      de confidentialité de ASF.
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems="center"
                    marginTop={"2rem"}
                    marginLeft={"2rem"}
                    sx={{ gap: "1rem" }}
                  >
                    <Checkbox
                      {...label}
                      defaultChecked
                      onChange={handleInputChangeClientFioul}
                    />
                    <Typography
                      style={{
                        fontSize: window.innerWidth < 600 ? "13px" : "16px",
                        color: theme.palette.grey[700],
                        fontFamily: "Delicatessen Script",
                      }}
                    >
                      Accepte de recevoir les promotions sur les produits et
                      services proposés par ASF.
                    </Typography>
                  </Box>
                  <div
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      marginTop: "2rem",
                    }}
                  >
                    <Button
                      onClick={handleSubmitClientFioul}
                      type="primary"
                      style={{
                        backgroundColor: "#333",
                        color: "#fff",
                        borderRadius: "0",
                        width: 200,
                        height: 50,
                        fontSize: 20,
                        fontFamily: "Montserrat",
                      }}
                    >
                      S'INCRIRE
                    </Button>
                  </div>
                </Box>
              )}

              {( selectedOption === "ClientGranulésDeBois") && (
                 <Box>
                  
                 <Box
                   display={{ xs: "block", sm: "flex" }}
                   alignItems="center"
                   sx={{ gap: "6rem" }}
                 >
                   <Typography
                     style={{
                       color: "gray",
                       fontFamily: "Delicatessen Script",
                     }}
                     sx={{
                       marginLeft: { xs: "4rem", sm: "2.5rem" },
                       marginTop: { xs: "3rem", sm: "3.5rem" },
                       fontSize: { xs: "19px", sm: "20px" },
                     }}
                   >
                     Prénom *
                   </Typography>
                   <Input
                     onChange={handleInputChangeClientGranulesDeBois}
                     placeholder="Entrer votre Prenom"
                     name="first_name"
                     style={{
                       width: "250px",
                       height: "30px",
                       marginLeft: "4rem",
                     }}
                     className="input-email-mobile"
                   />
                 </Box>
                 <Box
                   display={{ xs: "block", sm: "flex" }}
                   alignItems="center"
                   sx={{ gap: "6rem" }}
                 >
                   <Typography
                     style={{
                       color: "gray",
                       fontFamily: "Delicatessen Script",
                     }}
                     sx={{
                       marginLeft: { xs: "4rem", sm: "2.5rem" },
                       marginTop: { xs: "3rem", sm: "1.5rem" },
                       fontSize: { xs: "19px", sm: "20px" },
                     }}
                   >
                     Nom *
                   </Typography>
                   <Input
                     onChange={handleInputChangeClientGranulesDeBois}
                     placeholder="Entrer votre Nom"
                     name="last_name"
                     style={{
                       width: "250px",
                       height: "30px",
                       marginLeft:
                         window.innerWidth < 600 ? "3.9rem" : "5.6rem",
                       marginTop: window.innerWidth < 600 ? "1rem" : "2rem",
                     }}
                   />
                 </Box>
                 <Box
                   display={{ xs: "block", sm: "flex" }}
                   alignItems="center"
                   sx={{ gap: "6rem" }}
                 >
                   <Typography
                     style={{
                       color: "gray",
                       fontFamily: "Delicatessen Script",
                     }}
                     sx={{
                       marginLeft: { xs: "4rem", sm: "2.5rem" },
                       marginTop: { xs: "3rem", sm: "1.5rem" },
                       fontSize: { xs: "19px", sm: "20px" },
                     }}
                   >
                     Email *
                   </Typography>
                   <Input
                     onChange={handleInputChangeClientGranulesDeBois}
                     placeholder="Entrer votre Email"
                     name="email"
                     style={{
                       width: "250px",
                       height: "30px",
                       marginLeft:
                         window.innerWidth < 600 ? "3.9rem" : "5.3rem",
                       marginTop: window.innerWidth < 600 ? "1rem" : "2rem",
                     }}
                   />
                 </Box>
                 <Box
                   display={{ xs: "block", sm: "flex" }}
                   alignItems="center"
                   sx={{ gap: "5.5rem" }}
                 >
                   <Typography
                     style={{
                       color: "gray",
                       fontFamily: "Delicatessen Script",
                     }}
                     sx={{
                       marginLeft: { xs: "4rem", sm: "2.5rem" },
                       marginTop: { xs: "3rem", sm: "1.5rem" },
                       fontSize: { xs: "19px", sm: "20px" },
                     }}
                   >
                     Mot de Passe *
                   </Typography>
                   <Space
                     direction="vertical"
                     style={{
                       width: "250px",
                       height: "30px",
                       marginLeft: window.innerWidth < 600 ? "3.9rem" : "2rem",
                       marginTop: window.innerWidth < 600 ? "1rem" : "2rem",
                     }}
                   >
                     <Input.Password
                       onChange={handleInputChangeClientGranulesDeBois}
                       name="password"
                       placeholder="Entrer votre Mot de passe"
                       iconRender={(visible) =>
                         visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                       }
                     />
                   </Space>
                 </Box>
                 <Box
                   display={{ xs: "block", sm: "flex" }}
                   alignItems="center"
                   sx={{ gap: "1rem" }}
                 >
                   <Typography
                     style={{
                       color: "gray",
                       fontFamily: "Delicatessen Script",
                     }}
                     sx={{
                       marginLeft: { xs: "4rem", sm: "2.5rem" },
                       marginTop: { xs: "3rem", sm: "3rem" },
                       fontSize: { xs: "19px", sm: "20px" },
                     }}
                   >
                     Confirmer le Mot de Passe *
                   </Typography>
                   <Space
                     direction="vertical"
                     style={{
                       width: "250px",
                       height: "30px",
                       marginLeft: window.innerWidth < 600 ? "3.9rem" : "0",
                       marginTop: window.innerWidth < 600 ? "1rem" : "2rem",
                     }}
                   >
                     <Input.Password
                       onChange={handleInputChangeClientGranulesDeBois}
                       name="confirmer_mot_de_passe"
                       placeholder="Confirmer le mot de passe"
                       iconRender={(visible) =>
                         visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                       }
                     />
                   </Space>
                 </Box>
                 <Box
                   display={"flex"}
                   alignItems="center"
                   marginTop={"2rem"}
                   marginLeft={"2rem"}
                   sx={{ gap: "1rem" }}
                 >
                   <Checkbox
                     {...label}
                     defaultChecked
                     onChange={handleInputChangeClientGranulesDeBois}
                   />
                   <Typography
                     style={{
                       fontSize: window.innerWidth < 600 ? "13px" : "16px",
                       color: theme.palette.grey[700],
                       fontFamily: "Delicatessen Script",
                     }}
                   >
                     Déclare avoir lu les conditions générales de vente, les
                     conditions générales <br /> d'utilisation et la politique
                     de confidentialité de ASF.
                   </Typography>
                 </Box>
                 <Box
                   display={"flex"}
                   alignItems="center"
                   marginTop={"2rem"}
                   marginLeft={"2rem"}
                   sx={{ gap: "1rem" }}
                 >
                   <Checkbox
                     {...label}
                     defaultChecked
                     onChange={handleInputChangeClientGranulesDeBois}
                   />
                   <Typography
                     style={{
                       fontSize: window.innerWidth < 600 ? "13px" : "16px",
                       color: theme.palette.grey[700],
                       fontFamily: "Delicatessen Script",
                     }}
                   >
                     Accepte de recevoir les promotions sur les produits et
                     services proposés par ASF.
                   </Typography>
                 </Box>
                 <div
                   style={{
                     justifyContent: "center",
                     display: "flex",
                     marginTop: "2rem",
                   }}
                 >
                   <Button
                     onClick={handleSubmitClientGranulesDeBois}
                     type="primary"
                     style={{
                       backgroundColor: "#333",
                       color: "#fff",
                       borderRadius: "0",
                       width: 200,
                       height: 50,
                       fontSize: 20,
                       fontFamily: "Montserrat",
                     }}
                   >
                     S'INCRIRE
                   </Button>
                 </div>
               </Box>
              )}

              {selectedOption === "ClientGaz&Èlectrecité" && (
                <Box>
                  <Box
                    display={{ xs: "block", sm: "flex" }}
                    alignItems="center"
                    sx={{ gap: "2rem" }}
                  >
                    <Typography
                      style={{
                        color: "gray",
                        fontFamily: "Delicatessen Script",
                      }}
                      sx={{
                        marginLeft: { xs: "4rem", sm: "2.5rem" },
                        marginTop: { xs: "3rem", sm: "3.5rem" },
                        fontSize: { xs: "19px", sm: "20px" },
                      }}
                    >
                      Reference Client *
                    </Typography>
                    <Input
                    onChange={handleInputChangeClientGazElectrecite}
                    name="referenceClient"
                      placeholder="Reference"
                      style={{
                        width: "250px",
                        height: "30px",
                        marginLeft: "4rem",
                        marginTop: window.innerWidth < 600 ? "1rem" : "3.8rem",
                      }}
                    />
                  </Box>
                  <Box
                    display={{ xs: "block", sm: "flex" }}
                    alignItems="center"
                    sx={{ gap: "2rem" }}
                  >
                    <Typography
                      style={{
                        color: "gray",
                        fontFamily: "Delicatessen Script",
                      }}
                      sx={{
                        marginLeft: { xs: "4rem", sm: "2.5rem" },
                        marginTop: { xs: "3rem", sm: "3.5rem" },
                        fontSize: { xs: "19px", sm: "20px" },
                      }}
                    >
                      N° PCE ou PDL *
                    </Typography>
                    <Input
                     onChange={handleInputChangeClientGazElectrecite}
                      placeholder=" N° PCE ou PDL"
                      name="numeroPCEouPDL"
                      style={{
                        width: "250px",
                        height: "30px",
                        marginLeft:  window.innerWidth < 600 ? "4rem" : "5.2rem",
                        marginTop: window.innerWidth < 600 ? "1rem" : "4.8rem",
                      }}
                    />
                  </Box>
                  <Box
                    display={{ xs: "block", sm: "flex" }}
                    alignItems="center"
                    sx={{ gap: "7.6rem" }}
                  >
                    <Typography
                      style={{
                        color: "gray",
                        fontFamily: "Delicatessen Script",
                      }}
                      sx={{
                        marginLeft: { xs: "4rem", sm: "2.5rem" },
                        marginTop: { xs: "3rem", sm: "3.5rem" },
                        fontSize: { xs: "19px", sm: "20px" },
                      }}
                    >
                      Email *
                    </Typography>
                    <Input
                     onChange={handleInputChangeClientGazElectrecite}
                      placeholder="Entrer votre Email"
                      name="email"
                      style={{
                        width: "250px",
                        height: "30px",
                        marginLeft:window.innerWidth < 600 ? "4.2rem" : "4.8rem",
                        marginTop: window.innerWidth < 600 ? "1rem" : "3.8rem",
                      }}
                    />
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems="center"
                    marginTop={"2rem"}
                    marginLeft={"2rem"}
                    sx={{ gap: "1rem" }}
                  >
                    <Checkbox {...label} defaultChecked />
                    <Typography
                      style={{
                        fontSize: window.innerWidth < 600 ? "13px" : "16px",
                        color: theme.palette.grey[700],
                        fontFamily: "Delicatessen Script",
                      }}
                    >
                      Déclare avoir lu les conditions générales de vente, les
                      conditions générales <br /> d'utilisation et la politique
                      de confidentialité de ASF.
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems="center"
                    marginTop={"2rem"}
                    marginLeft={"2rem"}
                    sx={{ gap: "1rem" }}
                  >
                    <Checkbox {...label} defaultChecked />
                    <Typography
                      style={{
                        fontSize: window.innerWidth < 600 ? "13px" : "16px",
                        color: theme.palette.grey[700],
                        fontFamily: "Delicatessen Script",
                      }}
                    >
                      Accepte de recevoir les promotions sur les produits et
                      services proposés par ASF.
                    </Typography>
                  </Box>
                  <div
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      marginTop: "2rem",
                    }}
                  >
                    <Button
                    onClick={handleSubmitClientGazElectrecite}
                      type="primary"
                      style={{
                        backgroundColor: "#333",
                        color: "#fff",
                        borderRadius: "0",
                        width: 200,
                        height: 50,
                        fontSize: 20,
                        fontFamily: "Montserrat",
                      }}
                    >
                      S'INCRIRE
                    </Button>
                  </div>
                </Box>
              )}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default MonCompte;
