const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.error("Something went wrong"));

// Define schemas
const TodoSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = {
  Todo,
};
