import React, { useState, useEffect } from "react";

const MediaSection = ({ images, videos }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // For dynamic image slideshow
  useEffect(() => {
    if (!images || images.length === 0) return;
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(true);
    }, 300);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 300);
  };

  return (
    <div style={{ textAlign: "center", margin: "50px 0" }}>
      {/* Images Section */}
      {images && images.length > 0 && (
        <div>
          <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#4b0082" }}>
            Our Memories 📸
          </h2>

          <div
            style={{
              display: "inline-block",
              width: "90%",
              maxWidth: "600px",
              padding: "20px",
              background: "#ffe6f2",
              borderRadius: "25px",
              boxShadow: "0 6px 25px rgba(0,0,0,0.25)",
            }}
          >
            <img
              src={images[index]}
              alt={`Memory ${index}`}
              style={{
                width: "100%",
                objectFit: "contain",
                borderRadius: "20px",
                transition: "opacity 0.3s ease, transform 0.6s ease",
                opacity: fade ? 1 : 0,
              }}
            />

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <button
                onClick={handlePrev}
                style={{
                  padding: "12px 20px",
                  borderRadius: "12px",
                  border: "none",
                  background: "#d63384",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                style={{
                  padding: "12px 20px",
                  borderRadius: "12px",
                  border: "none",
                  background: "#d63384",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Videos Section */}
      {videos && videos.length > 0 && (
        <div style={{ marginTop: "50px" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#4b0082" }}>
            Special Videos 🎬
          </h2>

          {videos.map((videoSrc, idx) => (
            <div
              key={idx}
              style={{
                width: "90%",
                maxWidth: "600px",
                margin: "20px auto",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 6px 25px rgba(0,0,0,0.25)",
              }}
            >
              <video src={videoSrc} controls style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaSection;
