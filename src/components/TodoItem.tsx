import React from 'react';
import { Todo } from 'src/model';
import {MdClear} from 'react-icons/md';
import {FiEdit} from 'react-icons/fi'
 interface Props{
    todo:Todo;

 }
const TodoItem: React.FC<Props> = ({todo}) => {
    return (<div className="todo-item">
             <button className="input-submit"></button>
            <p>{todo.todo}</p>
            <div>
            <FiEdit/>
            <MdClear/>
            </div>
    

    </div>  );
}
 
export default TodoItem;