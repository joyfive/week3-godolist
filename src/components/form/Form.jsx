import React from "react";
import "./style.css";

function Form () {
    return (
        <form>
          <div className="form-tit">
              <span>Go</span> <span>do</span> <span>l</span><span>i</span><span>s</span><span>T</span>
            </div>
          <div className="input-container">
            <div className="input-box">
              <label className="label-txt">제목</label>
              <input
                type="text"
                name="title"
                className="input-txt"
              />
              <label className="label-txt">내용</label>
              <input
                type="text"
                name="body"
                className="input-txt"
              />
            </div>
            <div className="btngroup">
            <button className="form-btn">추가하기</button>
            <button className="form-btn">리셋하기</button>
            </div>
          </div>
        </form>
      );
}
  


export default Form;