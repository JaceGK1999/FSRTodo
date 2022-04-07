import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header({ currentUser }) {
  return (
    <div>
      {currentUser && (
        <ul>
          <li>
            <NavLink to={'/create'}>Create a new todo.</NavLink>
          </li>
          <li>
            <NavLink to={'/todos'}>Back to your todos.</NavLink>
          </li>
          <li>logout</li>
        </ul>
      )}
      {!currentUser && <p>Please sign In below</p>}
    </div>
  );
}
