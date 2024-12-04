import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  
  import React from "react";
import { auth } from "../../firebase/firebase.config";
 
  
  export const AuthContext = createContext(null);
  const googleProvider = new GoogleAuthProvider();
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // creat new user
    const createNewUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
    // login user
    const logInUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
    // logout user
    const logOutUser = () => {
      return signOut(auth);
    };
    // sign In with google
    const signInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider);
    };
    // Forget Password 
    const forgetPassword = (email)=>{
      return sendPasswordResetEmail(auth,email);
    };
    // onAuthStateChanged
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => {
        unSubscribe();
      };
    }, []);
    const authInfo = {
      user,
      loading,
      createNewUser,
      logInUser,
      logOutUser,
      signInWithGoogle,
      forgetPassword,
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;