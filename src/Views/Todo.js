import React from 'react';

export default function Todo({ todos, handleClick }) {
  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <li key={item.id}>
          <input
            checked={item.is_complete}
            type="checkbox"
            onChange={() => handleClick(item)}
          ></input>
          {item.todo}
        </li>
      ))}
    </ul>
  );
}