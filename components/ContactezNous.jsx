import React from "react";
import NavBar from "./NavBar";
import { Box, Container, Grid, Typography, FormControl , Button} from "@mui/material";
import { Form, Select, Input } from "antd";
import Footer from "./Footer";

function ContactezNous() {
  return (
    <div>
      <NavBar />
      <Container sx={{ my: 6 }} maxWidth={"lg"} style={{ padding: "none" }}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography sx={{ fontSize: { xs: 20, sm: 35 }, color: "#659a9a" }}>
              Contactez Nous
            </Typography>
            <Box
              sx={{ borderBottom: "5px solid", width: "9%", color: "#659a9a" }}
            ></Box>
            <FormControl>
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 18, sm: 24 }, paddingTop: 8 }}
                >
                  Vous contactez *
                </Typography>
                <Form.Item>
                  <Select style={{ width: 400, paddingTop: 10, height: 50 }}>
                    <Select.Option value="contact">
                      Choisir un contact
                    </Select.Option>
                    <Select.Option value="investisseurs">
                      Contacts Investisseurs
                    </Select.Option>
                    <Select.Option value="commercial">
                      Contact Commercial
                    </Select.Option>
                    <Select.Option value="rh">Contact RH</Select.Option>
                    <Select.Option value="sav">Contact Sav</Select.Option>
                  </Select>
                </Form.Item>
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 18, sm: 24 }, paddingTop: 3 }}
                >
                  Votre nom *
                </Typography>
                <Input style={{ height: 40 , marginTop: 10}} />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 18, sm: 24 }, paddingTop: 3 }}
                >
                  Votre prenom *
                </Typography>
                <Input style={{ height: 40 , marginTop: 10}} />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 18, sm: 24 }, paddingTop: 3 }}
                >
                  Votre telephone *
                </Typography>
                <Input style={{ height: 40 , marginTop: 10}} />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 18, sm: 24 }, paddingTop: 3 }}
                >
                  Votre email *
                </Typography>
                <Input style={{ height: 40 , marginTop: 10}} />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 18, sm: 24 }, paddingTop: 3 }}
                >
                  Votre Departement *
                </Typography>
                <Input style={{ height: 40 , marginTop: 10}} />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 18, sm: 24 }, paddingTop: 3 }}
                >
                 Objet*
                </Typography>
                <Input style={{ height: 40 , marginTop: 10}} />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 18, sm: 24 }, paddingTop: 3 }}
                >
                 Votre message*
                </Typography>
                <Input.TextArea rows={6} style={{marginTop: 10}} />
              </Box>
              <Button
                style={{
                  backgroundColor: "#659a99",
                  color: "white ",
                  textTransform: "capitalize",
                  borderRadius: 25,
                  fontSize: "15px",
                  marginTop: '2rem'
                }}
              >
                Envoyer
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
      <Footer marginTop={'4rem'}/>
    </div>
  );
}

export default ContactezNous;
