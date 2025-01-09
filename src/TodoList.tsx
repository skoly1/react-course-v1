import React from "react";

interface ListProps {
  todoList: Array<{ name: string; id: number }>;
  setTodoList: React.Dispatch<
    React.SetStateAction<Array<{ name: string; id: number }>>
  >;
}

const TodoList: React.FC<ListProps> = ({ todoList, setTodoList }) => {
  const deleteHandler = (id: number) => {
    setTodoList((prev) => {
      return prev.filter((val) => val.id !== id);
    });
  };
  return (
    <>
      {/* Todo List */}
      <h1>Todo List</h1>
      {todoList.map((val) => {
        return (
          <div style={{ display: "flex", gap: "20px" }} key={val.id}>
            <p>{val.name}</p>
            <button onClick={() => deleteHandler(val.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
