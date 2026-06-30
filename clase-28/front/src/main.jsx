import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from './routes/Router';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "react-toastify/ReactToastify.css"
import { GoogleOAuthProvider } from '@react-oauth/google';

import { SessionProvider } from './contexts/Session.context';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="27211128354-7ivqtj14t820g6j4tvg6o9s3n19kpuhb.apps.googleusercontent.com">
      <SessionProvider>
        <RouterProvider router={router} />
      </SessionProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
