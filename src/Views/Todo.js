import { useEffect, useState } from 'react';
import { fetchTodos } from '../services/todo';

export default function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodoData = async () => {
      const data = await fetchTodos();
      setTodos(data);
    };
    fetchTodoData();
  }, []);

  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <li key={item.id}>
          <input
            checked={item.is_complete}
            type="checkbox"
            // onChange={() => handleClick(item)}
          ></input>
          {item.todo}
        </li>
      ))}
    </ul>
  );
}
