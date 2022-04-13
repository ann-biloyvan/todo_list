import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import Sort from './components/Sort';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [selectedSort, setSellectedSort] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([{ id: Date.now(), title: todo, done: false }, ...todos]);
    setTodo('');
  };

  const deleteHandler = (todoId) => {
    const updatedTodos = todos.filter((item) => item.id !== todoId);
    setTodos(updatedTodos);
  };

  const doneHandler = (todoId) => {
    const index = todos.findIndex((emp) => emp.id === todoId);
    const newTodo = [...todos];

    newTodo[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done,
    };

    setTodos(newTodo);
  };

  const sortHandler = (sort) => {
    setSellectedSort(sort);
    if (sort === 'by name') {
      setTodos(todos.sort((a, b) => a.title.localeCompare(b.title)));
    }
    if (sort === 'newest first') {
      setTodos(todos.sort((a, b) => b.id - a.id));
    }
    if (sort === 'oldest first') {
      setTodos(todos.sort((a, b) => a.id - b.id));
    }
  };

  return (
    <div className="main">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        value={todo}
        submit={submitHandler}
        onChange={(e) => setTodo(e.target.value)}
      />
      <hr />
      {todos.length >= 1 && (
        <Sort
          value={selectedSort}
          onChange={(sort) => {
            sortHandler(sort);
          }}
          option={['newest first', 'oldest first', 'by name']}
        />
      )}
      <List
        todos={todos}
        deleteHandler={deleteHandler}
        doneHandler={doneHandler}
      />
    </div>
  );
};

export default App;
