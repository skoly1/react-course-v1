interface Todo {
  name: string;
  id: number;
}

// Simulate GET /todos endpoint
export const getTodos = async (): Promise<Todo[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const todos = localStorage.getItem('todos');
  if (!todos) {
    // Initialize with 3 dummy items
    const dummyTodos: Todo[] = [
      { id: 1, name: 'Learn React' },
      { id: 2, name: 'Build Todo App' },
      { id: 3, name: 'Master TypeScript' }
    ];
    localStorage.setItem('todos', JSON.stringify(dummyTodos));
    return dummyTodos;
  }
  
  return JSON.parse(todos);
};

// Simulate POST /todos endpoint
export const createTodo = async (name: string): Promise<Todo> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const todos = localStorage.getItem('todos');
  const currentTodos: Todo[] = todos ? JSON.parse(todos) : [];
  
  // Create new todo with unique ID
  const newTodo: Todo = {
    name,
    id: Date.now()
  };
  
  // Add to existing todos
  const updatedTodos = [...currentTodos, newTodo];
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
  
  return newTodo;
};
