import {useEffect, useState} from "react";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        return onAuthStateChanged(auth, initializeUser);
    }, []);
}

