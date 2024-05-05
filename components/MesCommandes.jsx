import React, { useContext, useEffect, useState } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { axiosInstance } from "../src/api";
import UserContext from "../context/userContext";
import { toast } from "react-hot-toast";
function MesCommandes() {
  const [commandes, setCommandes] = useState([]);
  const { setData, setisConnected } = useContext(UserContext);

  useEffect(() => {
    axiosInstance
      .get("/orders/bycustomer", { ...commandes })
      .then(({ data }) => {
        console.log(data);
        setCommandes(data.data)
      });
  }, []);

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
              COMMANDES RÉCENTES
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ paddingTop: 2 }}>
            {commandes.length == 0 ? (
              <Typography
                sx={{
                  backgroundColor: "cornsilk",
                  color: "#B99470",
                  fontSize: { xs: 18, md: 20 },
                  fontWeight: "bold",
                }}
              >
                Vous n'avez jamais commandé.
              </Typography>
            ) : (
              commandes.map((comm) => (
                <Typography key={comm._id}>{comm.deliveryType}</Typography>
              ))
            )}
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MesCommandes;
