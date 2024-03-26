import { Box, Typography, Grid, Button } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Input } from "antd";
const { TextArea } = Input;

import Footer from "./Footer";

function Lubrifiants() {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              marginLeft: { xs: "0rem", sm: "7rem" },
              marginTop: { xs: "0rem", sm: "6rem" },
            }}
          >
            <img
              src="../src/images/descLUBRIFIANT1.png"
              alt="lubrifiants"
              width={550}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 22 },
              fontFamily: "inherit",
              marginTop: { xs: "1rem", sm: "11rem" },
              marginLeft: { xs: "1rem", sm: "0rem" },
            }}
          >
            Découvrez l'excellence à l'état pur avec nos lubrifiants de pointe{" "}
            <br />
            chez <span style={{ color: "#FFA447" }}>
              {" "}
              Africa Shining Fuel
            </span>{" "}
            . Chaque composition de nos lubrifiants <br /> reflète notre
            détermination inflexible à garantir une
            <span style={{ fontWeight: "bold" }}> qualité</span> {""}
            supérieure <br /> et des{" "}
            <span style={{ fontWeight: "bold" }}>performances</span> {""}{" "}
            exceptionnelles. Notre processus de développement rigoureux combine
            l'expertise technique et la recherche constante pour <br /> créer
            des lubrifiants qui dépassent les normes industrielles.
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 22 },
              marginLeft: { xs: "1rem", sm: "9rem" },
              marginTop: { xs: "5rem", sm: "10rem" },
            }}
          >
            La <span style={{ fontWeight: "bold" }}>qualité</span>{" "}
            exceptionnelle de nos lubrifiants se traduit par une protection
            accrue et des performances optimales pour vos moteurs, assurant une
            durabilité et une efficacité maximales.{" "}
            <span style={{ color: "#FFA447" }}> Chez Africa Shining Fuel </span>{" "}
            , la <span style={{ fontWeight: "bold" }}>satisfaction</span> du
            client est notre priorité, et c'est pourquoi nous nous engageons à
            fournir des lubrifiants qui répondent non seulement, mais qui
            dépassent les attentes.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              marginLeft: { xs: "0rem", sm: "7rem" },
              marginTop: { xs: "2rem", sm: "6rem" },
            }}
          >
            <img
              src="../src/images/descLUBRIFIANT2.png"
              alt="Lubrifiant"
              width={550}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              marginTop: {
                xs: "2rem",
                sm: "6rem",
              },
              marginLeft: { xs: "0rem", sm: "8rem" },
            }}
          >
            <img src="../src/images/descLUBRIFIANT3.jpeg" width={550} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 22 },
              marginLeft: { xs: "1rem", sm: "2rem" },
              marginTop: { xs: "1rem", sm: "18rem" },
            }}>
            Notre engagement envers la <span  style={{ fontWeight: "bold" }}> rigueur </span>  signifie que chaque lot de nos
            lubrifiants est soumis à des contrôles de qualité stricts,
            garantissant une uniformité et une fiabilité constantes. Ajoutez à
            cela notre engagement envers la <span  style={{ fontWeight: "bold" }}> ponctualité </span>, et vous avez
            l'assurance de recevoir des lubrifiants de haute qualité dans les
            délais convenus. Optez pour l'excellence avec <span  style={{ color: "#FFA447" }}> Africa Shining Fuel</span>,
            où la <span style={{ fontWeight: "bold" }} >qualité</span>, la fiabilité et la <span  style={{ fontWeight: "bold" }}> satisfaction client <br/> </span>  sont plus
            qu'une promesse, c'est notre <span  style={{ fontWeight: "bold" }} > engagement</span> quotidien.
          </Typography>
        </Grid>
      </Grid>
      <Box width="50%" margin="auto">
        <Typography
          style={{ borderBottom: "1px solid #FFA447" }}
          sx={{
            marginTop: { xs: "2rem", sm: "5rem" },
          }}
        ></Typography>
      </Box>
      <Grid container>
        <Grid container justifyContent="center" alignItems="center">
          <Typography
            sx={{
              fontSize: { xs: 20, sm: 30 },
              fontFamily: "inherit",
              marginTop: { xs: "4rem", sm: "6rem" },
              fontWeight: "bolder",
            }}
          >
            Devis Lubrifiants
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box
            display={"flex"}
            gap={6}
            alignItems={"center"}
            marginTop={{ xs: "2rem", sm: "1rem" }}
          >
            <Typography
              sx={{
                fontFamily: "inherit",
                fontSize: { xs: 20, sm: 23 },
                marginLeft: { xs: "1rem", sm: "8rem" },
              }}
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
                <FormControlLabel value="male" control={<Radio />} label="Mr" />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box
            display={{ xs: "block", sm: "flex" }}
            alignItems="center"
            sx={{ gap: "6rem" }}
          >
            <Typography
              style={{ color: "gray", fontFamily: "Delicatessen Script" }}
              sx={{
                marginLeft: { xs: "2rem", sm: "8rem" },
                marginTop: { xs: "3rem", sm: "3.5rem" },
                fontSize: { xs: "19px", sm: "20px" },
              }}
            >
              Nom *
            </Typography>
            <Input
              style={{
                width: "350px",
                height: "30px",
                marginLeft: "2rem",
              }}
              className="input-email-mobile"
            />
          </Box>
          <Box
            display={{ xs: "block", sm: "flex" }}
            alignItems="center"
            sx={{ gap: "6rem" }}
          >
            <Typography
              style={{ color: "gray", fontFamily: "Delicatessen Script" }}
              sx={{
                marginLeft: { xs: "2rem", sm: "8rem" },
                marginTop: { xs: "3rem", sm: "3.5rem" },
                fontSize: { xs: "19px", sm: "20px" },
              }}
            >
              Prenom *
            </Typography>
            <Input
              style={{
                width: "350px",
                height: "30px",
                marginLeft: "1rem",
              }}
              className="input-email-mobile"
            />
          </Box>
          <Box
            display={{ xs: "block", sm: "flex" }}
            alignItems="center"
            sx={{ gap: "2rem" }}
          >
            <Typography
              style={{ color: "gray", fontFamily: "Delicatessen Script" }}
              sx={{
                marginLeft: { xs: "2rem", sm: "8rem" },
                marginTop: { xs: "3rem", sm: "3.5rem" },
                fontSize: { xs: "19px", sm: "20px" },
              }}
            >
              Socité (facultatif)
            </Typography>
            <Input
              style={{
                width: "350px",
                height: "30px",
                marginLeft: "1rem",
              }}
              className="input-email-mobile"
            />
          </Box>
          <Box
            display={{ xs: "block", sm: "flex" }}
            alignItems="center"
            sx={{ gap: "5rem" }}
          >
            <Typography
              style={{ color: "gray", fontFamily: "Delicatessen Script" }}
              sx={{
                marginLeft: { xs: "2rem", sm: "8rem" },
                marginTop: { xs: "3rem", sm: "3.5rem" },
                fontSize: { xs: "19px", sm: "20px" },
              }}
            >
              Telephone *
            </Typography>
            <Input
              style={{
                width: "350px",
                height: "30px",
                marginLeft: "1rem",
              }}
              className="input-email-mobile"
            />
          </Box>
          <Box
            display={{ xs: "block", sm: "flex" }}
            alignItems="center"
            sx={{ gap: "2rem" }}
          >
            <Typography
              style={{ color: "gray", fontFamily: "Delicatessen Script" }}
              sx={{
                marginLeft: { xs: "2rem", sm: "8rem" },
                marginTop: { xs: "3rem", sm: "3.5rem" },
                fontSize: { xs: "19px", sm: "20px" },
              }}
            >
              Volume Gazole *
            </Typography>
            <Input
              style={{
                width: "350px",
                height: "30px",
                marginLeft: "1rem",
              }}
              className="input-email-mobile"
            />
          </Box>
          <Box
            display={{ xs: "block", sm: "flex" }}
            alignItems="center"
            sx={{ gap: "3rem" }}
          >
            <Typography
              style={{ color: "gray", fontFamily: "Delicatessen Script" }}
              sx={{
                marginLeft: { xs: "2rem", sm: "8rem" },
                marginTop: { xs: "3rem", sm: "3.5rem" },
                fontSize: { xs: "19px", sm: "20px" },
              }}
            >
              informations
              <br /> Complémentaires
            </Typography>
            <TextArea
              style={{
                marginTop: "3rem",
                width: "350px",
                marginLeft: window.innerWidth < 600 ? "2rem" : "0",
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
                textTransform: 'none',
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
              width: '350px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Typography
              sx={{
                fontFamily: "Delicatessen Script",
                fontSize: 23,
                marginLeft: "2rem",
              }}
            >
              SAS Fécourt
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

            >Tel : (+212)0 700 738 084 <br/> J.M. Senhaji</Typography>
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
      <Footer marginTop={'7rem'}/>
    </div>
  );
}

export default Lubrifiants;
