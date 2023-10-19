import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import auth from "./firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";




export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

    const [user, setUser ] = useState(null)

    const [loading, setLoading] = useState(true)

    console.log(user);
    useEffect(()=>{
        const observerRequest = onAuthStateChanged(auth, (newUser) => {
            setUser(newUser);
            setLoading(false)
        })
return ()=>observerRequest()
    },[])


    // google sign in
    const googleSignIn = () => {
       
        const googleProvider = new GoogleAuthProvider()

        return signInWithPopup(auth, googleProvider)
    }
//Create user
const createUser = (email, password)=>{
    setLoading(true)
return createUserWithEmailAndPassword(auth, email, password)
}

// sign with email and password
const logInWithPass = ( email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
// sign out 
const handleSignOut = ()=> {
setLoading(true)
signOut(auth)

}

//update profile
const userProfile = (user, name, image) =>{
    setLoading(true)
    return updateProfile(user,{
        displayName: name,
        photoURL: image,
    })
}

    const authInfo = {
        googleSignIn,
        loading,
        user,
        createUser,
        logInWithPass,
        handleSignOut,
        userProfile
    };
    
    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};
AuthProvider.propTypes ={
    children: PropTypes.node.isRequired,
}

export default AuthProvider;