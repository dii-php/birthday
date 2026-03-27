import { motion } from "framer-motion";

export default function Hearts() {
  const hearts = Array.from({ length: 15 });

  return hearts.map((_, i) => (
    <motion.div
      key={i}
      initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
      animate={{ y: "-10vh" }}
      transition={{
        duration: 5 + Math.random() * 5,
        repeat: Infinity
      }}
      style={{
        position: "fixed",
        fontSize: 20,
        opacity: 0.6,
        pointerEvents: "none"
      }}
    >
      🎈🎊
    </motion.div>
  ));
}