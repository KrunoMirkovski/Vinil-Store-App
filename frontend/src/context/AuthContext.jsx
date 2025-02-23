import {  createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

// Creating authentication context
const AuthContext =  createContext();

// Custom hook to use authentication context
export const useAuth = () => {
    return useContext(AuthContext)
}

// Google authentication provider instance
const googleProvider = new GoogleAuthProvider();

// Authentication provider component
export const AuthProvider = ({children}) => {
    // State to store the currently authenticated user
    const [currentUser, setCurrentUser] = useState(null);
    // State to track loading status
    const [loading, setLoading] = useState(true);

    // register a user
    const registerUser = async (email,password) => {

        return await createUserWithEmailAndPassword(auth, email, password);
    }

    // login user
    const loginUser = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password)
    }

    // singup with google
    const signInWithGoogle = async () => {
     
        return await signInWithPopup(auth, googleProvider)
    }

    // logout the user
    const logout = () => {
        return signOut(auth)
    }

    // manage user authentication state changes
    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
            // Extracting user information
            if(user) {
                const {email, displayName, photoURL} = user;
                const userData = {
                    email, username: displayName, photo: photoURL
                } 
            }
        })
        // Cleanup function to unsubscribe from auth state listener
        return () => unsubscribe();
    }, [])

    // Value object containing authentication functions and user state
    const value = {
        currentUser,
        loading,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}