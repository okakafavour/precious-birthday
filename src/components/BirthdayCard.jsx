import React from "react";
import { FaBirthdayCake } from "react-icons/fa";

const BirthdayCard = ({ name }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "50px 20px",
        background: "linear-gradient(to right, #ffc0cb, #dda0dd, #fffacd)",
        textAlign: "center",
        borderRadius: "0 0 25px 25px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        fontFamily: "'Poppins', sans-serif", // default for text
      }}
    >
      {/* Birthday Cake Icon */}
      <FaBirthdayCake
        style={{ fontSize: "5rem", color: "#ff69b4", marginBottom: "15px" }}
      />

      {/* Happy Birthday Header */}
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "20px",
          color: "#4b0082",
          fontFamily: "'Dancing Script', cursive", // stylish font for heading
        }}
      >
        🎉 Happy Birthday {name}! 🌹 🎉
      </h1>

      {/* Merged Text */}
      <p
        style={{
          fontSize: "1.3rem",
          maxWidth: "700px",
          color: "#4b0082",
          margin: "0 auto 30px auto",
          lineHeight: "1.6",
        }}
      >
        You’ve been such an amazing girlfriend and my love. Your kindness, your
        laughter, and the way you brighten my days mean more than I can ever
        say. 💖✨ Here’s a little note about you: You’ve made a place in my
        heart that no one else could. Every moment with you feels magical, and
        I’m so grateful for you.
      </p>

      {/* Optional About You Header */}
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "15px",
          color: "#ff1493",
          fontFamily: "'Dancing Script', cursive", // stylish font
        }}
      >
        A Few Things About You ✨
      </h2>

      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "700px",
          color: "#4b0082",
          margin: "0 auto",
          lineHeight: "1.6",
        }}
      >
        You are my sunshine, my inspiration, and the reason my days are brighter.
        Your laughter, warmth, and love make every moment unforgettable. 💖
      </p>
    </div>
  );
};

export default BirthdayCard;
