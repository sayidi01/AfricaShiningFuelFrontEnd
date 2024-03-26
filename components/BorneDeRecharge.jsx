import React from "react";
import NavBar from "./NavBar";
import { Box, Grid, Typography ,Button} from "@mui/material";
import Footer from "./Footer";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Input } from "antd";
const { TextArea } = Input;
function BorneDeRecharge() {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box sx={{ marginTop: { xs: "2rem", sm: "6rem" } }}>
            <img src="../src/images/descBORNERECHARGE1.jpeg" width={550} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            sx={{
              marginTop: { xs: "2rem", sm: "7rem" },
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 22 },
              marginLeft: { xs: "1rem", sm: "0rem" },
            }}
          >
            Plongez dans l'avenir de la mobilité écologique avec les bornes{" "}
            <br />
            électriques DBT, disponibles chez{" "}
            <span style={{ color: "#FFA447" }}> Africa Shining Fuel </span>{" "}
            grâce <br /> à notre partenariat de longue date avec cette marque
            prestigieuse. <br /> Ces bornes de recharge de pointe sont conçues
            pour répondre <br /> aux besoins croissants des véhicules
            électriques, offrant une solution <br />
            pratique et fiable pour les entreprises et les particuliers. Avec
            leur <br />
            technologie avancée et leur fiabilité éprouvée, les bornes DBT{" "}
            <br />
            représentent le choix idéal pour ceux qui recherchent une{" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              recharge <br />
              efficace{" "}
            </span>{" "}
            et{" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              respectueuse de l'environnement
            </span>
            .
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              marginTop: { xs: "2rem", sm: "15rem" },
              marginLeft: { xs: "0rem", sm: "6rem" },
            }}
          >
            <img src="../src/images/descBORNERECHARGE2.png" width={550} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography sx={{fontFamily: 'inherit', fontSize: {xs: 18, sm: 22}, marginTop: {xs: '2rem', sm: '15rem'},marginLeft: {xs: '1rem', sm: '0rem'} }}>
            Chez <span  style={{ color: "#FFA447" }}> Africa Shining Fuel</span>, nous nous engageons à fournir <br/> à nos
            clients des solutions de mobilité électrique de <span  style={{ fontWeight: "bold" }}> qualité <br/> supérieure </span> .
            Grâce à notre <span  style={{ fontWeight: "bold" }}>  partenariat avec DBT </span>, nous  <br/>sommes en mesure de
            proposer une gamme complète de  <br/> bornes électriques adaptées à divers
            besoins. Que ce soit <br/> pour des applications résidentielles,
            commerciales ou <br/> industrielles, nos bornes DBT sont conçues pour
            offrir <br/> une <span  style={{ fontWeight: "bold" }}>  performance optimale </span> et une <span  style={{ fontWeight: "bold" }}> facilité d'utilisation </span> . <br/>
            Optez pour <span  style={{ color: "#FFA447" }}>  Africa Shining Fuel</span> et les bornes électriques  <br/>DBT pour
            une transition vers une mobilité plus propre  <br/> et plus durable, avec
            la tranquillité d'esprit que vous méritez.
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
            Devis Borne De Recharge
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

export default BorneDeRecharge;
