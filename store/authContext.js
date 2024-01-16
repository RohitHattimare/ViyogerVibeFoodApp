import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext } from "react";
import { useState } from 'react';

//create a context and initialise it for auto completion
export const AuthContext = createContext({
    token: "",
    isAuthenticated: false,
    logout: () => { },
    authenticate: (token) => { },
})

//create a contextProvider wrapper where reducers are defined 
export const AuthContextProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState('');

    function authenticate(token) {
        setAuthToken(token);
        AsyncStorage.setItem('token', token);
    }

    function logout() {
        setAuthToken(null);
        AsyncStorage.removeItem('token');
    }
    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;