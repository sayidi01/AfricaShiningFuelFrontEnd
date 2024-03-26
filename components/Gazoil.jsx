import { Typography, Grid, Box , Button} from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import { useTheme } from "@mui/material/styles";
import Footer from "../components/Footer"

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Input } from "antd";
const { TextArea } = Input;
function Gazoil() {
  const theme = useTheme();
  return (
    <div>
      <NavBar />
      <Typography
        sx={{
          fontSize: { xs: 19, sm: 24 },
          marginLeft: { xs: "1rem", sm: "8rem" },
          marginTop: { xs: "2rem", sm: "4rem" },
        }}
        style={{ color: "#FFA447", fontFamily: "inherit", fontWeight: "bold" }}
      >
        Gasoil Excellence et Services de Qualité par Africa Shining Fuel :
      </Typography>

      <Grid container>
        <Grid
          item
          xs={6}
          sm={7}
          sx={{
            marginTop: { xs: "3rem", sm: "4rem" },
            textAlign: { xs: "left", sm: "center" },
          }}
        >
          <img src="../src/images/descGAZOIL.jpeg" width={550} />
        </Grid>
        <Grid item xs={12} sm={5} marginTop={{ xs: "0rem", sm: "7rem" }}>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 20 },
              fontFamily: "inherit",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Explorez l'excellence énergétique
            <br /> avec <span style={{ fontWeight: "bold" }}>Gasoil</span>{" "}
            Excellence, une véritable
            <br /> quintessence de{" "}
            <span style={{ fontWeight: "bold" }}>qualité</span> , et plongez{" "}
            <br />
            dans un univers où la
            <span style={{ fontWeight: "bold" }}> fiabilité</span> , <br />{" "}
            <span style={{ fontWeight: "bold" }}>le sérieux</span> et{" "}
            <span style={{ fontWeight: "bold" }}>l'engagement</span> définissent
            <br /> notre mission. Chez{" "}
            <span style={{ color: "#FFA447" }}>Africa Shining Fuel</span>,<br />{" "}
            la qualité transcende chaque aspect de
            <br />
            notre offre, du carburant que nous <br /> fournissons à la
            prestation de nos services.
          </Typography>
        </Grid>
      </Grid>
      <Typography
        sx={{
          fontFamily: "inherit",
          fontSize: { xs: 19, sm: 20 },
          marginTop: { xs: "3rem", sm: "3rem" },
          textAlign: { xs: "center", sm: "left" },
          marginLeft: { xs: "0rem", sm: "8.5rem" },
        }}
      >
        Notre Gasoil Excellence incarne la norme d'or de{" "}
        <span style={{ fontWeight: "bold" }}>qualité</span> dans le secteur des
        carburants. Chaque <br /> goutte résulte d'un processus de raffinage
        rigoureux, garantissant une pureté inégalée, préservant la <br />
        performance de vos moteurs et vous offrant une tranquillité d'esprit
        inébranlable. Opter pour notre <br /> gasoil, c'est choisir la fiabilité
        à chaque ravitaillement.
      </Typography>
      <Grid container>
        <Grid
          item
          xs={6}
          sm={7}
          sx={{
            marginTop: { xs: "3rem", sm: "4rem" },
            textAlign: { xs: "left", sm: "center" },
          }}
        >
          <img src="../src/images/descGazoil2.png" width={550} />
        </Grid>
        <Grid item xs={12} sm={5} marginTop={{ xs: "0rem", sm: "10rem" }}>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 20 },
              fontFamily: "inherit",
              textAlign: { xs: "center", sm: "left" },
              marginTop: "2rem",
            }}
          >
            En plus de la qualité exceptionnelle de notre carburant, <br />{" "}
            notre engagement envers la{" "}
            <span style={{ fontWeight: "bold" }}> qualité de service</span> est
            tout <br /> aussi intransigeant. Notre équipe dédiée s'engage à{" "}
            <br />
            fournir des services irréprochables, alliant expertise <br /> et
            dévouement pour répondre à vos besoins énergétiques spécifiques.{" "}
            <br /> La <span style={{ fontWeight: "bold" }}>
              ponctualité
            </span>{" "}
            est notre promesse ; chaque livraison est orchestrée avec <br />
            précision pour respecter vos échéances.
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            marginTop: { xs: "3rem", sm: "4rem" },
            textAlign: { xs: "left", sm: "center" },
          }}
        >
          <img src="../src/images/descGAZOIL3.png" width={550} />
        </Grid>
        <Grid item xs={12} sm={6} marginTop={{ xs: "2rem", sm: "10rem" }}>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 20 },
              fontFamily: "inherit",
              textAlign: { xs: "center", sm: "left" },
              marginTop: { xs: "2rem", sm: "10rem" },
            }}
          >
            Notre sérieux et notre engagement ne se limitent pas à la qualité{" "}
            {window.innerWidth < 600 ? null : <br />} du produit, mais
            définissent également notre approche de service.{" "}
            {window.innerWidth < 600 ? null : <br />} Nous sommes plus qu'un
            fournisseur de carburant ; nous sommes un{" "}
            <span style={{ fontWeight: "bold" }}>partenaire engagé</span> dans
            votre succès. Chez{" "}
            <span style={{ color: "#FFA447" }}>Africa Shining Fuel</span>, nous{" "}
            considérons chaque interaction comme une occasion
          </Typography>
        </Grid>
      </Grid>
      <Typography
        sx={{
          fontSize: { xs: 18, sm: 18 },
          fontFamily: "inherit",
          textAlign: { xs: "center", sm: "left" },
          marginTop: "2rem",
          marginLeft: { xs: "0rem", sm: "8rem" },
        }}
      >
        de démontrer notre dévouement envers la qualité, la ponctualité et le
        sérieux, établissant ainsi une relation de confiance à long terme avec
        nos clients.
        <br /> Optez pour l'excellence totale avec Gasoil Excellence et Services
        de Qualité par Africa Shining Fuel, et découvrez une énergie qui
        transcende les attentes
      </Typography>
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
            Devis Gazole
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
      <Footer marginTop="50px" />
    </div>
  );
}

export default Gazoil;
