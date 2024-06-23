import React from "react";
import "./detail.css";

export default function Detail(props) {
  // const Graph = props.data.graph;
  const info = {
    name: "홍길동",
    date: "2024-05-01",
    title: "홍길동의 일기",
    content:
      "오늘은 날씨가 맑고 상쾌해서 산책을 다녀왔습니다. 자연 속에서 시간을 보내니 마음이 맑아졌어요.",
  };
  return (
    <div>
      <button className="backBtn">뒤로가기</button>
      <div className="DiaryWrapper">
        <div className="date">{info.date}</div>
        <div className="title">{info.title}</div>
        <div className="diary-text">{info.content}</div>
        <div>감정 분석에 대한 통계 들어갈 부분</div>
      </div>
    </div>
  );
}
