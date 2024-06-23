import React, { useState } from "react";
import { Router, Route } from "react-router-dom";
import "./Book.css";
import Diary from "./Pages/Diary.js";
import Write from "./Pages/Write.js";
import List from "./Pages/List.js";
import Selecter from "../Selecter/Selecter.js";
import { useEffect } from "react";

export default function Book() {
  const [currentPage, setCurrentPage] = useState(1);
  const changePage = (e) => {
    var targetPage = e.target.id;
    setCurrentPage(targetPage);
  };
  return (
    <div className="Book">
      <section className="pageSection">
        <div className="page list" style={listStyle}>
          <div className="left">
            <List />
          </div>
          <div className="right">
            <List />
          </div>
        </div>
        <div className="page write" style={writeStyle}>
          <div className="left">
            <Diary />
          </div>
          <div className="right">
            <h2>Diary Write Page</h2>
          </div>
        </div>
      </section>
      <Selecter handle={changePage} />
    </div>
  );
}
