import axios from "axios";

const BASE_URL = "http://localhost:8000";

export async function getTodos() {
  const response = await axios.get(`${BASE_URL}/todos`);
  return response.data;
}

export async function createTodo(title: string) {
  const response = await axios.post(`${BASE_URL}/todos`, { title });
  return response.data;
}

export async function updateTodo(id: number, updates: { title?: string }) {
  const response = await axios.put(`${BASE_URL}/todos/${id}`, updates);
  return response.data;
}

export async function deleteTodo(id: number) {
  const response = await axios.delete(`${BASE_URL}/todos/${id}`);
  return response.data;
}
