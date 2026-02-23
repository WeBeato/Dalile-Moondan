import { useEffect, useState } from "react";
import AdminLogin from "../components/AdminLogin";
import PendingMessages from "../components/PendingMessages";

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
