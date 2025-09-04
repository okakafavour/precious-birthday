import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import BirthdayCard from "./components/BirthdayCard";
// import Wishes from "./components/wishes"; // remove this
import BirthdayMessage from "./components/BirthdayMessage"; // new message
import MediaSection from "./components/Mediasection";

function App() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [
    "/images/photo1.jpeg",
    "/images/photo2.jpeg",
    "/images/photo4.jpeg",
    "/images/photo5.jpeg",
    "/images/photo7.jpeg",
    "/images/photo6.jpeg",
    "/images/photo12.jpeg",
    "/images/photo15.jpeg",
    "/images/photo16.jpeg",
    "/images/photo17.jpeg",
    "/images/photo18.jpeg",
    "/images/photo19.jpeg",
    "/images/photo20.jpeg",
    "/images/photo21.jpeg",
    "/images/photo22.jpeg",
    "/images/photo23.jpeg",
    "/images/photo24.jpeg",
    "/images/photo25.jpeg",
    "/images/photo26.jpeg",
    "/images/photo27.jpeg",
    "/images/photo28.jpeg",
    "/images/photo29.jpeg",
  ];

  const videos = [
    "/videos/only_her.mp4",
  ];

  return (
    <div style={{ fontFamily: "sans-serif", background: "#fffaf0", minHeight: "100vh", padding: "20px" }}>
      {/* Confetti overlay */}
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        numberOfPieces={200}
        gravity={0.2}
        wind={0.01}
      />

      {/* Birthday Header */}
      <BirthdayCard name="NAZA 🌹" />

      {/* Animated Birthday Message */}
      <BirthdayMessage />

      {/* Gallery & Videos */}
      <MediaSection images={images} videos={videos} />
    </div>
  );
}

export default App;
