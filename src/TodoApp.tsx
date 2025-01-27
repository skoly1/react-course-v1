import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { getTodos } from "./backend";

function TodoApp() {
  const [todoList, setTodoList] = useState<
    Array<{ title: string; id: number }> | []
  >([]);

  const [loading, setLoading] = useState<boolean>(false);

  const getTodosData = async () => {
    getTodos().then((data) => {
      setTodoList(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    getTodosData();
  }, []);

  return (
    <div style={{ margin: "2rem" }}>
      <TodoForm
        setLoading={setLoading}
        getTodosData={getTodosData}
        loading={loading}
      />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      )}
    </div>
  );
}

export default TodoApp;
