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
import Usuarios from "../pages/auth/usuarios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute element={<Home />} rol={0} />,
      },
      {
        path: "/detalle/:idPersonaje",
        element: <ProtectedRoute element={<Detalle />} rol={0}/>
      },
      {
        path: "/nuevo-personaje",
        element: <ProtectedRoute element={<NuevoPersonaje />} rol={1}/>
      },
      {
        path: "/modificar-personaje/:idPersonaje",
        element: <ProtectedRoute element={<ModificarPersonaje />} rol={1}/>
      },
      {
        path: "/borrar-personaje/:idPersonaje",
        element: <ProtectedRoute element={<DeletePersonaje />} rol={2}/>
      },
      {
        path: "/usuarios",
        element: <ProtectedRoute element={<Usuarios />} rol={2}/>
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
