import { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  const [todoList, setTodoList] = useState<
    Array<{ name: string; id: number }> | []
  >([]);

  return (
    <div style={{ margin: "2rem" }}>
      <TodoForm setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default TodoApp;
