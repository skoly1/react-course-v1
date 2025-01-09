import React, { ChangeEvent, FormEvent, useState } from "react";

interface FormProps {
  setTodoList: React.Dispatch<
    React.SetStateAction<{ name: string; id: number }[]>
  >;
}

const TodoForm: React.FC<FormProps> = ({ setTodoList }) => {
  const [todoName, setTodoName] = useState<string>("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTodoList((prev) => [...prev, { name: todoName, id: Date.now() }]);

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
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default TodoForm;
