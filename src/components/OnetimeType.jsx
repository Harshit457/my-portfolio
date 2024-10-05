"use client";

import { useEffect, useState } from "react";

function TypingAnimation({ text, duration = 100, className = "" }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const typingEffect = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, duration);

      return () => clearInterval(typingEffect);
    }
  }, [index, text, duration]);

  return (
    <h1 className={className}>
      {displayedText}
    </h1>
  );
}

export default TypingAnimation;
