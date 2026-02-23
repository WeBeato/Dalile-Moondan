import { useState } from "react";
import Header from "../components/Header";
import CardMessage from "../components/CardMessage";
import Footer from "../components/Footer";
import SendMessageForm from "../components/SendMessageForm";
import { motion } from "framer-motion";

export default function Home({ savedMessages, setSavedMessages,isAdmin }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Header isAdmin={isAdmin}/>

      <CardMessage
        savedMessages={savedMessages}
        setSavedMessages={setSavedMessages}
      />
      <Footer setIsOpen={setIsOpen} />
      {isOpen && <SendMessageForm isOpen={isOpen} setIsOpen={setIsOpen} />}
    </motion.div>
  );
}
