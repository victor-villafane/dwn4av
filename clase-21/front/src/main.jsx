import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from './routes/Router';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const Session = createContext()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Session.Provider value={{ nombre: "homero" }} >
      <RouterProvider router={router} />
    </Session.Provider>
  </StrictMode>,
)
