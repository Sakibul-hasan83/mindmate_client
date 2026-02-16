import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "./firebase.config";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // 🔹 Create New User + Send Email Verification
  const newUser = async (email, password) => {
    setLoader(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(result.user);
      return result;
    } catch (error) {
      throw error;
    } finally {
      setLoader(false);
    }
  };

  // 🔹 Login User
  const Login = async (email, password) => {
    setLoader(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      throw error;
    } finally {
      setLoader(false);
    }
  };

  // 🔹 Logout User
  const logout = async () => {
    setLoader(true);
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    } finally {
      setLoader(false);
    }
  };

  // 🔹 Observe Auth State
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });

    return () => unSubscribe();
  }, []);

  const AuthInfo = {
    user,
    loader,
    newUser,
    Login,
    logout,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
