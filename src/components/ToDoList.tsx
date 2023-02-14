import React from 'react';
import { Todo } from 'src/model';
import TodoItem from './TodoItem';
 interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
 }
const ToDoList: React.FC<Props> = ({todos,setTodos}) => {
    return (<div className="todos">
        {todos.map(todo=>(
            <TodoItem key={todo.id} todo={todo}/>
      
        ))}
    </div>  );
}
 
export default ToDoList;