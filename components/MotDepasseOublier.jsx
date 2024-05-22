import { Typography, Grid, Stack, Box } from "@mui/material";
import React, { useCallback, useState } from "react";
import NavBar from "./NavBar";
import { Button, Input } from "antd";
import Footer from "./Footer";
import { axiosInstance } from "../src/api";

function MotDepasseOublié() {
  // const [email, setEmail] = useState("")

  //  const handleInputemail = ((e) => {
  //     setEmail(e.target.value)
  //  })

  //  const handleSubmitEmail = useCallback(() => {
  //   axiosInstance
  //   .post("/customer/forgot-password", {email})
  //   .then((data) => {
  //     console.log(data)
  //     console.log("response api", data)
  //   })
  //   .catch((err) => {
  //     console.log(err,"Erreur lors de la requête")
  //   })

  //  },[email])

  return (
    <div>
      <NavBar />
      <Typography
        sx={{
          fontFamily: "Arial",
          fontSize: { xs: 26, sm: 38 },
          color: "#659a9a",
          marginLeft: { xs: "2rem", sm: "10rem" },
          marginTop: { xs: "2rem", sm: "3rem" },
          display: "inline-block",
          borderBottom: "6px solid #659a9a",
        }}
      >
        NOUVEAU MOT DE PASSE
      </Typography>
      <Grid
        sx={{
          backgroundColor: " rgba(235, 235, 235, 0.5) ",
          marginTop: { xs: "1rem", sm: "3.5rem" },
          paddingY: { xs: 8, sm: 12 },
        }}
        container
      >
        <Grid
          item
          xs={12}
          sm={12}
          sx={{
            backgroundColor: "white",
            paddingY: 10,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Arial",
              fontSize: { xs: 15, sm: 25 },
              color: "#659a9a",
              marginLeft: { xs: "2rem", sm: "10rem" },
              marginTop: { xs: "1rem", sm: "5rem" },
              display: "block",
              borderBottom: "3px solid #659a9a",
              width: "60%",
            }}
          >
            MOT DE PASSE OUBLIÉ
          </Typography>
          <Typography
            sx={{
              marginLeft: { xs: "2rem", sm: "10rem" },
              marginTop: { xs: "1rem", sm: "2rem" },
              fontFamily: "inherit",
            }}
          >
            Veuillez entrer votre adresse courriel ci-dessous pour recevoir un
            lien de réinitialisation du mot de passe.
          </Typography>
          <Box
            display={{ xs: "block", sm: "flex" }}
            alignItems="center"
            marginTop={{ xs: "2rem", sm: "3rem" }}
            sx={{ gap: "6rem" }}
          >
            <Typography
              sx={{ color: "gray", marginLeft: { xs: "2rem", sm: "10rem" } }}
            >
              Email *
            </Typography>
            <Input
              name="email"
              style={{
                width: "350px",
                height: "30px",
                marginLeft: window.innerWidth < 600 ? "1.9rem" : "5.3rem",
                marginTop: window.innerWidth < 600 ? "1rem" : "0rem",
              }}
            />
          </Box>
          <div
            style={{
              display: "flex",
              marginTop: "2rem",
              marginLeft: window.innerWidth < 600 ? "2rem" : "10rem",
            }}
          >
            <Button
              type="primary"
              style={{
                backgroundColor: "#333",
                color: "#fff",
                borderRadius: "0",
                width: 130,
                height: 50,
                fontSize: 15,
                fontFamily: "Montserrat",
              }}
            >
              Valider
            </Button>
          </div>
        </Grid>
      </Grid>
      <Typography style={{ border: "1px solid gray " }}></Typography>
      <Footer />
    </div>
  );
}

export default MotDepasseOublié;
