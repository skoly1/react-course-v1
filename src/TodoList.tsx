import React from "react";

interface ListProps {
  todoList: Array<{ title: string; id: number }>;
  setTodoList: React.Dispatch<
    React.SetStateAction<Array<{ title: string; id: number }>>
  >;
}

const TodoList: React.FC<ListProps> = ({ todoList, setTodoList }) => {
  const deleteHandler = (id: number) => {};
  return (
    <>
      {/* Todo List */}
      <h1>Todo List</h1>
      {todoList.map((val) => {
        return (
          <div style={{ display: "flex", gap: "20px" }} key={val.id}>
            <p>{val.title}</p>
            <button onClick={() => deleteHandler(val.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
