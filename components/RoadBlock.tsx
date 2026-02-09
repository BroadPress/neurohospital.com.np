"use client";

import { useEffect, useState, useCallback } from "react";

const RoadBlock = () => {
  const today = new Date();
  const day = today.getDate();

  const monthNames = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const month = monthNames[today.getMonth()] ?? "default";

  const [showRoadBlock, setShowRoadBlock] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [displayTimeLeft, setDisplayTimeLeft] = useState(10);

  const onClose = useCallback(() => {
    setShowRoadBlock(false);
  }, []);

 
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("roadblock_seen");
    if (!hasSeen) {
      setShowRoadBlock(true);
      sessionStorage.setItem("roadblock_seen", "true");
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = showRoadBlock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showRoadBlock]);

  /* ------------------ Force close after 20s ------------------ */
  useEffect(() => {
    if (!showRoadBlock) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onClose, showRoadBlock]);

  /* ------------------ Enable close button after 5s ------------------ */
  useEffect(() => {
    if (!showRoadBlock) return;

    const timer = setInterval(() => {
      setDisplayTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [showRoadBlock]);

  /* ------------------ Image error handler ------------------ */
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    img.onerror = null;

    if (!img.src.includes("default")) {
      img.src = "/roadblock/default/keep-city-clean.jpg";
    } else {
      onClose();
    }
  };

  /* ------------------ Render ------------------ */
  if (!showRoadBlock) return null;

  return (
    <div className="fixed h-screen z-999 bg-[#D0D0D0] flex items-center justify-center">
      <div className="relative w-[550px] h-[550px] max-w-[90vw] max-h-[90vh]">

        {/* Close button */}
        <div className="absolute w-full justify-end flex top-8">
        <button
          onClick={displayTimeLeft <= 0 ? onClose : undefined}
          disabled={displayTimeLeft > 0}
          className="absolute z-99999 bottom-3 -right-3 w-10 h-10 rounded-full
                     bg-[#055d59] text-white text-lg font-bold
                     flex items-center justify-center
                     disabled:cursor-not-allowed"
        >
          {displayTimeLeft <= 0 ? "✕" : displayTimeLeft}
        </button>
        </div>
        {/* Image */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={`/roadblock/${month}/${day}.jpg`}
            alt="Advertisement"
            onError={handleImageError}
            className="w-full h-full object-contain rounded-lg"
          />
        </a>

      </div>
    </div>
  );
};

export default RoadBlock;
