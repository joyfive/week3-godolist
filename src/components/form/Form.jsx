import React, { useState } from "react";
import "./style.css";

let number = 4;
function Form({ setTodos, todos }) {
  const todoItem = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };
 
  console.log(todos);

  const [todo, setTodo] = useState(todoItem);
  const onChange = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onReset = () => setTodo("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    setTodos([...todos, { ...todo, id: number }]);
    setTodo(todoItem);
    number++;
  };
  
  return (
    <form onSubmit={onSubmit} id="add">
      <div className="form-tit">
          <span>Go</span> <span>do</span> <span>l</span><span>i</span><span>s</span><span>T</span>
      </div>
      <div className="input-container">
        <div className="input-box">
          <label className="label-txt">제목</label>
          <input
            type="text"
            name="title"
            value={todo.title}
            onChange={onChange}
            className="input-txt"
          />
          <label className="label-txt">내용</label>
          <input
            type="text"
            name="body"
            value={todo.body}
            onChange={onChange}
            className="input-txt"
          />
        </div>
        <div className="btngroup">
          <button type="submit" form="add" className="form-btn" >추가하기</button>
          <button type="button" onClick={onReset} className="form-btn">리셋하기</button>
        </div>
      </div>
    </form>
  );
}
  


export default Form;