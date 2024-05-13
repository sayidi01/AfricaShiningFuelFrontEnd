import React, { useCallback, useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  FormControl,
} from "@mui/material";
import Footer from "../components/Footer";

import UserContext from "../context/userContext";
import { useContext } from "react";
import { axiosInstance } from "../src/api";
import { toast } from "react-hot-toast";

function InformationsCompte() {
  const data = useContext(UserContext);
  console.log(data);

  const { setData, setisConnected, isConnected } = useContext(UserContext);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleModifyPasswordClick = () => {
    setShowPasswordForm((prev) => !prev);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setShowPasswordForm(false);
  };

  const handleSubmitChangePassword = useCallback(() => {
    if (newPassword !== confirmNewPassword) {
      toast.error("New password and confirm password do not match");
      return;
    }
    axiosInstance.put(
      `/customer/clientFioul/edit/${data.data._id}`,
      { currentPassword, newPassword },
      ...data
    );
    console
      .log(data.data)
      .then((data) => {
        console.log(data);
        // setData(data);
        toast.success("votre mot de passe est modifier");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error updating password");
      });
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setShowPasswordForm(false);
  }, [
    currentPassword,
    newPassword,
    confirmNewPassword,
    data.data._id,
    setData,
    setisConnected,
  ]);

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
              INFORMATIONS DU COMPTE
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} sx={{ paddingTop: 3 }}>
            <Typography sx={{ fontSize: 17 }}>
              {data.data.first_name} {data.data.last_name}
            </Typography>
            <Typography sx={{ fontSize: 17, paddingTop: 1 }}>
              {data.data.email}
            </Typography>
            <Typography
              sx={{
                fontSize: 17,
                paddingTop: 1,
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={handleModifyPasswordClick}
            >
              Modifier Mot de passe
            </Typography>
            {showPasswordForm && (
              <form onSubmit={handleFormSubmit}>
                <TextField
                  type="password"
                  label="Mot de passe actuel"
                  fullWidth
                  margin="normal"
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <TextField
                  type="password"
                  label="Nouveau mot de passe"
                  fullWidth
                  margin="normal"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <TextField
                  type="password"
                  label="Confirmez le nouveau mot de passe"
                  fullWidth
                  margin="normal"
                  required
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleSubmitChangePassword}
                >
                  Modifier
                </Button>
              </form>
            )}
          </Grid>
        </Grid>
      </Container>
      <Footer marginTop={"2rem"} />
    </div>
  );
}

export default InformationsCompte;
