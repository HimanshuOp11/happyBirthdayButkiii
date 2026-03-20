import { motion } from "framer-motion";

const colors = [
  "#ff4e50",
  "#ff9966",
  "#ffd700",
  "#4facfe",
  "#43e97b",
  "#f093fb",
];

export default function Balloons({ balloons }) {
  return (
    <>
      {balloons.map((b) => (
        <motion.div
          key={b.id}
          className="balloon"
          style={{
            left: b.left,
            backgroundColor: b.color,
            width: b.size,
            height: b.size * 1.3,
          }}
          initial={{ bottom: 0, x: 0, opacity: 0 }}
          animate={{
            bottom: window.innerHeight + 200,
            x: [0, 15, -15, 10, -10, 0], // sway horizontally while rising
            opacity: 1,
          }}
          transition={{ duration: b.duration, ease: "linear" }}
        >
          <div className="balloon-string"></div>
        </motion.div>
      ))}
    </>
  );
}

export function createBalloons(count = 8) {
  return Array.from({ length: count }).map((_, i) => ({
    id: i + Date.now(),
    left: Math.random() * 90 + "%",
    color: colors[Math.floor(Math.random() * colors.length)],
    duration: 5 + Math.random() * 5,
    size: 40 + Math.random() * 20,
  }));
}
