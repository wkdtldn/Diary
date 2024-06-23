import React, { useState } from "react";
import { ListLeft, ListRight } from "./Pages/List";
import { DiaryLeft, DiaryRight } from "./Pages/Diary.js";
import "./Page.css";
import Selecter from "../Selecter/Selecter";
import PageModule from "../../hook/PageModule.js";
import { HomeLeft, HomeRight } from "./Pages/Home.js";
import ZindexModule from "../../hook/ZIndexModule.js";

export default function HomePage() {
  const pages = {
    List: [<ListLeft />, <ListRight />],
    Diary: [<DiaryLeft />, <DiaryRight />],
    Home: [<HomeLeft />, <HomeRight />],
  };
  const [currentPage, setCurrentPage] = useState(1);

  const turnPage = (e) => {
    var targetName = e.target.id;
    var element = document.querySelector("#" + targetName);
    element.classList.toggle("flipped");
    if (element.classList.toggle("flipped") !== true) {
      element.classList.add("flipped");
      setCurrentPage(currentPage + 1);
    } else {
      element.classList.remove("flipped");
      setCurrentPage(currentPage - 1);
    }
  };
  const zindex = (element) => {
    var elementId = element.id;
    var id = elementId.replace("page", "");
    return ZindexModule(currentPage, parseInt(id));
  };
  var divs = document.querySelectorAll(".pageWrapper");
  divs.forEach((div) => {
    var zIndexValue = zindex(div);
    div.style.zIndex = zIndexValue;
  });
  return (
    <div className="Book">
      <section className="PageSection">
        {/* <div className="firstPage" id="page1" style={{ zIndex: 3 }}>
          <div>
            <PageModule content={pages.Home[0]} />
          </div>
        </div> */}
        {/* <div className="leftPageWrapper"> */}
        <div className="pageWrapper" id="page2" style={{ zIndex: 4 }}>
          <div className="front">
            <PageModule content={pages.Home[1]} />
          </div>
          {/* List Page */}
          <div className="back">
            <PageModule content={pages.List[0]} />
          </div>
        </div>
        <div className="pageWrapper" id="page3" style={{ zIndex: 3 }}>
          <div className="page front">
            <PageModule content={pages.List[1]} />
          </div>
          {/* Write Page */}
          <div className="back">
            <PageModule content={pages.Diary[0]} />
          </div>
        </div>
        {/* </div> */}
      </section>
      <Selecter handle={turnPage}></Selecter>
    </div>
  );
}
