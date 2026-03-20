import { useEffect, useState, useRef } from "react";
import "../styles/gallery.css";
import { useNavigate } from "react-router-dom";

export default function Gallery() {

  const [angle, setAngle] = useState(0);
  const navigate = useNavigate();

  const isDragging = useRef(false);
  const startX = useRef(0);

  // Auto rotation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging.current) {
        setAngle((prev) => prev + 0.2);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Drag functionality
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const delta = e.clientX - startX.current;
    setAngle((prev) => prev + delta * 0.1);
    startX.current = e.clientX;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

   const images = [
    "/dishani_1.jpg",
    "/dishani_2.jpeg",
    "/dishu_9.jpg",
    "/dishani_7.jpg",
    "/dishani_3.jpeg",
    "/dishu_8.jpg",
  ];

  return (
    <div className="gallery-container">

      <h1 className="gallery-title">Capturing Her Magic in Every Frame ✨📸</h1>

      <div
        className="carousel"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >

        {images.map((src, i) => {
          const rotate = (360 / images.length) * i + angle;

          // center focus logic
          const normalized = (rotate % 360 + 360) % 360;
          const isCenter = normalized > 330 || normalized < 30;

          return (
            <div
              key={i}
              className={`card ${isCenter ? "active" : ""}`}
              style={{
                transform: `rotateY(${rotate}deg) translateZ(320px)`
              }}
            >
              <img src={src} alt="memory" />
            </div>
          );
        })}

      </div>

      <button
        className="magic-btn next-btn"
        onClick={() => navigate("/message")}
      >
        Final Message ➜
      </button>

    </div>
  );
}


