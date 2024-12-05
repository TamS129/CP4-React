import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { firebaseApp, googleAuthProvider } from "./firebase"; // Import Firebase setup
import Login from "./Login"; // Import Login Component

const App = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(firebaseApp);

  // Check if the user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set user when logged in
      }
    });

    return () => unsubscribe();
  }, [auth]);

  // Authenticate using Google
  const authenticate = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider); // Trigger Google login
    } catch (error) {
      console.error("Error during login: ", error);
    }
  };

  // Log out function
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear user on logout
    } catch (error) {
      console.error("Error during logout: ", error);
    }
  };

  return (
    <div>
      {!user ? (
    // Show login button if user is not logged in
        <Login authenticate={authenticate} />
      ) : (
        // Show user content if logged in
        <div>
          <h1>Welcome, {user.displayName}!</h1>
          <button onClick={logout}>Log Out</button>
          {/* Other app content */}
        </div>
      )}
    </div>
  );
};

export default App;
