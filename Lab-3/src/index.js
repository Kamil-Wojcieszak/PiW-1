import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {GoogleOAuthProvider} from "@react-oauth/google";
import AuthProvider from "./context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <GoogleOAuthProvider clientId='570604909594-dp07h8dn98esqr6tp4qqj8c0jhr1orpl.apps.googleusercontent.com'>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </GoogleOAuthProvider>
    </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
