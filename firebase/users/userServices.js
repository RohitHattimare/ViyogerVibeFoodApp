import { Alert } from "react-native";
import { firebaseConfig } from "../config";
import axios from "axios";
const API_KEY = firebaseConfig.apiKey;
console.log(API_KEY);

async function authenticate({ mode, email, password }) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
    });
    return response.data.idToken;

}

export function createUser(email, password) {
    return authenticate({ mode: "signUp", email, password });
}

export function login(email, password) {
    return authenticate({ mode: "signInWithPassword", email, password });
}

export async function signupUser({ email, password, authCtx }) {
    try {
        const token = await createUser(email, password);
        authCtx.authenticate(token);
    } catch (error) {
        Alert.alert("Authentication Failed", "Could not create user, please check your input and try again.");
    }
}

export async function loginUser({ email, password, authCtx }) {
    try {
        const token = await login(email, password);
        authCtx.authenticate(token);
        console.log("token ", token);
    } catch (error) {
        Alert.alert("Authentication Failed", "Could not log you in, please check your credentials.");
    }
}
