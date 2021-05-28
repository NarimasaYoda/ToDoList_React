const IncompleteTodos = (porps) => {
  const { todos, onClickComplete, onClickDelete } = porps;

  return (
    <div className="incomplete-area">
      <p className="title">未完了TodoTodo</p>
      <ul>
        {todos.map((todo, index) => {
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
  );
};

export default IncompleteTodos;
