
import Gazoil from "./Gazoil.jsx"

import MonCompte from "./MonCompte.jsx"
import MotDepasseOublier from "./MotDepasseOublier.jsx"
import Fuel2 from "./Fuel2.jsx"
import Citerne from "./Citerne.jsx"
import ProduitNettoyage from "./ProduitNettoyage.jsx"
import Lubrifiants from "./Lubrifiants.jsx"
import CarteCarburant from "./CarteCarburant.jsx"
import BorneDeRecharge from "./BorneDeRecharge.jsx"
import HydrogeneVert from "./HydrogeneVert.jsx"
import BoisDeChauffage from "./BoisDeChauffage.jsx"
import Livraison from "./Livraison.jsx"
import NettoyageCuve from "./NettoyageCuve.jsx"
import NettoyageDomicile from "./NettoyageDomicile.jsx"
import JaugeConnecte from "./JaugeConnecte.jsx"
import CollecteLubrifiant from "./CollecteLubrifiant.jsx"
import PourquoiChoisirASF from "./PourquoiChoisirASF.jsx"
import PresentationduGroupe from "./PresentationduGroupe.jsx"
import EngagementRSE from "./EngagementRSE.jsx"
import PolitiqueRH from "./PolitiqueRH.jsx"
import OffreCompetitive from "./OffreCompetitive.jsx"
import EquipeDediees from "./EquipeDediees.jsx"
import LandingPage from "./LandingPage.jsx"
import AbonnementTelepage from "./AbonnementTelepage.jsx"
import QuisSommesNous from "./QuisSommesNous.jsx"
import RelationsInvestiseurs from "./RelationsInvestiseurs.jsx"
import ActualitéASF from "./ActualitéASF.jsx"
import ContactezNous from "./ContactezNous.jsx"
import Maquette from "../components/Maquette.jsx"
import Shipping from "./Shipping.jsx"
import AccountCustomer from "./AccountCustomer.jsx"



export const PublicRoutes = [
    {
        id: 1,
        path: '/gazoil',
        element: <Gazoil/>

    },
    {
        id: 2,
        path: '/',
        element: <LandingPage />
    },
    {
        id: 3,
        path: '/compte',
        element: <MonCompte/>
    },
    {
        id: 4,
        path: '/motdepasseoublier',
        element: <MotDepasseOublier/>
    },
    {
        id: 5,
        path: '/Fuel2',
        element: <Fuel2/>
    },
    {
        id: 6,
        path: '/Lubrifiants',
        element: <Lubrifiants/>
    },
    {
        id: 7,
        path: '/Citerne',
        element: <Citerne/>,
    },
    {
        id: 8,
        path: "/BornesRecharge",
        element: <BorneDeRecharge/>,
    },
    {
        id: 9,
        path:"/produitnettoyage",
        element: <ProduitNettoyage/>

    },
    {
        id : 10,
        path: "/cartecarburant",
        element: <CarteCarburant/>
    },
    {
        id: 11,
        path: "/hydrogenevert",
        element: <HydrogeneVert/>
    },
    {
        id: 12,
        path: "/livraison",
        element: <Livraison/>
    },
    {
        id: 13,
        path: '/boischauffage',
        element: <BoisDeChauffage/>
    },
    {
        id: 14,
        path: '/nettoyagecuve',
        element: <NettoyageCuve/>
    },
    {
        id: 15,
        path: '/nettoyagedomicile',
        element: <NettoyageDomicile/>
    },
    {
        id: 16,
        path: '/jaugeconnecte',
        element: <JaugeConnecte/>
    },
    {
        id: 17,
        path: '/collectelubrifiant',
        element: <CollecteLubrifiant/>
    },
    {
        id: 18,
        path: '/pourquoichoisirASF',
        element: <PourquoiChoisirASF/>
    },
    {
        id: 19,
        path: '/presentationgroupe',
        element: <PresentationduGroupe/>
    },
    {
        id: 20,
        path: '/engagementrse',
        element: <EngagementRSE/>
    },
    {
        id: 21,
        path: '/politiqueRH',
        element: <PolitiqueRH/>

    },
    {
        id: 22,
        path: '/offrecompetitive',
        element: <OffreCompetitive/>
    },
    {
        id: 23,
        path: '/equipedediees',
        element: <EquipeDediees/>

    },
    {
        id: 24,
        path: '/abonnementtelepage',
        element: <AbonnementTelepage/>
    },
    {
        id: 25,
        path:'/quisommesnous',
        element: <QuisSommesNous/>
    },
    {
        id: 26,
        path: '/relationsinvestiseurs',
        element: <RelationsInvestiseurs/>
    },
    {
        id: 27,
        path: '/ActualiteASF',
        element: <ActualitéASF/>
    },
    {
        id: 28,
        path: '/contacteznous',
        element: <ContactezNous/>
        
    },
    {
        id: 29,
        path: '/order',
        element: <Maquette/>
    },
    {
        id: 30,
        path: "/shipping",
        element: <Shipping />
    },
    {
        id: 31,
        path: "/AccountCustomer",
        element: <AccountCustomer/>
    },
   
]



