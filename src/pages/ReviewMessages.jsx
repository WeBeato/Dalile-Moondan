import { useEffect, useState } from "react";
import AdminLogin from "../components/AdminLogin";
import PendingMessages from "../components/PendingMessages";
import { motion } from "framer-motion";

export default function ReviewMessages() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const admin = localStorage.getItem("isAdmin");
    if (admin === "true") {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="review-messages">
      {!isAdmin && <AdminLogin setIsAdmin={setIsAdmin} />}
      {isAdmin && <PendingMessages />}
    </div>
  );
}
