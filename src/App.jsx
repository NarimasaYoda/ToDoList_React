import React, { useState } from "react";
import InputTodo from "./components/InputTodo";
import "./style.css";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index_) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index_, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index_) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index_, 1);
    setIncompleteTodos(newTodos);

    const newTodos_v2 = [...completeTodos, incompleteTodos[index_]];
    setCompleteTodos(newTodos_v2);
  };

  const onClickBack = (index_) => {
    const newTodos = [...completeTodos];
    newTodos.splice(index_, 1);
    setCompleteTodos(newTodos);

    const newTodos_v2 = [...incompleteTodos, completeTodos[index_]];
    setIncompleteTodos(newTodos_v2);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />

      <div className="incomplete-area">
        <p className="title">未完了TodoTodo</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了Todo</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
