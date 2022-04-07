import React from 'react';

export default function NewTodo({ newTodo, setNewTodo, handleSubmit }) {
  return (
    <>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        type="text"
        placeholder="Add new task"
      />{' '}
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}