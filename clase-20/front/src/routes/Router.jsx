import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Layout from "../components/Layout";
import Detalle from "../pages/Detalle";
import ProtectedRoute from "../components/ProtectedRoute";
import Logout from "../pages/Logout";

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
        path: "/login",
        element: <Login />
      },
      {
        path: "/logout",
        element: <Logout />
      }
    ]
  }
]);

export default router
