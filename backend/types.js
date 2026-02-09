const z = require("zod");

const createTodo = z.object({
  title: z.string(),
  description: z.string(),
  completed: z.boolean().optional(),
});

const updateTodo = z.object({
  id: z.string(),
});

module.exports = {
  createTodo,
  updateTodo,
};
