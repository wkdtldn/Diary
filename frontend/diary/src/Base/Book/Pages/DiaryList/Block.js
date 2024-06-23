import React from "react";
import "../List.css";
import { BrowserRouter as Link } from "react-router-dom";

export default function Block({ data }) {
  const content = { name: data[1], date: data[2], detail: data[3] };
  return (
    <Link to="detail-page">
      <div className="BlockBox">
        <div className="date">{content.date}</div>
        <hr />
        <div className="title">{content.detail}</div>
      </div>
    </Link>
  );
}
