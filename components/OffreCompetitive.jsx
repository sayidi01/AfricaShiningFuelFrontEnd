import React from "react";
import NavBar from "./NavBar";
import { Grid, Typography } from "@mui/material";
import Footer from "./Footer";

function OffreCompetitive() {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 22 },
              fontFamily: "Delicatessen Script",
              marginTop: { xs: "2rem", sm: "4rem" },
              marginLeft: { xs: "1rem", sm: "5rem" },
            }}
          >
            Chez{" "}
            <span style={{ color: "#FFA447", fontWeight: "bold" }}>
              {" "}
              Africa Shining Fuel{" "}
            </span>
            , nous nous engageons à offrir à nos clients des offres compétitives
            qui répondent à leurs besoins en matière de carburants
            <br /> et de services connexes. Notre objectif est de fournir des
            solutions rentables et de haute qualité tout en maintenant un
            excellent rapport qualité- prix.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 22 },
              fontFamily: "Delicatessen Script",
              marginTop: { xs: "2rem", sm: "4rem" },
              marginLeft: { xs: "1rem", sm: "5rem" },
            }}
          >
           <span style={{fontWeight: 'bold'}}>  Nos offres compétitives </span> sont le résultat d'une expertise approfondie
            du marché et d'une analyse minutieuse des besoins de nos clients.
            <br /> Nous travaillons en étroite collaboration avec nos
            partenaires pour développer des solutions innovantes et
            personnalisées qui répondent <br /> aux défis spécifiques de chaque
            secteur d'activité.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 22 },
              fontFamily: "Delicatessen Script",
              marginTop: { xs: "2rem", sm: "4rem" },
              marginLeft: { xs: "1rem", sm: "5rem" },
            }}
          >
            En tant que leader du marché, nous nous engageons à rester à la
            pointe de l'industrie en matière d'efficacité opérationnelle et
            d'optimisation <br /> des coûts. Nos offres compétitives sont
            conçues pour offrir une valeur ajoutée tangible à nos clients, en
            leur permettant de réaliser des économies substantielles tout en
            bénéficiant de produits et de services de haute qualité.
          </Typography>
          <Typography  sx={{
              fontSize: { xs: 18, sm: 22 },
              fontFamily: "Delicatessen Script",
              marginTop: { xs: "2rem", sm: "4rem" },
              marginLeft: { xs: "1rem", sm: "5rem" },
            }}>
            Chez <span style={{ color: "#FFA447", fontWeight: "bold" }} > ASF </span>, nous sommes fiers de notre réputation d'offrir des
            offres compétitives qui dépassent les attentes de nos clients et qui
            contribuent à  <br />leur succès. Nous nous engageons à continuer à innover
            et à élever les normes de l'industrie pour offrir des solutions
            encore plus compétitives  <br />à nos clients.
          </Typography>
        </Grid>
      </Grid>
      <Footer marginTop={'6rem'}/>
    </div>
  );
}

export default OffreCompetitive;
