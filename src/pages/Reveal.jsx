import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Reveal({ next }) {
  const images = [
    "https://i.imgur.com/nzunA5L.jpeg",
    "https://i.imgur.com/bc3yGaK.jpeg",
    "https://i.imgur.com/OJcLCkq.jpeg,
    "https://i.imgur.com/OJcLCkq.jpeg"
  ];

  const [index, setIndex] = useState(0);

  const nextImage = () => {
    if (index < images.length - 1) setIndex(index + 1);
  };

  const prevImage = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    // 🔥 WRAPPER BIAR GA MEPET
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
      }}
    >
      {/* 💖 CARD */}
      <div
        className="container glass"
        style={{
          width: "100%",
    maxWidth: 420,
          padding: "24px",
          borderRadius: 25,
          boxShadow: "0 10px 40px rgba(0,0,0,0.15)"
        }}
      >
        <h1 style={{ fontSize: "1.6rem", marginBottom: 5 }}>
          🥳 Happy 15th Birthday
        </h1>

        <h2 style={{ fontSize: "1.1rem", marginBottom: 15 }}>
          Pretty Girl ❤️
        </h2>

        {/* SLIDER */}
        <div
          style={{
            position: "relative",
            width: "100%",
            borderRadius: 20,
            overflow: "hidden"
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 20
              }}
            />
          </AnimatePresence>

          {/* ⬅️ */}
          {index > 0 && (
            <button
              onClick={prevImage}
              style={{
                position: "absolute",
                top: "50%",
                left: 10,
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.4)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 35,
                height: 35,
                cursor: "pointer"
              }}
            >
              ‹
            </button>
          )}

          {/* ➡️ */}
          {index < images.length - 1 && (
            <button
              onClick={nextImage}
              style={{
                position: "absolute",
                top: "50%",
                right: 10,
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.4)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 35,
                height: 35,
                cursor: "pointer"
              }}
            >
              ›
            </button>
          )}
        </div>

        {/* DOT */}
        <div style={{ marginTop: 12 }}>
          {images.map((_, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                margin: "0 4px",
                background: i === index ? "#ff4d6d" : "#ccc"
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          style={{
            marginTop: 20,
            width: "100%"
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}
