import React, { useState } from "react";
import CompleteTodos from "./components/CompleteTodos";
import IncompleteTodos from "./components/IncompleteTodos";
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
        disabled={incompleteTodos.length >= 5}
      />

      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるのは5個まで</p>
      )}

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};

export default App;
