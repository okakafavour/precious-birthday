import React from "react";

const Wishes = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "20px",
        boxSizing: "border-box",
        marginBottom: "50px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          background: "#ffffff", // solid background
          color: "#4b0082", // dark purple text
          padding: "25px",
          borderRadius: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#d63384",
            marginBottom: "15px",
            fontSize: "1.8rem",
            lineHeight: "1.3",
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          Happy Birthday Again 🎉
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            margin: 0,
          }}
        >
          I hope your day was as amazing as you are. Thank you for being a
          wonderful girlfriend and brightening my life. 💌
        </p>
      </div>
    </div>
  );
};

export default Wishes;
