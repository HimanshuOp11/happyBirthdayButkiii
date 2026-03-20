import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import GiftCard from "./pages/GiftCard";
import Gallery from "./pages/Gallery";
import FinalMessage from "./pages/FinalMessage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/card" element={<GiftCard />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/message" element={<FinalMessage />} />
      </Routes>
    </Router>
  );
}

export default App;