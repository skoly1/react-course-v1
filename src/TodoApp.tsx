import { useState } from "react";
import "./App.css";

function TodoApp() {
  const [todoName, setTodoName] = useState<string>("");
  const [todoList, setTodoList] = useState<Array<string> | []>([]);


  const submitHandler = (e) => {
    e.preventDefault();

    setTodoList((prev) => [...prev, todoName]);

    setTodoName("");
  };

  const changeHandler = (e) => {
    setTodoName(e.target.value);
  };

  return (
    <div style={{ margin: "2rem" }}>
      {/* Todo Form  */}
      <h1>Add Todo</h1>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
        onSubmit={submitHandler}
      >
        <input
          value={todoName}
          type="text"
          name="todoName"
          onChange={changeHandler}
        />
        <button type="submit">Add</button>
      </form>
      {/* Todo List */}
    </div>
  );
}

export default TodoApp;
