const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

// The path to the JSON file where we'll store todos.
const dataFilePath = path.join(__dirname, "todos.json");

/**
 * Helper function to read todos from a file.
 */
function readTodos() {
  try {
    const data = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    // If the file doesn't exist or is invalid, return an empty array.
    return [];
  }
}

/**
 * Helper function to write todos to a file.
 */
function writeTodos(todos) {
  fs.writeFileSync(dataFilePath, JSON.stringify(todos, null, 2));
}

/**
 * GET /todos
 * Retrieve all todos.
 */
app.get("/todos", (req, res) => {
  const todos = readTodos();
  res.json(todos);
});

/**
 * POST /todos
 * Create a new todo item.
 */
app.post("/todos", (req, res) => {
  const todos = readTodos();

  // For simplicity, use Date.now() as a unique ID.
  const newTodo = {
    id: Date.now(),
    title: req.body.title,
    completed: false,
  };

  todos.push(newTodo);
  writeTodos(todos);
  res.json(newTodo);
});

/**
 * PUT /todos/:id
 * Update an existing todo item by ID.
 */
app.put("/todos/:id", (req, res) => {
  const todos = readTodos();
  const { id } = req.params;

  const index = todos.findIndex((todo) => todo.id == id);
  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  // Update only the fields provided in the request.
  todos[index] = {
    ...todos[index],
    title: req.body.title !== undefined ? req.body.title : todos[index].title,
    completed:
      req.body.completed !== undefined
        ? req.body.completed
        : todos[index].completed,
  };

  writeTodos(todos);
  res.json(todos[index]);
});

/**
 * DELETE /todos/:id
 * Remove a todo item by ID.
 */
app.delete("/todos/:id", (req, res) => {
  const todos = readTodos();
  const { id } = req.params;

  const index = todos.findIndex((todo) => todo.id == id);
  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const deletedTodo = todos.splice(index, 1)[0];
  writeTodos(todos);
  res.json(deletedTodo);
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
