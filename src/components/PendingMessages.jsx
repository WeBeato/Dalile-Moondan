import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { useFirestore } from "../hooks/useFirestore";
import "./PendingMessages.css";
import { motion } from "framer-motion";
import { db } from "../firebase/config";
import { useState } from "react";

export default function PendingMessages() {
  const { docs: pendingMessages, isLoading } = useFirestore("pendingMessages");
  const [Loading, setloading] = useState(false);

  const handleAction = async (action) => {
    if (action === "approve") {
      try {
        setloading(true);

        // add pending message to messages collection
        const messagesRef = collection(db, "messages");
        await addDoc(messagesRef, pendingMessages[0]);

        // delete pending message from pendingMessages collection
        const pendingMessagesRef = doc(db, "pendingMessages", pendingMessages[0].id);
        await deleteDoc(pendingMessagesRef);

        setloading(false);
      } catch (err) {
        console.log(err);
      }
    }
    if (action === "reject") {
      try {
        // delete pending message from pendingMessages collection
        const pendingMessagesRef = doc(db, "pendingMessages", pendingMessages[0].id);
        await deleteDoc(pendingMessagesRef);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <motion.div
      className="pending-massages"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {isLoading && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          درحال دریافت پیام...
        </motion.p>
      )}

      {pendingMessages.length === 0 ? (
        <p>پیامی برای بررسی وجود ندارد</p>
      ) : (
        <div className="message" key={pendingMessages[0].id}>
          <p className="message__text">{pendingMessages[0].textMessage}</p>
          <p className="message__author">{pendingMessages[0].author}</p>
        </div>
      )}

      <div className="buttons-wrapper">
        <button
          className="approve-btn"
          onClick={() => handleAction("approve")}
        >
          {Loading ? "درحال تایید..." : "تایید"}
        </button>
        <button
          className="reject-btn"
          onClick={() => handleAction("reject")}
        >
          رد
        </button>
      </div>
    </motion.div>
  );
}
