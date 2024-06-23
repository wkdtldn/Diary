import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import Block from "./DiaryList/Block.js";

export function ListLeft() {
  const [DyList, setDyList] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/")
      .then(function (res) {
        for (let i = 0; i < res.data.length; i++) {
          setDyList(res.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="BlockWrapper">
      {DyList.map((diary, index) => (
        <Block key={index} data={diary}></Block>
      ))}
    </div>
  );
}

export function ListRight() {
  return (
    <div>
      <div>
        <h2>Detail page</h2>
      </div>
    </div>
  );
}

export default ListLeft;
