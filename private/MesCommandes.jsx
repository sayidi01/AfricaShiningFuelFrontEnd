import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Stack, Box } from "@mui/material";
import { axiosInstance } from "../src/api";
import { Divider, Table } from "antd";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Footer from "../components/Footer";

function MesCommandes() {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/orders/bycustomer")
      .then(({ data }) => {
        console.log(data);
        setCommandes(data.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  const columns = [
    {
      title: "prenom",
      dataIndex: "prenom",
      key: "prenom",
    },
    {
      title: "nom",
      dataIndex: "nom",
      key: "nom",
    },
    {
      title: "Code Postal",
      dataIndex: "codePostal",
      key: "codePostal",
    },
    {
      title: "Produits",
      dataIndex: "Products",
      key: "Products",
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
      key: "quantity",
    },
    {
      title: "Ville",
      dataIndex: "ville",
      key: "ville",
    },
    {
      title: "Type Livraison",
      dataIndex: "deliveryType",
      key: "deliveryType",
    },
    {
      title: "Total Prix",
      dataIndex: "TotalPrice",
      key: "TotalPrice",
    },
    {
      title: "Adresse",
      dataIndex: "adresse",
      key: "adresse",
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (text, record) => (
    //     <IconButton
    //       aria-label="delete"
    //       onClick={() => handleDelete(record.key)}
    //     >
    //       <DeleteIcon style={{ color: "red" }} />
    //     </IconButton>
    //   ),
    // },
  ];

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
          
          <Grid item xs={12} sm={6}>
            {commandes.length === 0 ? (
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
              <Stack sx={{ display: { lg: "none", md: "block" }, textAlign: "center", paddingTop: 3  }}>
                {commandes.map((order) => (
                  <div key={order.id}>
                    <Typography key={order.id}>
                      {" "}
                      prenom : {order.prenom}
                    </Typography>
                    <Typography key={order.id}> nom : {order.nom}</Typography>
                    <Typography key={order.id}>
                      {" "}
                      code Postal : {order.codePostal}
                    </Typography>
                    <Typography key={order.id}>
                      {" "}
                      produits : {order.Products}
                    </Typography>
                    <Typography key={order.id}>
                      {" "}
                      quantité : {order.Quantity}
                    </Typography>
                    <Typography key={order.id}>
                      {" "}
                      Type Livraion : {order.deliveryType}
                    </Typography>
                    <Typography key={order.id}>
                      {" "}
                      Total prix : {order.TotalPrice}
                    </Typography>
                    <Typography key={order.id}>
                      {" "}
                      Adresse : {order.adresse}
                    </Typography>
                    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Typography
                      sx={{
                        borderBottom: "2px solid #659a9a",
                        width: "70%",
                        my: 5
                        
                      }}
                    ></Typography>
                    </Box>
                  </div>
                ))}
              </Stack>
            )}
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </div>
  );
}

export default MesCommandes;
