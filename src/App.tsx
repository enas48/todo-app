import React, { useState, useEffect } from 'react';
import { Todo } from './model';
import './App.css';
import InputFeild from './components/InputFeild';
import ToDoList from './components/ToDoList';
import Footer from './components/Footer';
import Header from './components/Header';
import { DragDropContext, DropResult } from "react-beautiful-dnd";


function App() {
  const [theme, setTheme] = useState<string>('light');
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [items, setItems] = useState<number>(0);
  const [filter, setfilter] = useState<string>('all');

  useEffect(() => {

    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'))
    } else {
      localStorage.setItem('theme', theme);
    }
    setItems(todos.filter(todo => todo.isDone !== true).length)
  }, [theme, todos])



  const handleAdd = (e) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo('')
    }

  }
  const filterTodos = (filter) => {
    setfilter(filter);
  };
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) {
      return
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }
    let add, active = todos;
    if (source.droppableId === 'droppable') {
      add = active[source.index];
      active.splice(source.index, 1)
    }
    if (destination.droppableId === 'droppable') {
      active.splice(destination.index, 0, add)

    }
    setTodos(active)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={`App ${theme}`}>
        <div className="pc">
          <img className={`header-bg ${theme !== 'light' ? '' : 'hidden'} `} src={process.env.PUBLIC_URL + "images/bg-desktop-dark.jpg"} alt="" />
          <img className={`header-bg ${theme !== 'dark' ? '' : 'hidden'} `} src={process.env.PUBLIC_URL + "images/bg-desktop-light.jpg"} alt="" />
        </div>
        <div className="mob">
          <img className={`header-bg ${theme !== 'light' ? '' : 'hidden'} `} src={process.env.PUBLIC_URL + "images/bg-mobile-dark.jpg"} alt="" />
          <img className={`header-bg ${theme !== 'dark' ? '' : 'hidden'} `} src={process.env.PUBLIC_URL + "images/bg-mobile-light.jpg"} alt="" />
        </div>
        <div className="container">
          <Header theme={theme} setTheme={setTheme} />
          <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
          <ToDoList todos={todos} filter={filter} setTodos={setTodos} items={items} />
          <Footer items={items} filter={filter} todos={todos} filterTodos={filterTodos} setTodos={setTodos} />
          {todos.length > 1 && (
            <p className="drag">Darg and drop to reorder list</p>
          )}
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;