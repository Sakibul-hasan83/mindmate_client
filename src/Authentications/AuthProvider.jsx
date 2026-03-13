import React, { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Create context for authentication and theme management
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // Initialize theme with 'light' as the default if nothing is stored in localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Apply theme classes to the document root and persist in localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle function to switch between light and dark modes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Firebase Auth: Create new user
  const newUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Firebase Auth: Sign in existing user
  const Login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Firebase Auth: Log out user
  const logout = () => {
    setLoader(true);
    return signOut(auth);
  };

  // Observe Firebase auth state changes
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false); // Stop loader once auth check is complete
    });
    return () => unSubscribe();
  }, []);

  // Exported context values
  const AuthInfo = { 
    user, 
    loader, 
    newUser, 
    Login, 
    logout, 
    theme, 
    toggleTheme 
  };

  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;