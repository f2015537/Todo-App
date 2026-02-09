import { useState } from "react";

function CreateTodo({ setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function createTodoHandler() {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: {
        "Content-Type": "application/json", // Declare the data type
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos((todos) => [...todos, data.createdTodo]);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <br />
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <button onClick={createTodoHandler} style={{ margin: 10 }}>
        Add a todo
      </button>
    </div>
  );
}

export default CreateTodo;
