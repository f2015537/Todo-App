import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((data) => data.json())
      .then((data) => setTodos(data.todos))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <CreateTodo setTodos={setTodos} />
      {todos.map((todo) => (
        <Todo key={todo._id} {...todo} setTodos={setTodos} />
      ))}
    </>
  );
}

export default App;
