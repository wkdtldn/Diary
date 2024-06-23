import React from "react";
import "./Home.css";

export const HomeLeft = () => {
  return (
    <div>
      <h2>HomePage (Left)</h2>
    </div>
  );
};

export const HomeRight = () => {
  return (
    <div className="imageWrapper">
      <a>
        <img
          src="https://mblogthumb-phinf.pstatic.net/MjAyMjEwMDJfMjYx/MDAxNjY0NjUxNjg0OTM4.b9MVcrUOjPjiDyyDJaWC7W7OsaGqqcVStgm1Flt26ugg.fqv-Pyc35XKvY6smVnEVaccrRW5sUhClrypp7--9JJEg.JPEG.ha0034/%EB%8C%80%EC%A7%80_1-80.jpg?type=w800"
          alt="이미지"
          className="image"
        />
      </a>
    </div>
  );
};

export default HomeLeft;
