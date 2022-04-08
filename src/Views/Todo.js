import { useEffect, useState } from 'react';
import { fetchTodos, updateTodo } from '../services/todo';

export default function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodoData = async () => {
      const data = await fetchTodos();
      setTodos(data);
    };
    fetchTodoData();
  }, []);

  const handleClick = async (item) => {
    item.complete = !item.complete;
    await updateTodo(item);
    const data = await fetchTodos();
    setTodos(data);
  };

  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <li key={item.id}>
          <input checked={item.complete} type="checkbox" onChange={() => handleClick(item)}></input>
          {item.todo}
        </li>
      ))}
    </ul>
  );
}
