
import Gazoil from "./Gazoil.jsx"
import LandingPage from "./LandingPage.jsx"

import MonCompte from "./MonCompte.jsx"

export const PublicRoutes = [
    {
        id: 1,
        path: '/gazoil',
        element: <Gazoil/>

    },
    {
        id: 2,
        path: '/landing',
        element: <LandingPage/>
    },
    {
        id: 3,
        path: '/compte',
        element: <MonCompte/>
    }
]



