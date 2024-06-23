import React from "react";
import "./Selecter.css";

export default function Selecter({ handle }) {
  return (
    <div className="BtnWrapper">
      <button id="page2" onClick={handle}>
        작성하기
      </button>
      <button id="page3" onClick={handle}>
        기록 보기
      </button>
    </div>
  );
}
