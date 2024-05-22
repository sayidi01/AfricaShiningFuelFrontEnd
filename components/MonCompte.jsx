import { Typography, Grid, Stack, Box, TextField, Button } from "@mui/material";
import NavBar from "./NavBar";
import React, { useCallback, useContext, useEffect, useState } from "react";
import "../src/MonCompte.css";
import { useTheme } from "@mui/material/styles";
import { axiosInstance } from "../src/api";
import { toast } from "react-hot-toast";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import iconsperson1 from "../src/images/icons8-personne-homme-64.png";
import iconsperson2 from "../src/images/new user.png";

import { UserOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space } from "antd";
import Footer from "./Footer";
import Checkbox from "@mui/material/Checkbox";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
function MonCompte() {
  const navigate = useNavigate();
  const theme = useTheme();
  const { setData, setisConnected, isConnected } = useContext(UserContext);
  const [selectedOption, setSelectedOption] = useState("ClientGazoil");

  useEffect(() => {
    if (isConnected) {
      navigate("/AccountCustomer");
    }
  }, [isConnected]);

  const handleChangeSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };

  const [loginCustomer, setLoginCustomer] = useState({
    email: "",
    password: "",
  });

  const handleInputChangeLoginCustomer = (e) => {
    const { name, value } = e.target;
    setLoginCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [customerClientFuelOil2, setcustomerClientFuelOil2] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmer_mot_de_passe: "",
  });

  const handleInputChangeClientFuelOil2 = (e) => {
    const { name, value } = e.target;
    setcustomerClientFuelOil2((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [customerClientGazoil, setCustomerClientGazoil] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmer_mot_de_passe: "",
  });

  const [clientBoisChauffage, setClientBoisChauffage] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmer_mot_de_passe: "",
  });

  const handleInputChangeClientBoisChauffage = (e) => {
    const { name, value } = e.target;
    setClientBoisChauffage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInputChangeClientGazoil = (e) => {
    const { name, value } = e.target;
    setCustomerClientGazoil((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitClientGazoil = useCallback(() => {
    console.log(customerClientGazoil);

    axiosInstance
      .post("/customer", {
        ...customerClientGazoil,
        customerType: selectedOption,
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setisConnected(true);
        navigate("/AccountCustomer");
        toast.success(data.message ?? "votre compte se crée avec succès");
      })

      .catch((err) => {
        console.log(err);
      });
  }, [customerClientGazoil, selectedOption]);

  const handleSubmitClientFuelOil2 = useCallback(() => {
    console.log(customerClientFuelOil2);
    axiosInstance
      .post("/customer/clientFeulOil2", {
        ...customerClientFuelOil2,
        customerType: selectedOption,
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setisConnected(true);
        navigate("/AccountCustomer");
        toast.success(data.message ?? "votre compte se crée avec succès");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [customerClientFuelOil2, selectedOption]);

  const handleSubmitClientBoisChauffage = useCallback(() => {
    console.log(clientBoisChauffage);
    axiosInstance
      .post("/customer/clientBoisChauffage", {
        ...clientBoisChauffage,
        customerType: selectedOption,
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setisConnected(true);
        navigate("/AccountCustomer");
        toast.success(
          response.data.message ?? "Votre compte a été créé avec succès"
        );
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la création du client Bois Chauffage :",
          error
        );
        toast.error(
          "Une erreur s'est produite lors de la création du client Gaz Electrecite"
        );
      });
  }, [clientBoisChauffage, selectedOption]);

  const handleSubmitLoginCustomer = useCallback(() => {
    axiosInstance
      .post("/customer/login", {
        ...loginCustomer,
        customerType: selectedOption,
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setisConnected(true);
        navigate("/AccountCustomer");
        toast.success(res.data.message ?? "Vous êtes connecté");
      })
      .catch((err) => {
        console.log("erreur connexion", err);
        toast.error(
          "Une erreur s'est produite lors de la connexion du customer"
        );
      });
  }, [loginCustomer, setSelectedOption]);

  return (
    <div>
      <NavBar />
      <Grid py={4} container className="mon-compte-container">
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
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          marginTop: 4,
          gap: {
            md: 0,
            xs: 2,
          },
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          style={{
            borderRight: "2px solid gray",
            backgroundColor: "rgba(235, 235, 235, 0.5)",
          }}
          sx={{ paddingY: 4 }}
        >
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <div style={{ marginRight: "10px" }}>
              <img width={50} src={iconsperson1} />
            </div>
            <Box>
              <Typography
                variant="h5"
                style={{
                  color: "#659a9a",
                  fontFamily: "inherit",
                  fontWeight: "bolder",
                }}
              >
                Vous avez déjà un compte ?
              </Typography>
              <Typography
                variant="caption"
                style={{
                  alignItems: "center",
                  display: "flex",
                  fontWeight: "bold",
                  color: "#4F4A45",
                }}
              >
                Connectez-vous à votre espace client{" "}
              </Typography>
            </Box>
          </Box>

          <Stack px={2} my={4} gap={2}>
            <Box
              display={{ xs: "block", sm: "flex" }}
              alignItems="center"
              justifyContent={"space-around"}
              gap={9}
            >
              <Typography
                sx={{
                  fontFamily: "Delicatessen Script",
                  color: "gray",
                  whiteSpace: "nowrap",
                }}
                variant="body1"
              >
                Email *
              </Typography>
              <Input
                onChange={handleInputChangeLoginCustomer}
                placeholder="Enter your Email"
                name="email"
                prefix={<UserOutlined />}
              />
            </Box>
            <Box
              display={{ xs: "block", sm: "flex" }}
              gap={2}
              alignItems={"center"}
            >
              <Typography
                sx={{
                  fontFamily: "Delicatessen Script",
                  color: "gray",
                  whiteSpace: "nowrap",
                }}
                variant="body1"
              >
                Mot de passe *
              </Typography>
              <Input.Password
                name="password"
                placeholder="Enter your password"
                onChange={handleInputChangeLoginCustomer}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Box>
          </Stack>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              marginTop: "2rem",
            }}
          >
            <Button
              sx={{
                bgcolor: "rgb(101, 154, 154)",
                ":hover": { bgcolor: "rgb(101, 174, 174)" },
              }}
              onClick={handleSubmitLoginCustomer}
              variant="contained"
            >
              S'INDENTIFIER
            </Button>
          </div>
          <NavLink to={"/motdepasseoublier"}>
            <Typography
              mt={1}
              style={{
                color: "gray",
                fontFamily: "Delicatessen Script",
                textDecoration: "none",
                fontStyle: "italic",
              }}
              variant="body2"
              textAlign={"center"}
            >
              Vous avez oublié votre mode de passe
            </Typography>
          </NavLink>
        </Grid>
        <Grid item xs={12} md={6} sx={{ paddingY: 2 }}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
          >
            <div style={{ marginRight: "10px" }}>
              <img width={50} src={iconsperson2} />
            </div>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  color: "#659a9a",
                  fontFamily: "inherit",
                  fontWeight: "bolder",
                  maxWidth: {
                    xs: "17rem",
                    md: "100%",
                  },
                }}
              >
                Vous n'avez pas encore de compte ?
              </Typography>
              <Typography
                variant="caption"
                style={{
                  alignItems: "center",
                  display: "flex",
                  fontWeight: "bold",
                  color: "#4F4A45",
                }}
              >
                Créer un compte
              </Typography>
            </Box>
          </Box>
          <Stack p={3}>
            <Box mb={2}>
              <FormControl sx={{ width: "100%" }}>
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
                  }}
                >
                  <option value="ClientGazoil">Client Gasoil</option>
                  <option value="ClientFuelOil2">
                    Client Fuel oil n° 2
                  </option>
                  <option value="ClientBoisChauffage">
                    Client Bois Chauffage
                  </option>
                </NativeSelect>
              </FormControl>
            </Box>
            <Box>
              {selectedOption === "ClientGazoil" && (
                <Stack gap={2}>
                  <Box
                    display={{ xs: "block", sm: "flex" }}
                    alignItems="center"
                    justifyContent={"space-evenly"}
                    gap={2}
                  >
                    <Typography
                      style={{
                        color: "gray",
                        fontFamily: "Delicatessen Script",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Prénom *
                    </Typography>
                    <Input
                      onChange={handleInputChangeClientGazoil}
                      placeholder="Entrer votre Prenom"
                      name="first_name"
                      className="input-email-mobile"
                    />
                  </Box>
                  <Box
                    display={{ xs: "block", sm: "flex" }}
                    alignItems="center"
                    justifyContent={"space-evenly"}
                    gap={5}
                  >
                    <Typography
                      style={{
                        color: "gray",
                        fontFamily: "Delicatessen Script",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Nom *
                    </Typography>
                    <Input
                      onChange={handleInputChangeClientGazoil}
                      placeholder="Entrer votre Nom"
                      name="last_name"
                    />
                  </Box>
                  <Box
                    display={{ xs: "block", sm: "flex" }}
                    alignItems="center"
                    justifyContent={"space-evenly"}
                    gap={5}
                  >
                    <Typography
                      style={{
                        color: "gray",
                        fontFamily: "Delicatessen Script",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Email *
                    </Typography>
                    <Input
                      onChange={handleInputChangeClientGazoil}
                      placeholder="Entrer votre Email"
                      name="email"
                    />
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
                        whiteSpace: "nowrap",
                      }}
                    >
                      Mot de Passe *
                    </Typography>
                    <Input.Password
                      onChange={handleInputChangeClientGazoil}
                      name="password"
                      placeholder="Entrer votre Mot de passe"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
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
                        whiteSpace: "nowrap",
                      }}
                    >
                      Confirmer le Mot de Passe *
                    </Typography>
                    <Input.Password
                     onChange={handleInputChangeClientGazoil}
                      name="confirmer_mot_de_passe"
                      placeholder="Confirmer le mot de passe"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
                  </Box>
                  <div
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      marginTop: "2rem",
                    }}
                  >
                    <Button
                      sx={{
                        bgcolor: "rgb(101, 154, 154)",
                        ":hover": { bgcolor: "rgb(101, 174, 174)" },
                      }}
                      onClick={handleSubmitClientGazoil}
                      variant="contained"
                    >
                      S'INCRIRE
                    </Button>
                  </div>
                </Stack>
              )}

              {selectedOption === "ClientFuelOil2" && (
               
                <Stack gap={2}>
                  <Box
                    display={{ xs: "block", sm: "flex" }}
                    alignItems="center"
                    justifyContent={"space-evenly"}
                    gap={2}
                  >
                    <Typography
                      style={{
                        color: "gray",
                        fontFamily: "Delicatessen Script",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Prénom *
                    </Typography>
                    <Input
                     onChange={handleInputChangeClientFuelOil2}
                      placeholder="Entrer votre Prenom"
                      name="first_name"
                      className="input-email-mobile"
                    />
                  </Box>
                  <Box
                    display={{ xs: "block", sm: "flex" }}
                    alignItems="center"
                    justifyContent={"space-evenly"}
                    gap={5}
                  >
                    <Typography
                      style={{
                        color: "gray",
                        fontFamily: "Delicatessen Script",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Nom *
                    </Typography>
                    <Input
                     onChange={handleInputChangeClientFuelOil2}
                      placeholder="Entrer votre Nom"
                      name="last_name"
                    />
                  </Box>
                  <Box
                    display={{ xs: "block", sm: "flex" }}
                    alignItems="center"
                    justifyContent={"space-evenly"}
                    gap={5}
                  >
                    <Typography
                      style={{
                        color: "gray",
                        fontFamily: "Delicatessen Script",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Email *
                    </Typography>
                    <Input
                     onChange={handleInputChangeClientFuelOil2}
                      placeholder="Entrer votre Email"
                      name="email"
                    />
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
                        whiteSpace: "nowrap",
                      }}
                    >
                      Mot de Passe *
                    </Typography>
                    <Input.Password
                      onChange={handleInputChangeClientFuelOil2}
                      name="password"
                      placeholder="Entrer votre Mot de passe"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
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
                        whiteSpace: "nowrap",
                      }}
                    >
                      Confirmer le Mot de Passe *
                    </Typography>
                    <Input.Password
                     onChange={handleInputChangeClientFuelOil2}
                      name="confirmer_mot_de_passe"
                      placeholder="Confirmer le mot de passe"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
                  </Box>
                  <div
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      marginTop: "2rem",
                    }}
                  >
                    <Button
                      sx={{
                        bgcolor: "rgb(101, 154, 154)",
                        ":hover": { bgcolor: "rgb(101, 174, 174)" },
                      }}
                      onClick={handleSubmitClientFuelOil2}
                      variant="contained"
                    >
                      S'INCRIRE
                    </Button>
                  </div>
                </Stack>
              )}

              {selectedOption === "ClientBoisChauffage" && (
                 <Stack gap={2}>
                 <Box
                   display={{ xs: "block", sm: "flex" }}
                   alignItems="center"
                   justifyContent={"space-evenly"}
                   gap={2}
                 >
                   <Typography
                     style={{
                       color: "gray",
                       fontFamily: "Delicatessen Script",
                       whiteSpace: "nowrap",
                     }}
                   >
                     Prénom *
                   </Typography>
                   <Input
                     onChange={handleInputChangeClientBoisChauffage}
                     placeholder="Entrer votre Prenom"
                     name="first_name"
                     className="input-email-mobile"
                   />
                 </Box>
                 <Box
                   display={{ xs: "block", sm: "flex" }}
                   alignItems="center"
                   justifyContent={"space-evenly"}
                   gap={5}
                 >
                   <Typography
                     style={{
                       color: "gray",
                       fontFamily: "Delicatessen Script",
                       whiteSpace: "nowrap",
                     }}
                   >
                     Nom *
                   </Typography>
                   <Input
                     onChange={handleInputChangeClientBoisChauffage}
                     placeholder="Entrer votre Nom"
                     name="last_name"
                   />
                 </Box>
                 <Box
                   display={{ xs: "block", sm: "flex" }}
                   alignItems="center"
                   justifyContent={"space-evenly"}
                   gap={5}
                 >
                   <Typography
                     style={{
                       color: "gray",
                       fontFamily: "Delicatessen Script",
                       whiteSpace: "nowrap",
                     }}
                   >
                     Email *
                   </Typography>
                   <Input
                     onChange={handleInputChangeClientBoisChauffage}
                     placeholder="Entrer votre Email"
                     name="email"
                   />
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
                       whiteSpace: "nowrap",
                     }}
                   >
                     Mot de Passe *
                   </Typography>
                   <Input.Password
                     onChange={handleInputChangeClientBoisChauffage}
                     name="password"
                     placeholder="Entrer votre Mot de passe"
                     iconRender={(visible) =>
                       visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                     }
                   />
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
                       whiteSpace: "nowrap",
                     }}
                   >
                     Confirmer le Mot de Passe *
                   </Typography>
                   <Input.Password
                    onChange={handleInputChangeClientBoisChauffage}
                     name="confirmer_mot_de_passe"
                     placeholder="Confirmer le mot de passe"
                     iconRender={(visible) =>
                       visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                     }
                   />
                 </Box>
                 <div
                   style={{
                     justifyContent: "center",
                     display: "flex",
                     marginTop: "2rem",
                   }}
                 >
                   <Button
                     sx={{
                       bgcolor: "rgb(101, 154, 154)",
                       ":hover": { bgcolor: "rgb(101, 174, 174)" },
                     }}
                     onClick={handleSubmitClientBoisChauffage}
                     variant="contained"
                   >
                     S'INCRIRE
                   </Button>
                 </div>
               </Stack>
              )}
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default MonCompte;
