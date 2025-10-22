import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { 
  createUserWithEmailAndPassword, 
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth';
import auth from '../../firebase.init';

const AuthProvider = ({ children }) => {

  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState(null);

  // Create a new user
  const newUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  Login existing user
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  Logout current user
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  //  Observe user state changes
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });

    // Cleanup to unsubscribe listener when component unmounts
    return () => unSubscribe();
  }, []);

  //  Auth info to share via Context
  const authInfo = {
    loader,
    user,
    newUser,
    loginUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
