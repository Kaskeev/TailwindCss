import styles from "./App.module.scss";
import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.parent}>
      <h1 className={styles.heading}>Hello</h1>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={styles.buttonParent}>Login</button>
    </div>
  );
}

export default App;
