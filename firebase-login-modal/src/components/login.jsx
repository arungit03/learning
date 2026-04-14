import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }

      setEmail("");
      setPassword("");
      setIsSignup(false);
      onClose();
    } catch {
      setError(isSignup ? "Signup failed." : "Login failed.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose} type="button">
          X
        </button>

        <h2>{isSignup ? "Signup" : "Login"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          {error ? <p className="error">{error}</p> : null}

          <button type="submit">{isSignup ? "Signup" : "Login"}</button>
        </form>

        <button
          className="switch-button"
          onClick={() => {
            setIsSignup(!isSignup);
            setError("");
          }}
          type="button"
        >
          {isSignup ? "Already have an account? Login" : "Create new account"}
        </button>
      </div>
    </div>
  );
}

export default LoginModal;
