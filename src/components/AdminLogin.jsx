import "./AdminLogin.css";
import { useState } from "react";
import { useFirestore } from "../hooks/useFirestore";
import { motion } from "framer-motion";

export default function AdminLogin({ setIsAdmin }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const { docs: admin } = useFirestore("admin");

  const handleLogin = () => {
    if (user === admin[0].user && pass === admin[0].pass) {
      localStorage.setItem("isAdmin", "true");
      setIsAdmin(true);
    } else {
      setError("نام کاربری یا رمز اشتباه است.");
    }
  };

  return (
    <motion.div
      className="admin-login"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <form className="admin-login__form" onSubmit={handleLogin}>
        <h3 className="admin-login__title">ورود ادمین</h3>

        <label className="admin-login__label">
          <span>نام کاربری:</span>
          <input
            type="text"
            className="admin-login__input"
            required
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
        </label>

        <label className="admin-login__label">
          <span>رمز عبور:</span>
          <input
            type="password"
            className="admin-login__input"
            required
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
        </label>

        <button className="admin-login__btn">ورود</button>

        <p className="error">{error}</p>
      </form>
    </motion.div>
  );
}
