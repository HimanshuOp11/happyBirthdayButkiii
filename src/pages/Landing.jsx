import { useState } from "react";
import "../styles/landing.css";
import Banner from "../components/Banner";
import Balloons, { createBalloons } from "../components/Balloons";
import Cake from "../components/Cake";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  // Banner state
  const [showBanner, setShowBanner] = useState(false);

  // Balloons state
  const [balloons, setBalloons] = useState([]);

  // Cake state
  const [showCake, setShowCake] = useState(false);

  return (
    <div className="container">
      {/* Banner */}
      {showBanner && <Banner />}

      {/* Balloons */}
      {balloons.length > 0 && <Balloons balloons={balloons} />}

      {/* Cake */}
      {showCake && <Cake onNext={() => navigate("/card")} />}

      {/* Hero Section */}
      <h1 className="hero-title">Happy Birthday, Dishani 🎉🎂</h1>

      <p className="hero-subtitle">
        Today is all about you and your beautiful smile ❤️
      </p>

      {/* Buttons */}
      <div className="button-grid">
        {/* Banner Button */}
        <button className="magic-btn" onClick={() => setShowBanner(true)}>
          🎀 Drop Birthday Banner
        </button>

        {/* Balloon Button */}
        <button
          className="magic-btn"
          onClick={() => setBalloons(createBalloons(10))}
        >
          🎈 Release Balloons
        </button>

        {/* Cake Button (will implement later) */}
        <button className="magic-btn" onClick={() => setShowCake(true)}>
          🎂 Show Cake
        </button>

        {/* Celebrate Button (will implement later)
        <button className="magic-btn">🎉 Celebrate</button> */}
      </div>
    </div>
  );
}
