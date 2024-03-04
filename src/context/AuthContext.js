import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import {setDoc, doc} from 'firebase/firestore'
const AuthContext = createContext()

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({})

    async function signUp(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            setUser(userCredential.user)
            setDoc(doc(db, 'users', email),{
                savedShows:[]
            })
            return userCredential.user
        } catch (error) {
            console.error("Error signing up:", error.message)
            throw error
        }
    }

    async function logIn(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            setUser(userCredential.user)
            return userCredential.user
        } catch (error) {
            console.error("Error logging in:", error.message)
            throw error
        }
    }

    async function logOut() {
        try {
            await signOut(auth)
            setUser({})
        } catch (error) {
            console.error("Error logging out:", error.message)
            throw error
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    })

    return (
        <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>{children}</AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}
