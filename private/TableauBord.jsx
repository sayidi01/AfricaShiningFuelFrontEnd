import React, { useContext, useCallback } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { Button } from "antd";
import { axiosInstance } from "../src/api";
import UserContext from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Footer from "../components/Footer";
import CarnetAdresse from "../private/CarnetAdresse";


function TableauBord({ onEditClick }) {
  const navigate = useNavigate();
    
  const {setisConnected, data, isConnected} = useContext(UserContext)

  
  const Logout = useCallback(() => {
  
    axiosInstance
    .delete("/customer/logout")
    .then((data) => {
        setisConnected(false)
        toast.success("vous êtes Deconnetè")
        navigate("/")
        console.log(data)
    })
    .catch((err) => {
        console.log(err, "err")
    })
},[])
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
          <Grid
            item
            xs={12}
            md={12}
            sx={{ justifyContent: "flex-end", display: "flex",  paddingTop: 3 }}
          >
            <Button
            onClick={Logout}
              style={{
                color: "white",
                backgroundColor: "grey",
                height: 40,
                fontSize: 18,
              }}
            >
              Dèconnexion
            </Button>
          </Grid>
          {/* <Grid item xs={12} md={12}>
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
              CARNET D'ADRESSES
            </Typography>
          </Grid> */}
          {isConnected && data ? (
            <CarnetAdresse data={data} onEditClick={onEditClick} />
          ) : (
            <>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: { xs: 18, md: 20 }, paddingTop: 3 }}>
              Adresse Livraison
            </Typography>
            <Typography sx={{ color: "grey", paddingTop: 2 }}>
              Vous n'avez pas spécifié d'adresse de livraison.
            </Typography>
            <Box sx={{ paddingY: 2 }}>
              <Button
                onClick={onEditClick}
                style={{ color: "white", backgroundColor: "grey" }}
              >
                Èditer
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: { xs: 18, md: 20 }, paddingTop: 3 }}>
              ADRESSE DE FACTURATION
            </Typography>
            <Typography sx={{ color: "grey", paddingTop: 2 }}>
              Vous n'avez pas spécifié d'adresse de livraison.
            </Typography>
            <Box sx={{ paddingY: 2 }}>
              <Button
                onClick={onEditClick}
                style={{ color: "white", backgroundColor: "grey" }}
              >
                Èditer
              </Button>
            </Box>
          </Grid>
          </>
          )}
        </Grid>
      </Container>
     
    </div>
  );
}

export default TableauBord;
