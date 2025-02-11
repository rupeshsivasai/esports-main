import { useState, useEffect } from "react";
import "./AnimatedText.css";

const phrases = [
"Prepare for chaos, where only the strongest survive!",
  "Welcome to the battleground — only the worthy survive!",
  "Brace yourself for chaos — victory favors the fearless!",
  "Survival isn't a choice — it's a fight!",
  "Chaos unleashed — rise or fall!",
  "The storm is here — conquer or be forgotten!",
  "Enter the chaos, where legends rise!",
  "Survival is the only rule — are you ready?",
  "Unleash mayhem, only the strongest prevail!",
  "Chaos reigns — fight for your legacy!",
  "No mercy, only champions endure!",
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-container">
      <h1 className="animated-text">{phrases[index]}</h1>
    </div>
  );
}
