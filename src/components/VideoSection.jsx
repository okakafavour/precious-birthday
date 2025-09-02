import React from "react";

const VideoSection = ({ videoSrc }) => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "50px 0",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#4b0082" }}>
        A Special Video 🎬
      </h2>
      <div
        style={{
          width: "90%",
          maxWidth: "600px",
          margin: "0 auto",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 6px 25px rgba(0,0,0,0.25)",
        }}
      >
        <video
          src={videoSrc}
          controls
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>
    </div>
  );
};

export default VideoSection;
