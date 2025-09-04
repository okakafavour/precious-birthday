import React from "react";

const Balloon = ({ left, delay, emoji, size }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "-50px",
        left: `${left}%`,
        fontSize: `${size}rem`,
        animation: `floatUp 6s linear ${delay}s infinite`,
      }}
    >
      {emoji}
    </div>
  );
};

const Wishes = () => {
  const balloons = [
    { left: 10, delay: 0, emoji: "🎈", size: 2 },
    { left: 30, delay: 1, emoji: "🎉", size: 2.5 },
    { left: 50, delay: 2, emoji: "🎈", size: 2 },
    { left: 70, delay: 0.5, emoji: "🎉", size: 2 },
    { left: 85, delay: 1.5, emoji: "🎈", size: 2.3 },
  ];

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "20px",
        boxSizing: "border-box",
        marginBottom: "50px",
        overflow: "hidden",
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          background: "#ffffff",
          color: "#4b0082",
          padding: "25px",
          borderRadius: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          textAlign: "center",
          position: "relative",
          zIndex: 20,
          animation: "bounce 1.5s infinite alternate",
        }}
      >
        <h2
          style={{
            fontFamily: "'Dancing Script', cursive", // 🎨 fancy handwritten style
            color: "#d63384",
            marginBottom: "15px",
            fontSize: "clamp(1.6rem, 5vw, 2.2rem)",
            lineHeight: "1.3",
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          Happy Birthday Again 🎉
        </h2>
        <p
          style={{
            fontFamily: "'Poppins', sans-serif", // ✨ clean style
            fontSize: "clamp(1rem, 4vw, 1.3rem)",
            lineHeight: "1.6",
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            margin: 0,
          }}
        >
          I hope your day was as amazing as you are. Thank you for being a
          wonderful girlfriend and brightening my life. 💌
        </p>
      </div>

      {/* Floating Balloons */}
      {balloons.map((b, idx) => (
        <Balloon key={idx} {...b} />
      ))}

      {/* Keyframes for animations */}
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

export default Wishes;
