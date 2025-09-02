import React from "react";

const Balloon = ({ left, delay, emoji }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "-50px", // start below the screen
        left: `${left}%`,
        fontSize: "2rem",
        animation: `floatUp 6s linear ${delay}s infinite`,
      }}
    >
      {emoji}
    </div>
  );
};

const BirthdayMessage = () => {
  const balloons = [
    { left: 10, delay: 0, emoji: "🎈" },
    { left: 30, delay: 1, emoji: "🎉" },
    { left: 50, delay: 2, emoji: "🎈" },
    { left: 70, delay: 0.5, emoji: "🎉" },
    { left: 85, delay: 1.5, emoji: "🎈" },
  ];

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        margin: "50px 0",
        zIndex: 10,
        overflow: "hidden", // prevents balloons from scrolling outside
        height: "250px", // reserve space for floating balloons
      }}
    >
      {/* Animated Card */}
      <div
        style={{
          maxWidth: "500px",
          width: "90%",
          padding: "30px",
          backgroundColor: "rgba(255,255,255,0.95)",
          borderRadius: "25px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
          textAlign: "center",
          animation: "bounce 1.5s infinite alternate",
          zIndex: 20, // ensures card is above balloons
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            color: "#d63384",
            marginBottom: "15px",
            textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
          }}
        >
          🎉 Happy Birthday BOLUWATIFE! 🌹
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
            color: "#4b0082",
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
            margin: 0,
          }}
        >
          You’re my amazing girlfriend, and you brighten my days in every way 💖
        </p>
      </div>

      {/* Floating Balloons */}
      {balloons.map((b, idx) => (
        <Balloon key={idx} left={b.left} delay={b.delay} emoji={b.emoji} />
      ))}

      {/* Keyframes */}
      <style>{`
        @keyframes bounce {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-15px); }
        }

        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-300px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default BirthdayMessage;
