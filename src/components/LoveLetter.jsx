import React, { useState } from "react";
import "../styles/LoveLetter.css"; // for envelope styling

export default function Letter({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="letter-container">
      {!isOpen ? (
        <div className="envelope" onClick={() => setIsOpen(true)}>
          <div className="envelope-top" />
          <div className="envelope-bottom" />
          <p className="tap-text">📩 Tap to Open</p>
        </div>
      ) : (
        <div className="letter-content">{children}</div>
      )}
    </div>
  );
}
