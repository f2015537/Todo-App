const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/todo", async (req, res) => {
  const result = createTodo.safeParse(req.body);
  console.log(result.success, result.data);
  if (!result.success) {
    return res.status(411).json({ msg: "You sent the wrong inputs" });
  }
  // put it in mongodb
  const createdTodo = await Todo.create(result.data);
  return res.json({ msg: "Todo created with id " + createdTodo.id });
});

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  return res.json({ todos });
});

app.put("/toggle", async (req, res) => {
  const result = updateTodo.safeParse(req.body);
  console.log(result.success, result.data);
  if (!result.success) {
    return res.status(411).json({ msg: "You sent the wrong inputs" });
  }
  const updatedTodo = await Todo.findByIdAndUpdate(
    result.data.id,
    [{ $set: { completed: { $not: "$completed" } } }],
    { new: true, updatePipeline: true },
  );
  return res.json({ msg: "Todo updated", updatedTodo });
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
