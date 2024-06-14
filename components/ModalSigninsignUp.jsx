import React, { useState, useCallback, useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Input } from "antd";
import { toast } from "react-hot-toast";
import { Container, Grid, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosInstance } from "../src/api";
import UserContext from "../context/userContext";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
function ModalSigninsignUp({ onClose, onSignIn }) {
  const { setData, setisConnected } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [loginCustomer, setLoginCustomer] = useState({
    email: "",
    password: "",
  });
  const [customerClientGazoil, setCustomerClientGazoil] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleInputChangeClientGazoil = (e) => {
    const { name, value } = e.target;
    setCustomerClientGazoil((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInputChangeLoginCustomer = (e) => {
    const { name, value } = e.target;
    setLoginCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [open, setOpen] = useState(true);
  const [creatingAccount, setCreatingAccount] = useState(false);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleSignIn = () => {
    setOpen(false);
    setCreatingAccount(false);
    onSignIn();
  };

  const handleCreateAccount = () => {
    setCreatingAccount(true);
  };

  const handleLogin = () => {
    setCreatingAccount(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    maxWidth: "600px",
  };

  const handleSubmitLoginCustomer = useCallback(() => {
    axiosInstance
      .post("/customer/login", { ...loginCustomer })
      .then(({data}) => {
        console.log(data.data);
        setData(data.data);
        setisConnected(true);
        toast.success(data.message ?? "Vous êtes connecté");

        console.log(location.search);
        console.log(location.pathname);
        // Construct the new URL with existing query parameters
        const newUrl = `/shipping${location.search}`;
        console.log(newUrl);

        navigate(newUrl);
      })
      .catch((err) => {
        console.log("erreur connexion", err);
        toast.error(
          "Une erreur s'est produite lors de la connexion du customer"
        );
      });
  }, [loginCustomer, location]);

  const handleSubmitClientGazoil = useCallback(() => {
    console.log(customerClientGazoil);

    axiosInstance
      .post("/customer", {
        ...customerClientGazoil,
        customerType: "ClientGazoil",
      })
      .then(({data}) => {
        console.log(data);
        setData(data.data);
        setisConnected(true);
        toast.success(data.message ?? "votre compte se crée avec succès");

        const newUrl = `/shipping${location.search}`;
        console.log(newUrl);

        navigate(newUrl);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [customerClientGazoil, location]);

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            onClick={handleClose}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              cursor: "pointer",
            }}
          />
          <Container
            sx={{ my: 10 }}
            maxWidth={"lg"}
            style={{ padding: "none" }}
          >
            <Grid container justifyContent={"space-between"}>
              {creatingAccount ? (
                <Grid
                  container
                  item
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="h3" mb={3}>
                    Créer votre compte
                  </Typography>

                  <Box
                    display={{ xs: "block", sm: "flex" }}
                    sx={{ width: "100%" }}
                    alignItems="center"
                    justifyContent={"space-around"}
                    py="2rem"
                  >
                    <Typography
                      style={{
                        color: "gray",
                        fontFamily: "Delicatessen Script",
                      }}
                      sx={{
                        fontSize: { xs: "19px", sm: "20px" },
                      }}
                    >
                      Prénom *
                    </Typography>
                    <Input
                      onChange={handleInputChangeClientGazoil}
                      placeholder="Entrer votre Prenom"
                      name="first_name"
                      style={{
                        width: "350px",
                        marginTop: 0,
                      }}
                    />
                  </Box>
                  <Box
                    display={{ xs: "block", sm: "flex" }}
                    sx={{ width: "100%" }}
                    alignItems="center"
                    justifyContent={"space-around"}
                    py="2rem"
                    gap={4}
                  >
                    <Typography
                      style={{
                        color: "gray",
                        fontFamily: "Delicatessen Script",
                      }}
                      sx={{
                        fontSize: { xs: "19px", sm: "20px" },
                      }}
                    >
                      Nom *
                    </Typography>
                    <Input
                      onChange={handleInputChangeClientGazoil}
                      placeholder="Entrer votre Nom"
                      name="last_name"
                      style={{
                        width: "350px",
                        marginTop: 0,
                      }}
                    />
                  </Box>
                  <Box
                    display={{ xs: "block", sm: "flex" }}
                    sx={{ width: "100%" }}
                    alignItems="center"
                    justifyContent={"space-around"}
                    py="2rem"
                    gap={4}
                  >
                    <Typography
                      style={{
                        color: "gray",
                        fontFamily: "Delicatessen Script",
                      }}
                      sx={{
                        fontSize: { xs: "19px", sm: "20px" },
                      }}
                    >
                      Email *
                    </Typography>
                    <Input
                      onChange={handleInputChangeClientGazoil}
                      placeholder="Entrer votre Email"
                      name="email"
                      style={{
                        width: "350px",
                        marginTop: 0,
                      }}
                    />
                  </Box>
                  <Box
                    display={{ xs: "block", sm: "flex" }}
                    sx={{ width: "100%" }}
                    alignItems="center"
                    justifyContent={"space-between"}
                    py="2rem"
                  >
                    <Typography
                      style={{
                        color: "gray",
                        fontFamily: "Delicatessen Script",
                      }}
                      sx={{
                        fontSize: { xs: "19px", sm: "20px" },
                        minWidth: "10rem",
                      }}
                    >
                      Mot de passe *
                    </Typography>
                    <Input.Password
                      onChange={handleInputChangeClientGazoil}
                      name="password"
                      placeholder="Entrer votre Mot de passe"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                      style={{
                        width: "350px",
                        marginTop: 0,
                      }}
                    />
                  </Box>

                  <Stack gap={1}>
                    <Button
                      sx={{ backgroundColor: "#659a9a", color: "white" }}
                      onClick={handleSubmitClientGazoil}
                    >
                      Créer un compte
                    </Button>
                    <Button
                      onClick={handleLogin}
                      variant="text"
                      size="small"
                    >
                      Vous avez déjâ un compte ? Connectez-vous!
                    </Button>
                  </Stack>
                </Grid>
              ) : (
                <Box>
                  <Typography variant="h4" mb={5} textAlign={"center"}>
                    Connectez vous
                  </Typography>
                  <Stack
                    alignItems="center"
                    gap={11}
                    justifyContent={"space-between"}
                    mb={2}
                    direction={"row"}
                  >
                    <Typography
                      style={{
                        color: "gray",
                        fontFamily: "Delicatessen Script",
                      }}
                      variant="body1"
                    >
                      Email *
                    </Typography>
                    <Input
                      onChange={handleInputChangeLoginCustomer}
                      name="email"
                      style={{
                        width: "350px",
                        marginTop: 0,
                      }}
                    />
                  </Stack>
                  <Stack
                    alignItems="center"
                    gap={2}
                    justifyContent={"space-between"}
                    marginBottom="3rem"
                    direction={"row"}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        color: "gray",
                        fontFamily: "Delicatessen Script",
                      }}
                    >
                      Mot de passe *
                    </Typography>
                    <Input.Password
                      onChange={handleInputChangeLoginCustomer}
                      name="password"
                      placeholder="Entrer votre Mot de passe"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                      style={{
                        width: "350px",
                        marginTop: 0,
                      }}
                    />
                  </Stack>
                  <Stack gap={1} alignContent={"center"}>
                    <Button
                      sx={{ backgroundColor: "#659a9a", color: "white" }}
                      onClick={handleSubmitLoginCustomer}
                    >
                      Je me connecte
                    </Button>
                    <Button variant="text" size="small" onClick={handleCreateAccount}>Créer un compte</Button>
                  </Stack>
                </Box>
              )}
            </Grid>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalSigninsignUp;
