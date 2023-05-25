import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './Context'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-b1yqo86isu0l6iir.us.auth0.com"
    clientId="4JfGYPchWviUTFS7VmCRWsD1w4y2tnpC"
    redirectUri={window.location.origin}>
    <AppProvider>
      <App />
    </AppProvider>
  </Auth0Provider>
)
