import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/card.css";
import { useNavigate } from "react-router-dom";

export default function GiftCard() {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const message = `Heyyy... my favourite person.From the moment you came into my life, everything started feeling more beautiful and meaningful. Your kindness, your laughter, and the way you care about the people around you make you truly special. You deserve all the happiness, love, and success that life can offer. I hope this birthday brings you countless moments of joy, unforgettable memories, and all the things that make your heart smile.Once again ,Happy Birthday Dishani. May your life always be filled with love, laughter, dreams, and endless happiness. ✨❤️`;

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (opened && index < message.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + message[index]);
        setIndex(index + 1);
      }, 35);

      return () => clearTimeout(timer);
    }
  }, [index, opened]);

  return (
    <div className="gift-container">
      {/* Floating Hearts */}
      <div className="hearts-bg">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i}>❤️</span>
        ))}
      </div>

      {!opened ? (
        <div className="gift-wrapper" onClick={() => setOpened(true)}>
          <div className="gift-lid"></div>

          <div className="gift-box">
            <div className="gift-ribbon"></div>
          </div>

          <p className="gift-text">Click to Open</p>
        </div>
      ) : (
        <motion.div
          className="greeting-card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="card-content">
            <h1>Happy Birthday Dishani ❤️</h1>

            <p className="typing-text">
              {text}
              <span className="cursor">|</span>
            </p>

            <button className="magic-btn" onClick={() => navigate("/gallery")}>
              Next Surprise ➜
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
