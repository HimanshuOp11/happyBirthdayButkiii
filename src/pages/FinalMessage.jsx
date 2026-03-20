import { useEffect, useState } from "react";
import "../styles/Final.css";
import confetti from "canvas-confetti";

export default function FinalMessage() {

  const message = `Hey Dishani ❤️

I just want you to know how much I truly care about you.
You are someone very special, and your presence makes everything feel brighter and more meaningful.

I am really proud of you for your new job 🎉
You deserve every bit of success coming your way, and I genuinely pray that you achieve all your dreams and happiness in life.

No matter what, I’ll always wish the best for you, support you, and silently pray for your smile to never fade.

Once again, Happy Birthday 💖
Stay happy, stay safe, stay blessed… and keep shining like you always do ✨`;

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  // 🎉 CONFETTI ON LOAD
  useEffect(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 80,
        origin: { x: 0 }
      });

      confetti({
        particleCount: 5,
        angle: 120,
        spread: 80,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  // ✨ Typing Effect
  useEffect(() => {
    if (index < message.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + message[index]);
        setIndex(index + 1);
      }, 35);

      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div className="final-container">

      {/* Fireworks */}
      <div className="fireworks">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {/* Floating Hearts */}
      <div className="hearts-bg">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i}>💖</span>
        ))}
      </div>

      {/* Main Card */}
      <div className="final-card">

        <h1 className="final-title">A Little Something For You ✨ 🤌 🥰</h1>

        <p className="final-text">
          {text}
          <span className="cursor">|</span>
        </p>

        <div className="emoji-row">
          🎉 🎂 💖 ✨ 🥳 🎈
        </div>

      </div>

    </div>
  );
}