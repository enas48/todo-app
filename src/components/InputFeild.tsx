import React from 'react';
import "./style.css"
interface InputFeildProps {
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd:()=>void
}
 
const InputFeild:React.Fc<InputFeildProps> = ({todo,setTodo,handleAdd}) => {
    return ( 
    <form className="input" onSubmit={handleAdd}>
         <button className="input-submit"></button>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="Enter a task" className="input_box" />

    </form> );
}
 
export default InputFeild;