import React from "react";
import NavBar from "./NavBar";
import { Box, Container, Grid, Typography } from "@mui/material";

function ContactezNous() {
  return (
    <div>
      <NavBar />
      <Container sx={{ my: 10 }} maxWidth={"lg"} style={{ padding: "none" }}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography sx={{ fontSize: { xs: 20, sm: 35 }, color: "#659a9a" }}>
              Contactez Nous
            </Typography>
            <Box sx={{ borderBottom : '2px solid', width: '9%', color: "#659a9a"}}>

            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ContactezNous;
