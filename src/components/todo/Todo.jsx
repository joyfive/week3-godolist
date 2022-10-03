import React from "react";
import "./style.css";

function Todo() {
    return (
      <div className="todo-container">
        <div className="todo-cont">
            <div className="todo-tit">✅ 제목이 들어갈 자리입니다.</div>
            <div className="todo-body">내용이 들어갈 자리입니다.</div>
        </div>
        <div className="btn-set">
            <button className="btn del">삭제하기</button>
            <button className="btn done">완료하기</button>
            <button className="btn cancel">취소하기</button>
        </div>

      </div>
    );
  }

export default Todo;