import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Game from "./pages/Game";
import Reveal from "./pages/Reveal";
import Letter from "./pages/Letter";
import Hearts from "./components/Hearts";
import Music from "./components/Music";

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

export default function App() {
  const [page, setPage] = useState(0);

  const currentPage = [
    <Game key="game" next={() => setPage(1)} />,
    <Reveal key="reveal" next={() => setPage(2)} />,
    <Letter key="letter" />
  ][page];

  return (
    <>
      <Music />
      <Hearts />

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          {currentPage}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
