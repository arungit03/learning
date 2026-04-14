import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import LoginModal from "./components/login";
import { auth } from "./firebase";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        setShowModal(false);
      }
    });

    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <main className="app">
      <div className="card">
        <h1>Firebase Login and Signup</h1>

        {user ? (
          <>
            <p>You are logged in as:</p>
            <p className="user-email">{user.email}</p>
            <button onClick={handleLogout} type="button">
              Logout
            </button>
          </>
        ) : (
          <>
            <p>Click the button to open the login or signup modal.</p>
            <button onClick={() => setShowModal(true)} type="button">
              Open Modal
            </button>
          </>
        )}
      </div>

      <LoginModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </main>
  );
}

export default App;
