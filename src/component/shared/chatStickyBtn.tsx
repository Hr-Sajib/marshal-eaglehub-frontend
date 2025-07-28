"use client";
import Link from "next/link";
import { FaComments } from "react-icons/fa";
import { motion } from "framer-motion";

const StickyChatButton = () => {
  return (
    <Link href="/chat-box">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 p-4 rounded-full shadow-lg cursor-pointer transition duration-300 border-2 border-red-800"
        title="Open Chat"
      >
        <FaComments className="text-white text-2xl animate-pulse" />
      </motion.div>
    </Link>
  );
};

export default StickyChatButton;
