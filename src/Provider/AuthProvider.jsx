import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {auth} from "../Firebase/firebase.config"
import axios from "axios";


export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const loginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth, (currentUser) =>{
            const userEmail = currentUser?.email || user?.email
            const loggedUser = {email: userEmail}
            setUser(currentUser)
            setLoading(false)
            if(currentUser){
                axios.post('https://blog-website-server-omega.vercel.app/api/v1/jwt', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log('token res', res.data)
                })
            }
            else{
                axios.post('https://blog-website-server-omega.vercel.app/api/v1/jwt/logout', loggedUser, {withCredentials: true} )
                .then(res =>{
                    console.log('clearing token from cookie, ', res.data);
                })
            }
        })
        return () =>{
            return subscribe()
        }
    },[user?.email])

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        loginWithGoogle,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}