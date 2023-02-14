import React, {useState,useEffect} from 'react';
import { Todo } from './model';
import './App.css';
import InputFeild from './components/InputFeild';
import ToDoList from './components/ToDoList';

function App() {
  const [theme,setTheme]=useState<string >('light');
  const [todo, setTodo]=useState<string >('');
  const [todos, setTodos]=useState<Todo[]>([]);


useEffect(() => {
  if(localStorage.getItem('theme')){
    setTheme(localStorage.getItem('theme'))
  }else{
  localStorage.setItem('theme',theme);
  }
}, [theme])

  const changeTheme=()=>{
    if(theme==='dark'){
      setTheme('light');
      localStorage.setItem('theme','light');
    }else{
      setTheme('dark'); 
      localStorage.setItem('theme','dark');
    }
  }

  const handleAdd=(e)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      setTodo('')
    }
 
  }
  console.log(todos)
  return (
    <div className={`App ${theme}`}>
      <div className="pc">
      <img className={`header-bg ${theme!=='light'?'':'hidden'} `} src={ process.env.PUBLIC_URL+"images/bg-desktop-dark.jpg"} alt=""/>
      <img className={`header-bg ${theme!=='dark'?'':'hidden'} `} src={ process.env.PUBLIC_URL+"images/bg-desktop-light.jpg"} alt="" />
      </div>
      <div className="mob">
      <img className={`header-bg ${theme!=='light'?'':'hidden'} `} src={ process.env.PUBLIC_URL+"images/bg-mobile-dark.jpg"} alt=""/>
      <img className={`header-bg ${theme!=='dark'?'':'hidden'} `} src={ process.env.PUBLIC_URL+"images/bg-mobile-light.jpg"} alt="" />
      </div>
    <div className="container">
    <div className="heading">
      <h1>T O D O</h1>
      <button className="icon-btn" onClick={changeTheme}>
        {theme==='dark'?  
        <img src={ process.env.PUBLIC_URL+"images/icon-sun.svg"} alt=""/>:
        <img src={ process.env.PUBLIC_URL+"images/icon-moon.svg"} alt=""/>
        }
      </button>
    </div>
    <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    <ToDoList todos={todos} setTodos={setTodos} />
    </div>
    </div>
  );
}

export default App;