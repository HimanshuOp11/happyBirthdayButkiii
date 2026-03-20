import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/cake.css";
import { useNavigate } from "react-router-dom";

export default function Cake({ onNext }) {
  const [candlesBlown, setCandlesBlown] = useState(false);

  const navigate = useNavigate();

  const handleBlow = () => {
    setCandlesBlown(true);
    // Optional: play blow sound here
  };

  return (
    <div className="cake-container">
      {/* Cake Layers */}
      <motion.div
        className="cake"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="cake-layer cake-bottom"></div>
        <div className="cake-layer cake-top"></div>

        {/* Candles */}
        <div className="candles">
          <div className="candle">
            {!candlesBlown && <div className="flame"></div>}
          </div>
          <div className="candle">
            {!candlesBlown && <div className="flame"></div>}
          </div>
          <div className="candle">
            {!candlesBlown && <div className="flame"></div>}
          </div>
        </div>
      </motion.div>

      {/* Blow Button */}
      {!candlesBlown ? (
        <button className="magic-btn blow-btn" onClick={handleBlow}>
          🕯️ Blow the Candles
        </button>
      ) : (
        <>
          {/* Smoke Animation */}
          <div className="smoke"></div>

          {/* Make a Wish Message */}
          <motion.div
            className="wish-msg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Make a wish ✨
          </motion.div>

          {/* Next Surprise Button */}
          <button className="magic-btn" onClick={() => navigate("/card")}>
            Next Surprise ➜
          </button>
        </>
      )}
    </div>
  );
}
