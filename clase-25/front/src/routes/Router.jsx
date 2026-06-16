import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/crud/Home";
import Login from "../pages//auth/Login";
import Layout from "../components/Layout";
import Detalle from "../pages/crud/Detalle";
import ProtectedRoute from "../components/ProtectedRoute";
import Logout from "../pages/auth/Logout";
import Register from "../pages//auth/Register";
import NuevoPersonaje from "../pages/crud/NuevoPersonaje";
import ModificarPersonaje from "../pages/crud/ModificarPersonaje";
import DeletePersonaje from "../pages/crud/deletePersonaje";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute element={<Home />} />,
      },
      {
        path: "/detalle/:idPersonaje",
        element: <ProtectedRoute element={<Detalle />} />
      },
      {
        path: "/nuevo-personaje",
        element: <ProtectedRoute element={<NuevoPersonaje />} />
      },
      {
        path: "/modificar-personaje/:idPersonaje",
        element: <ProtectedRoute element={<ModificarPersonaje />} />
      },
      {
        path: "/borrar-personaje/:idPersonaje",
        element: <ProtectedRoute element={<DeletePersonaje />} />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/logout",
        element: <Logout />
      },
      {
        path: "*",
        element: <div>404</div>
      }
    ]
  }
]);

export default router
