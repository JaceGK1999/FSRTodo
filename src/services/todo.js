import { checkError, client } from './client';
export async function fetchTodos() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}

// export async function fetchTodoByUserId(user_id) {
//   const resp = await client.from('todos').select('*').eq('user_id', user_id);
//   return checkError(resp);
// }

export async function createTodo(todo) {
  const resp = await client.from('todos').insert(todo);
  return checkError(resp);
}

export async function updateTodo(todo) {
  const resp = await client.from('todos').update(todo).match({ id: todo.id });
  return checkError(resp);
}
