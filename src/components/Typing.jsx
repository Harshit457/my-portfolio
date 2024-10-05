"use client";

import { useEffect, useState } from "react";

function TypingAnimation({ text, duration = 100, delay = 1000, className = "" }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (index < text.length) {
        const typingEffect = setInterval(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, duration);

        return () => clearInterval(typingEffect);
      } else {
        // Pause before restarting the animation
        const pauseEffect = setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
          setIsTyping(true);
        }, delay);

        return () => clearTimeout(pauseEffect);
      }
    }
  }, [index, text, duration, isTyping, delay]);

  useEffect(() => {
    // Restart typing animation after clearing the text
    if (!isTyping && index === 0) {
      setIsTyping(true);
    }
  }, [isTyping, index]);

  return (
    <h1 className={className}>
      {displayedText}
    </h1>
  );
}

export default TypingAnimation;
