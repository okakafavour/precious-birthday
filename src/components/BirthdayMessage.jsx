import React from "react";

const Balloon = ({ left, delay, emoji }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "-50px",
        left: `${left}%`,
        fontSize: "2rem",
        animation: `floatUp 6s linear ${delay}s infinite`,
        zIndex: 5, // behind card
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
        alignItems: "center",
        margin: "50px 0",
        zIndex: 10,
        overflow: "hidden",
        minHeight: "350px", // more room for balloons
      }}
    >
      {/* Animated Card */}
      <div
        style={{
          maxWidth: "500px",
          width: "90%",
          padding: "20px",
          backgroundColor: "rgba(255,255,255,0.95)",
          borderRadius: "25px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
          textAlign: "center",
          animation: "bounce 1.5s infinite alternate",
          zIndex: 20, // always above balloons
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.5rem, 5vw, 2rem)", // responsive font
            color: "#d63384",
            marginBottom: "15px",
            textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
          }}
        >
          🎉 Happy Birthday Naza! 🌹
        </h2>
        <p
          style={{
            fontSize: "clamp(1rem, 4vw, 1.2rem)", // responsive font
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

      <style>{`
        @keyframes bounce {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-15px); }
        }

        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-400px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default BirthdayMessage;
