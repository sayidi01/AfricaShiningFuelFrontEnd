import React, { useCallback, useState, useContext } from "react";
import NavBar from "./NavBar";
import { axiosInstance } from "../src/api";
import { toast } from "react-hot-toast";
import {
  Box,
  Container,
  Grid,
  Typography,
  FormControl,
  Button,
} from "@mui/material";
import { Form, Select, Input } from "antd";
import Footer from "./Footer";

import UserContext from "../context/userContext";

function ContactezNous() {
  const { setData, setisConnected } = useContext(UserContext);
  const [ContactezNous, setContactezNous] = useState({
    contactType: "",
    lastName: "",
    firstName: "",
    phone: "",
    email: "",
    department: "",
    subject: "",
    message: "",
  });
  console.log(ContactezNous);

  const handleInputChangeContactezNous = (e) => {
    if (e.target) {
      const { name, value } = e.target;
      setContactezNous((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmitContactezNous = useCallback(() => {
    console.log(ContactezNous);
    axiosInstance
      .post("/contactezNous", { ...ContactezNous })
      .then((data) => {
        console.log(data);
        setData(data);
        setisConnected(true);
        toast.success(data.message ?? "votre Formulaire envoyé");
      })
      .catch((err) => {
        console.log(err);
        toast.error( "erreur implementation");
      });
  }, [ContactezNous]);

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
                  <Select
                    onChange={(value) =>
                      handleInputChangeContactezNous({
                        target: { name: "contactType", value },
                      })
                    }
                    style={{ width: 400, paddingTop: 10, height: 50 }}
                  >
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
                <Input
                  onChange={handleInputChangeContactezNous}
                  name="lastName"
                  style={{ height: 40, marginTop: 10 }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 18, sm: 24 }, paddingTop: 3 }}
                >
                  Votre prenom *
                </Typography>
                <Input
                  onChange={handleInputChangeContactezNous}
                  name="firstName"
                  style={{ height: 40, marginTop: 10 }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 18, sm: 24 }, paddingTop: 3 }}
                >
                  Votre telephone *
                </Typography>
                <Input
                  onChange={handleInputChangeContactezNous}
                  name="phone"
                  style={{ height: 40, marginTop: 10 }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 18, sm: 24 }, paddingTop: 3 }}
                >
                  Votre email *
                </Typography>
                <Input
                  onChange={handleInputChangeContactezNous}
                  name="email"
                  style={{ height: 40, marginTop: 10 }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 18, sm: 24 }, paddingTop: 3 }}
                >
                  Votre Departement *
                </Typography>
                <Input
                  onChange={handleInputChangeContactezNous}
                  name="department"
                  style={{ height: 40, marginTop: 10 }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 18, sm: 24 }, paddingTop: 3 }}
                >
                  Objet*
                </Typography>
                <Input
                  onChange={handleInputChangeContactezNous}
                  name="subject"
                  style={{ height: 40, marginTop: 10 }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 18, sm: 24 }, paddingTop: 3 }}
                >
                  Votre message*
                </Typography>
                <Input.TextArea
                  onChange={handleInputChangeContactezNous}
                  name="message"
                  rows={6}
                  style={{ marginTop: 10 }}
                />
              </Box>
              <Button
                onClick={handleSubmitContactezNous}
                style={{
                  backgroundColor: "#659a99",
                  color: "white ",
                  textTransform: "capitalize",
                  borderRadius: 25,
                  fontSize: "15px",
                  marginTop: "2rem",
                }}
              >
                Envoyer
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
      <Footer marginTop={"4rem"} />
    </div>
  );
}

export default ContactezNous;
