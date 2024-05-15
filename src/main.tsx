import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './reset.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import UserProvider from './providers/UserProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='187116866431-glt4u5aqcnklat1pf2dconftjlfo2929.apps.googleusercontent.com'>
      <UserProvider>
        <App />
      </UserProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
