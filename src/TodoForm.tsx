import React, { ChangeEvent, FormEvent, useState } from "react";
import { createTodo } from "./backend";

interface FormProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  getTodosData: () => void;
  loading: boolean;
}

const TodoForm: React.FC<FormProps> = ({
  setLoading,
  getTodosData,
  loading,
}) => {
  const [todoName, setTodoName] = useState<string>("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    createTodo(todoName).then(() => {
      getTodosData();
    });
    setTodoName("");
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoName(e.target.value);
  };
  return (
    <>
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
        <button disabled={loading} type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;
