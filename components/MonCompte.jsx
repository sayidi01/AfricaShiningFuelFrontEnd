import { Typography, Grid, Stack, Box } from "@mui/material";
import NavBar from "./NavBar";
import React, { useState } from "react";
import "../src/MonCompte.css";
import { useTheme } from "@mui/material/styles";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import { UserOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
function MonCompte() {
  const theme = useTheme();
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
        <Grid item xs={12} sm={6} style={{ borderRight: "2px solid gray" }}>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <div style={{ marginRight: "10px" }}>
              <img
                width={50}
                src="../src/images/icons8-personne-homme-64.png"
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
              marginTop={{ xs: "2rem", sm: "3rem" }}
              sx={{ gap: "6rem" }}
            >
              <Typography
                sx={{
                  marginLeft: { xs: "2.5rem", sm: "11.5rem" },
                  fontFamily: "Delicatessen Script",
                  fontSize: { xs: "19px", sm: "20px" },
                  color: "gray",
                }}
              >
                Email
              </Typography>
              <Input
                placeholder="Enter your Email"
                prefix={<UserOutlined />}
                style={{
                  width: "250px",
                  marginLeft: "2.5rem",
                }}
                className="input-email-mobile"
              />
            </Box>
            <Box
              display={{ xs: "block", sm: "flex" }}
              marginTop={{ xs: "2rem", sm: "3rem" }}
              sx={{ gap: "5rem" }}
            >
              <Typography
                sx={{
                  marginLeft: { xs: "2.5rem", sm: "11.5rem" },
                  fontFamily: "Delicatessen Script",
                  fontSize: { xs: "19px", sm: "20px" },
                  color: "gray",
                }}
              >
                Mot de passe
              </Typography>
              <Space
                direction="vertical"
                className="input-password-mobile"
                style={{
                  marginLeft: window.innerWidth < 576 ? "2.5rem" : 0,
                  width: "250px",
                }}
              >
                <Input.Password
                  placeholder="input password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Space>
            </Box>
            <Box
              display={{ xs: "block", sm: "flex" }}
              marginTop={"2rem"}
              marginLeft={{ xs: "2.5rem", sm: "11.5rem" }}
            >
              <Typography
                style={{ color: "gray", fontFamily: "Delicatessen Script" }}
              >
                Vous avez oublié votre mode de passe
              </Typography>
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
        <Grid item xs={12} sm={6}>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{marginTop: {xs: '2rem', sm: '0'}, textAlign: 'center'}}>
            <div>
              <img src="../src/images/new user.png" width={50}/>
            </div>        
          <Typography
            style={{
              color: "#659a9a",
              fontFamily: "inherit",
              fontWeight: "bolder",
              fontSize: {xs: '1rem', sm: '1.6rem'}, 
            }}
          >
            VOUS N'AVEZ PAS ENCORE DE COMPTE ?
          </Typography>
            </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default MonCompte;
