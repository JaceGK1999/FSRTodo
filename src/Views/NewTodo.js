import React from 'react';

export default function NewTodo({ newTask, setNewTask, handleSubmit }) {
  return (
    <>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        type="text"
        placeholder="Add new task"
      />{' '}
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}