import React from "react";
import NavBar from "./NavBar";
import { Grid, Typography, Box } from "@mui/material";
import { Input } from "antd";
import TextField from "@mui/material/TextField";
import Footer from "./Footer";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function PolitiqueRH() {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 22 },
              marginLeft: { xs: "1rem", sm: "5rem" },
              marginTop: { xs: "3rem", sm: "7rem" },
            }}
          >
            Chez{" "}
            <span style={{ color: "#FFA447", fontWeight: "bold" }}>
              {" "}
              Africa Shining Fuel{" "}
            </span>
            , nous considérons nos employés comme notre atout le plus précieux.{" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              Notre politique RH{" "}
            </span>{" "}
            repose sur des valeurs de respect, d'intégrité et de développement
            professionnel. Nous sommes déterminés à offrir un environnement de
            travail inclusif, sécurisé et stimulant <br /> où chaque employé peut
            s'épanouir et contribuer à la réussite de notre entreprise.
          </Typography>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 22 },
              marginLeft: { xs: "1rem", sm: "5rem" },
              marginTop: { xs: "3rem", sm: "4rem" },
            }}
          >
            Nous croyons fermement en l'importance de l'équilibre entre vie
            professionnelle et vie personnelle, c'est pourquoi nous proposons
            des programmes
            <br /> de flexibilité et des avantages sociaux pour soutenir le
            bien-être de nos employés. De plus, nous encourageons la diversité
            et l'inclusion dans notre effectif, reconnaissant que la diversité
            des perspectives et des expériences renforce notre capacité
            d'innovation et de succès.
          </Typography>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 22 },
              marginLeft: { xs: "1rem", sm: "5rem" },
              marginTop: { xs: "3rem", sm: "4rem" },
            }}
          >
            Chez <span style={{ fontWeight: "bold" }}> ASF </span>, nous
            investissons dans le développement professionnel de nos employés, en
            leur offrant des opportunités de formation et de perfectionnement
            pour les aider à atteindre leur plein potentiel. Nous encourageons
            également la prise d'initiative et l'innovation, reconnaissant
            <br /> que chaque membre de notre équipe apporte une contribution
            unique à notre succès collectif.
          </Typography>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 22 },
              marginLeft: { xs: "1rem", sm: "5rem" },
              marginTop: { xs: "3rem", sm: "4rem" },
            }}
          >
            Enfin, nous nous engageons à maintenir des normes élevées en matière
            de santé et de sécurité au travail, en veillant à ce que nos
            employés<br />  disposent des ressources et de la formation nécessaires
            pour travailler de manière sûre et responsable. Chez{" "}
            <span style={{ color: "#FFA447", fontWeight: "bold" }}>
              {" "}
              Africa Shining{" "}
            </span>
            Fuel, nous sommes<br />  fiers de notre équipe dévouée et talentueuse, et
            nous nous engageons à soutenir leur croissance et leur succès à long
            terme.
          </Typography>
          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              marginTop: { xs: "4rem", sm: "6rem" },
              width: { sm: "70%" },
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Typography
              sx={{
                fontFamily: "revert-layer",
                fontSize: { xs: 18, sm: 22 },
                textAlign: "center",
              }}
            >
              Formulaire de Candidature - Soumettez votre CV
            </Typography>
            <Grid item xs={12} sm={12}>
              <Box sx={{ display: { xs: "block", sm: "flex" } }}>
                <Typography
                  sx={{
                    fontFamily: '"Delicatessen Script',
                    color: "gray",
                    fontSize: { xs: 18, sm: 22 },
                    marginTop: { xs: "2rem", sm: "5rem" },
                    marginLeft: { xs: "1rem", sm: "10rem" },
                  }}
                >
                  Prénom *
                </Typography>
                <TextField
                  id="filled-multiline-flexible"
                  multiline
                  maxRows={4}
                  variant="filled"
                  sx={{
                    width: "350px",
                    marginTop: { xs: "1rem", sm: "4rem" },
                    marginLeft: { xs: "1rem", sm: "10rem" },
                  }}
                />
              </Box>
              <Box sx={{ display: { xs: "block", sm: "flex" } }}>
                <Typography
                  sx={{
                    fontFamily: '"Delicatessen Script',
                    color: "gray",
                    fontSize: { xs: 18, sm: 22 },
                    marginTop: { xs: "2rem", sm: "5rem" },
                    marginLeft: { xs: "1rem", sm: "10rem" },
                  }}
                >
                  Nom *
                </Typography>
                <TextField
                  id="filled-multiline-flexible"
                  multiline
                  maxRows={4}
                  variant="filled"
                  sx={{
                    width: "350px",
                    marginTop: { xs: "1rem", sm: "4rem" },
                    marginLeft: { xs: "1rem", sm: "11.5rem" },
                  }}
                />
              </Box>
              <Box sx={{ display: { xs: "block", sm: "flex" } }}>
                <Typography
                  sx={{
                    fontFamily: '"Delicatessen Script',
                    color: "gray",
                    fontSize: { xs: 18, sm: 22 },
                    marginTop: { xs: "2rem", sm: "5rem" },
                    marginLeft: { xs: "1rem", sm: "10rem" },
                  }}
                >
                  Email *
                </Typography>
                <TextField
                  id="filled-multiline-flexible"
                  multiline
                  maxRows={4}
                  variant="filled"
                  sx={{
                    width: "350px",
                    marginTop: { xs: "1rem", sm: "4rem" },
                    marginLeft: { xs: "1rem", sm: "11rem" },
                  }}
                />
              </Box>
              <Box sx={{ display: { xs: "block", sm: "flex" } }}>
                <Typography
                  sx={{
                    fontFamily: "Delicatessen Script",
                    color: "gray",
                    fontSize: { xs: 18, sm: 22 },
                    marginTop: { xs: "2rem", sm: "5rem" },
                    marginLeft: { xs: "1rem", sm: "10rem" },
                  }}
                >
                  Lettre motivation :
                </Typography>
                <TextField
                  multiline
                  rows={6}
                  variant="outlined"
                  sx={{
                    width: "450px",
                    marginTop: { xs: "1rem", sm: "5rem" },
                    marginLeft: { xs: "0rem", sm: "5rem" },
                  }}
                />
              </Box>
              <Box sx={{ display: { xs: "block", sm: "flex" } }}>
                <Typography
                  sx={{
                    fontFamily: '"Delicatessen Script',
                    color: "gray",
                    fontSize: { xs: 18, sm: 22 },
                    marginTop: { xs: "4rem", sm: "5rem" },
                    marginLeft: { xs: "1rem", sm: "10rem" },
                  }}
                >
                  Attacher votre cv *
                </Typography>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                  sx={{
                    width: "250px",
                    height: "40px",
                    marginTop: { xs: "2rem", sm: "4rem" },
                    marginLeft: { xs: "1rem", sm: "5rem" },
                  }}
                >
                Charger Votre CV
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer marginTop={'10rem'}/>
    </div>
  );
}

export default PolitiqueRH;
