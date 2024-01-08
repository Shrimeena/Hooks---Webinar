import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { addTodo } from '../actions';

const selectTodos = createSelector(
  (state)=>state.todos.list,
  (todos)=>todos
);

const DemoWithReducer = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <div>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default DemoWithReducer;
