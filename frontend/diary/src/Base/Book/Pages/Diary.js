import React, { useState } from "react";
import axios from "axios";
import "./Diary.css";

const url = "http://127.0.0.1:8080/";

export function DiaryLeft() {
  const [comment, setComment] = useState({ tag: "", detail: "" });

  const inputValue = (e) => {
    var text = e.target.value.replace(/\s/g, "");
    setComment((prevState) => ({
      ...prevState,
      [e.target.name]: text,
    }));
  };
  const send = () => {
    console.log(comment.tag, comment.detail);
    if (comment.tag === "" && comment.detail === "") {
      alert("Write anything What ever you want!");
    } else {
      axios
        .post(url, {
          tag: comment.tag,
          detail: comment.detail,
        })
        .then(function (res) {
          console.log(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <div className="diaryWrapper">
      <img
        src="https://i.pinimg.com/originals/2a/65/6a/2a656af2d609c553a2c466c354932203.jpg"
        alt="diary"
        className="image"
        style={{ zIndex: 1 }}
      />
      <div style={{ zIndex: 2 }}>
        <input
          className="nameInput"
          name="tag"
          placeholder="Your name here"
          onChange={inputValue}
        ></input>
        <input
          className="textInput"
          name="detail"
          placeholder="Your story here"
          onChange={inputValue}
        ></input>
        <button onClick={send}>Save</button>
        <hr />
      </div>
    </div>
  );
}

export function DiaryRight() {
  return (
    <div>
      <div>
        <h2>DiaryRight page</h2>
      </div>
    </div>
  );
}

export default DiaryLeft;
