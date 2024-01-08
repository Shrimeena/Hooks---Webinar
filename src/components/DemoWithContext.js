import React, { useState } from 'react';
import useStore from '../helperComponents/useStore';

const DemoWithContext = () => {
    const [{todos}, setStore] = useStore();
    const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = async () => {
    setStore({todos: [...todos, newTodo]});
    console.log('Todo added successfully!');
  };

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
        {console.log("SHRII 111")}
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

export default DemoWithContext;
