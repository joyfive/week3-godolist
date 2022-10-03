import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List() {
  return (
    <div className="list-container">
        <div className="list-tit">할일 🙄</div>
        <div className="list-wrap">
            <Todo />
            <Todo />
        </div>
        <div className="list-tit">완료 😎</div>
        <div className="list-wrap">
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
        </div>
    </div>
  );
}

export default List;