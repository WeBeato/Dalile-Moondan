import { useEffect } from "react";
import AdminLogin from "../components/AdminLogin";
import PendingMessages from "../components/PendingMessages";
import Header from "../components/Header";

export default function ReviewMessages({ isAdmin, setIsAdmin }) {
  useEffect(() => {
    const admin = localStorage.getItem("isAdmin");
    if (admin === "true") {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="review-messages">
      <Header />
      {!isAdmin && <AdminLogin setIsAdmin={setIsAdmin} />}
      {isAdmin && <PendingMessages />}
    </div>
  );
}
