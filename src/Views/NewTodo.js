import { useState } from 'react';
import { createTodo } from '../services/todo';

export default function NewTodo() {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = async () => {
    await createTodo({ complete: false, todo: newTodo });
    setNewTodo('');
  };

  return (
    <div>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        type="text"
        placeholder="Add new task"
      />{' '}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
