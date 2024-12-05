/**
Name: Tamara Slone
Date: 12/4/24
Description: Aids in the authentcation process through firebase and allows the user to log in.
*/

import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { firebaseApp, googleAuthProvider } from "./firebase"; 
import Login from "./Login"; 

const App = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(firebaseApp);

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); 
      }
    });

    return () => unsubscribe();
  }, [auth]);

  
  const authenticate = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider); 
    } catch (error) {
      console.error("Error during login: ", error);
    }
  };

  
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error during logout: ", error);
    }
  };

  return (
    <div>
      {!user ? (
        <Login authenticate={authenticate} />
      ) : (
        <div>
          <h1>Welcome, {user.displayName}!</h1>
          <button onClick={logout}>Log Out</button>
        </div>
      )}
    </div>
  );
};

export default App;
