import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { clickSound, whooshSound } from "../components/Music";

export default function Game({ next }) {
  const [cups, setCups] = useState([0,1,2,3,4,5,6,7,8]);

  const [appleCup] = useState(() => Math.floor(Math.random() * 9));

  const [phase, setPhase] = useState("show"); // show | shuffle | pick | reveal | win
  const [selected, setSelected] = useState(null);

  const [fakeAppleCup, setFakeAppleCup] = useState(null);

  const realAppleIndex = cups.findIndex(c => c === appleCup);
  const fakeAppleIndex = cups.findIndex(c => c === fakeAppleCup);

  useEffect(() => {
    if (phase === "show") {
      // 🔥 tambah jeda jadi 2 detik (biar ga buru-buru)
      const t = setTimeout(() => setPhase("shuffle"), 2000);
      return () => clearTimeout(t);
    }
  }, [phase]);

  useEffect(() => {
    if (phase !== "shuffle") return;

    const intervalSpeed = 110;
    const duration = 4000;

    const interval = setInterval(() => {
      setCups(prev => {
        const arr = [...prev];
        const i = Math.floor(Math.random() * 9);
        const j = Math.floor(Math.random() * 9);
        [arr[i], arr[j]] = [arr[j], arr[i]];
        return arr;
      });
    }, intervalSpeed);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setPhase("pick");
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [phase]);

  const handlePick = (index) => {
    if (phase !== "pick") return;

    clickSound.play();
    setSelected(index);

    if (index === realAppleIndex) {
      let random;
      do {
        random = Math.floor(Math.random() * 9);
      } while (random === index);

      setFakeAppleCup(cups[random]);
    } else {
      setFakeAppleCup(appleCup);
    }

    setPhase("reveal");

    setTimeout(() => {
      whooshSound.stop();
      whooshSound.play();

      setPhase("win");
      confetti();
    }, 1600);
  };

  return (
    <div className="container glass">
      <h2>🍎 Where is the apple?</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 90px)",
          gap: 20,
          justifyContent: "center",
          marginTop: 20
        }}
      >
        {cups.map((cup, index) => {
          const isSelected = index === selected;

          const showApple =
            (phase === "show" && index === realAppleIndex) ||
            (phase === "reveal" && index === fakeAppleIndex) ||
            (phase === "win" && index === selected);

          return (
            <motion.div
              key={cup}
              layout
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              onClick={() => handlePick(index)}
              style={{
                width: 90,
                height: 130,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                cursor: phase === "pick" ? "pointer" : "default",
                position: "relative"
              }}
            >
              {showApple && (
                <motion.div
                  layoutId="apple"
                  style={{
                    position: "absolute",
                    bottom: 15,
                    fontSize: 28,
                    zIndex: 1
                  }}
                  transition={{ type: "spring", stiffness: 180, damping: 20 }}
                >
                  🍎
                </motion.div>
              )}

              <motion.div
                animate={{
                  y:
                    phase === "show"
                      ? -50
                      : phase === "reveal"
                      ? -50
                      : phase === "win"
                      ? -50
                      : 0
                }}
                transition={{ duration: 0.4 }}
                style={{
                  width: 70,
                  height: 90,
                  background: "linear-gradient(#fff, #ffd6e0)",
                  borderRadius: "0 0 35px 35px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  position: "relative",
                  zIndex: 2
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    width: 10,
                    height: 30,
                    background: "rgba(255,255,255,0.5)",
                    borderRadius: 10
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {selected !== null && (
        <AnimatePresence mode="wait">
          <motion.div
            key={phase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ marginTop: 20 }}
          >
            {phase === "reveal" && (
              <h3 style={{ color: "#ff4d6d", fontFamily: 'Playfair Display, sans-serif' }}>❌ Yah Salah!</h3>
            )}

            {phase === "win" && (
              <>
                <h3 style={{ color: "#7CFC00", fontFamily: 'Playfair Display, sans-serif' }}>
                  ✅ Eh, Bener WKWK
                </h3>
                <button onClick={next}>Next</button>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
