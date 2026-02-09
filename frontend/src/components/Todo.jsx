function Todo({ title, description, completed, _id, setTodos }) {
  function toggleHandler(_id) {
    fetch("http://localhost:3000/toggle", {
      method: "PUT",
      body: JSON.stringify({
        id: _id,
      }),
      headers: {
        "Content-Type": "application/json", // Declare the data type
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos((todos) =>
          todos.map((todo) => (todo._id === _id ? data.updatedTodo : todo)),
        );
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <button onClick={() => toggleHandler(_id)}>
        {completed ? "Mark as undone" : "Mark as done"}
      </button>
    </div>
  );
}

export default Todo;
