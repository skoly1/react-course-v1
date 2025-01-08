import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";

function TodoApp() {
  const [todoName, setTodoName] = useState<string>("");
  const [todoList, setTodoList] = useState<Array<{ name: string }> | []>([]);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTodoList((prev) => [...prev, { name: todoName }]);

    setTodoName("");
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
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
      <h1>Todo List</h1>
      {todoList.map((val) => {
        return <p>{val.name}</p>;
      })}
    </div>
  );
}

export default TodoApp;
