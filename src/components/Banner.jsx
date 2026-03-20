import { motion } from "framer-motion";

export default function Banner() {
  return (
    <motion.div
      className="banner-wrapper"
      initial={{ y: -250, opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: "spring", bounce: 0.5 }}
    >
      <div className="banner-ribbon">
        🎉 Many Many Happy Returns Of The My Cute Little Butkiii 🎉
      </div>
    </motion.div>
  );
}