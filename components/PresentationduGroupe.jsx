import React from "react";
import NavBar from "./NavBar";
import { Grid, Typography } from "@mui/material";
import Footer from "./Footer";

function PresentationduGroupe() {
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
            , nous sommes bien plus qu'une simple entreprise de distribution de
            carburants. Nous sommes un groupe diversifié et dynamique, engagé à
            fournir des solutions énergétiques innovantes et durables à nos
            clients à travers le Maroc.
          </Typography>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 22 },
              marginLeft: { xs: "1rem", sm: "5rem" },
              marginTop: { xs: "3rem", sm: "4rem" },
            }}
          >
            Fondé sur des valeurs solides et une vision ambitieuse, notre groupe
            opère dans plusieurs secteurs clés de l'industrie énergétique,
            allant de la distribution de carburants à la production d'énergies
            renouvelables. Notre présence diversifiée nous permet de répondre
            aux besoins énergétiques variés de nos clients, tout en contribuant
            au développement économique et social de notre pays.
          </Typography>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 22 },
              marginLeft: { xs: "1rem", sm: "5rem" },
              marginTop: { xs: "3rem", sm: "4rem" },
            }}
          >
            Avec des décennies d'expérience dans le secteur, nous avons
            développé une expertise inégalée dans la gestion et la distribution
            de carburants, ainsi
            <br /> que dans le développement de solutions énergétiques
            innovantes. Notre engagement envers l'excellence opérationnelle et
            la satisfaction client guide chacune de nos actions, nous permettant
            de rester un leader de l'industrie énergétique au Maroc.
          </Typography>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: 18, sm: 22 },
              marginLeft: { xs: "1rem", sm: "5rem" },
              marginTop: { xs: "3rem", sm: "4rem" },
            }}
          >
            Chez{" "}
            <span style={{ color: "#FFA447", fontWeight: "bold" }}>
              {" "}
              Africa Shining Fuel{" "}
            </span>
            , nous sommes fiers de notre héritage, mais nous regardons aussi
            vers l'avenir avec optimisme et détermination. Nous sommes résolus à
            continuer à innover et à investir dans des solutions énergétiques
            durables qui contribuent à un avenir meilleur pour nos clients,
            <br /> nos collaborateurs et notre planète.
          </Typography>
        </Grid>
      </Grid>
      <Footer marginTop={'6rem'}/>
    </div>
  );
}

export default PresentationduGroupe;
