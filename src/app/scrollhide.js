"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ScrollHideElement = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const containerHeight = containerRef.current.clientHeight;

      // Set the threshold in rem for hiding
      const hideThresholdRem = 46;
      const hideThresholdPixels =
        hideThresholdRem *
        parseFloat(getComputedStyle(document.documentElement).fontSize);

      if (currentScrollPosition > hideThresholdPixels) {
        setIsHidden(true);
      }

      // If the user has scrolled all the way back to the top, show the element
      if (currentScrollPosition === 0) {
        setIsHidden(false);
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
    <div ref={containerRef}>
      {!isHidden && (
        <div>
          <Image src="/scroll.svg" alt="scroll" width={50} height={50} />
        </div>
      )}
    </div>
  );
};

export default ScrollHideElement;
