"use client";

import { useState, useEffect } from "react";

// ScrollShowElements.js
import { useState, useEffect } from "react";

const ScrollShowElements = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      // Set the thresholds in rem for showing elements
      const showThreshold1Rem = 6;
      const showThreshold2Rem = 9;
      const showThreshold3Rem = 12;

      const showThreshold1Pixels =
        showThreshold1Rem *
        parseFloat(getComputedStyle(document.documentElement).fontSize);
      const showThreshold2Pixels =
        showThreshold2Rem *
        parseFloat(getComputedStyle(document.documentElement).fontSize);
      const showThreshold3Pixels =
        showThreshold3Rem *
        parseFloat(getComputedStyle(document.documentElement).fontSize);

      if (currentScrollPosition > showThreshold1Pixels) {
        setIsVisible1(true)
      }
      if (currentScrollPosition > showThreshold2Pixels) {
        setIsVisible2(true)
      }
      if (currentScrollPosition > showThreshold3Pixels) {
        setIsVisible3(true)
      }

      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div>
      {isVisible1 && (
        <div>
          {/* Your element 1 content goes here */}
          <p>Element 1 is now visible.</p>
        </div>
      )}

      {isVisible2 && (
        <div>
          {/* Your element 2 content goes here */}
          <p>Element 2 is now visible.</p>
        </div>
      )}

      {isVisible3 && (
        <div>
          {/* Your element 3 content goes here */}
          <p>Element 3 is now visible.</p>
        </div>
      )}
    </div>
  );
};

export default ScrollShowElements;
