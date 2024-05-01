import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app);
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)

    // User Create
    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login
    const login = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout
    const logOut = () => {
        setloading(true)
        return signOut(auth)
    }

    // set user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            setloading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const updateuserprofile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        updateuserprofile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}