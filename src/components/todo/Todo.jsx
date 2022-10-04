import React from "react";
import "./style.css";

function Todo({ todo, onEdit, onDelete }) {

 return (
        <div className="todo-container">
          <div className="todo-cont">
              <div className="todo-tit">✅ {todo.title}</div>
              <div className="todo-body">{todo.body}</div>
          </div>
          <div className="btn-set">
              <button 
              className="btn del"
              onClick={() => onDelete(todo.id)}
              >❌ 삭제</button>
              <button 
              onClick={() => onEdit(todo.id)} 
              className={"btn" + (this.state.isDone ? "cancel" : "done")}>
              {this.state.isDone ? '🚫 취소' : '⭕️ 완료' }
              </button>
          </div>

        </div>
      );
    
};
export default Todo;