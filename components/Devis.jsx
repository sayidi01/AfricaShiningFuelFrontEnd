import React, { useCallback, useState , useContext} from "react";
import { Typography, Grid, Box, Button, Container } from "@mui/material";
import { toast } from "react-hot-toast";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Input } from "antd";
import { axiosInstance } from "../src/api";
import UserContext from "../context/userContext";
const { TextArea } = Input;
function Devis({ title, Volume, Société }) {
  const { setData,  setisConnected } = useContext(UserContext);
  const [devis, setDevis] = useState({
    civilité: "",
    nom: "",
    prenom: "",
    Société: "",
    telephone: "",
    Volume: "",
    informations_Complémentaires: "",
  })
  console.log(devis)

const handleInputChangeDevis = (e) => {
 const {name, value} = e.target
 setDevis((prev) => ({
  ...prev,
  [name]: value,
}));
};

const handleSubmitDevis = useCallback(() => {
  console.log(devis)
  axiosInstance
  .post("/devis", {...devis})
  .then((data) => {
    console.log(data)
    setData(data)
    setisConnected(true)
    toast.success(data.message ?? "votre Devis envoyé");
  })
  .catch((err) => {
    console.log(err)

  })
},[devis])


  return (
    <div>
      <Container sx={{ my: 10 }} maxWidth={"lg"} style={{ padding: "none" }}>
        <Grid container justifyContent={"space-between"}>
          <Grid container item justifyContent="center" alignItems="center">
            <Typography
              sx={{
                fontSize: { xs: 20, sm: 30 },
                fontFamily: "inherit",
                marginTop: { xs: "4rem", sm: "6rem" },
                fontWeight: "bolder",
              }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} >
            <Box display={"flex"} gap={4} alignItems={"center"} width={"100%"}  marginBottom="3rem" >
              <Typography
                sx={{
                  fontFamily: "inherit",
                }}
                variant="body1"
              >
                Civilité *
              </Typography>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Mme"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Mr"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box
              display={{ xs: "block", sm: "flex" }}
              alignItems="center"
              gap={2}
              justifyContent={"space-between"}
              marginBottom="3rem" 
            >
              <Typography
                style={{ color: "gray", fontFamily: "Delicatessen Script" }}
                sx={{
                  fontSize: { xs: "19px", sm: "20px" },
                }}
              >
                Nom *
              </Typography>
              <Input
              onChange={handleInputChangeDevis}
                style={{
                  width: "350px",
                  marginTop: 0,
                }}
              />
            </Box>
            <Box
              display={{ xs: "block", sm: "flex" }}
              alignItems="center"
              gap={2}
              justifyContent={"space-between"}
              marginBottom="3rem" 
            >
              <Typography
                style={{ color: "gray", fontFamily: "Delicatessen Script" }}
                sx={{
                  fontSize: { xs: "19px", sm: "20px" },
                }}
              >
                Prenom *
              </Typography>
              <Input
              onChange={handleInputChangeDevis}
                style={{
                  width: "350px",
                  marginTop: 0,
                }}
              />
            </Box>
            <Box
              display={{ xs: "block", sm: "flex" }}
              alignItems="center"
              gap={2}
              justifyContent={"space-between"}
              marginBottom="3rem" 
            >
              <Typography
                style={{ color: "gray", fontFamily: "Delicatessen Script" }}
                sx={{
                  fontSize: { xs: "19px", sm: "20px" },
                }}
              >
                {Société}
              </Typography>
              <Input
              onChange={handleInputChangeDevis}
                style={{
                  width: "350px",
                  marginTop: 0,
                }}
              />
            </Box>
            <Box
              display={{ xs: "block", sm: "flex" }}
              alignItems="center"
              gap={2}
              justifyContent={"space-between"}
              marginBottom="3rem" 
            >
              <Typography
                style={{ color: "gray", fontFamily: "Delicatessen Script" }}
                sx={{
                  fontSize: { xs: "19px", sm: "20px" },
                }}
              >
                Télephone *
              </Typography>
              <Input
              onChange={handleInputChangeDevis}
                style={{
                  width: "350px",
                  marginTop: 0,
                }}
              />
            </Box>
            <Box
              display={{ xs: "block", sm: "flex" }}
              alignItems="center"
              gap={2}
              justifyContent={"space-between"}
              marginBottom="3rem" 
            >
              <Typography
                style={{ color: "gray", fontFamily: "Delicatessen Script" }}
                sx={{
                  fontSize: { xs: "19px", sm: "20px" },
                }}
              >
                {Volume}
              </Typography>
              <Input
                style={{
                  width: "350px",
                  marginTop: 0,
                }}
                onChange={handleInputChangeDevis}
              />
            </Box>
            <Box
              display={{ xs: "block", sm: "flex" }}
              alignItems="center"
              gap={2}
              justifyContent={"space-between"}
              marginBottom="3rem" 
            >
              <Typography
                style={{ color: "gray", fontFamily: "Delicatessen Script" }}
                sx={{
                  fontSize: { xs: "19px", sm: "20px" },
                }}
              >
                informations Complémentaires
              </Typography>
              <TextArea
              onChange={handleInputChangeDevis}
                style={{
                  marginTop: 0,
                  width: "350px",
                }}
                rows={4}
              />
            </Box>
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
                  width: 150,
                  height: 50,
                  fontSize: 18,
                  fontFamily: "Montserrat",
                  textTransform: "none",
                }}
                
              >
                Envoyer
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                marginTop: "2rem",
                width: "350px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Delicatessen Script",
                  fontSize: 23,
                  marginLeft: "2rem",
                }}
              >
                SARL AFRICA SHINING FUEL
              </Typography>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: 20,
                  marginLeft: "2rem",
                  color: "gray",
                }}
              >
                CFC Anfa, Casablanca
              </Typography>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: 20,
                  marginLeft: "2rem",
                  color: "gray",
                }}
              >
                Tel : (+212)0 700 738 084 <br /> J.M. Senhaji
              </Typography>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: 20,
                  marginLeft: "2rem",
                  color: "gray",
                }}
              >
                contact@AfricaShiningFuel.ma
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Devis;