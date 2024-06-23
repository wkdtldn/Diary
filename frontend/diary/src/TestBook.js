import React from "react";
import "./Book.css";

const Book = () => {
  return (
    <div className="book-container">
      <div className="page" style={{ zIndex: 3, transform: "rotateY(0deg)" }}>
        Page 1 content
      </div>
      <div
        className="page"
        style={{ zIndex: 2, transform: "rotateY(20deg) translateX(-20px)" }}
      >
        Page 2 content
      </div>
      <div
        className="page"
        style={{ zIndex: 1, transform: "rotateY(40deg) translateX(-40px)" }}
      >
        Page 3 content
      </div>
      {/* 추가적인 페이지를 필요에 따라 여기에 추가합니다 */}
    </div>
  );
};

export default Book;
