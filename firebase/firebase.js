import firebase, { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";
// @ts-ignore
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { firebase_config } from './config';
// Your app's Firebase configuration
export const firebaseConfig = firebase_config_dev;

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebase_config);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const STORAGE = getStorage(FIREBASE_APP);
export const auth = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});


export default FIREBASE_APP;