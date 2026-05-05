import { createBrowserRouter } from "react-router"
import { lazy, Suspense } from "react"
// import Chat from "../page/Chat"
// import Personajes from "../page/Personajes"
// import Fetch from "../page/Fetch"
import Layout from "../components/Layout"

const Chat = lazy( () => import("../page/Chat") )
const Personajes = lazy( () => import("../page/Personajes") )
const Fetch = lazy( () => import("../page/Fetch") )

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Suspense fallback={ <p>Cargando...</p> } ><Personajes /></Suspense>,
            },
            {
                path: "/chat",
                element: <Suspense fallback={ <p>Cargando...</p> } ><Chat /></Suspense>,
            },
            {
                path: "/dogs",
                element: <Suspense fallback={ <p>Cargando...</p> } ><Fetch /></Suspense>,
            },
        ]
    }
])