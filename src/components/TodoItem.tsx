import React, {useState,useRef,useEffect} from 'react';
import { Todo } from 'src/model';
import { MdClear } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi'
interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
    const [edit,setEdit]=useState<boolean>(false)
    const [editTodo, seteditTodo] = useState<String>(todo.todo)
    const inputRef=useRef<HTMLInputElement>(null);

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const handleEdit = (e:React.FormEvent,id: number) => {
        e.preventDefault();
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, todo: editTodo } : todo
            )
        );
        setEdit(false)
    };

    const deleteTodo = (id: number) => {
        setTodos(
            todos.filter((todo) =>
                todo.id !== id
            )
        );
    };

useEffect(()=>{
    inputRef.current?.focus();
},[edit])
    return (
        <form className={`todo-item ${todo.isDone ? 'checked' : ''} `} onSubmit={(e) => handleEdit(e, todo.id)}>
            <button className="input-submit" type="button" onClick={() => handleDone(todo.id)}></button>
            {edit ? (<input ref={inputRef} className="edit-input" type="text" value={editTodo} onChange={(e) => seteditTodo(e.target.value)} />) : (<p>{todo.todo}</p>)}

            <div className="icon-container">
                <span onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }}> <FiEdit /></span>
                <span onClick={() => { deleteTodo(todo.id) }}>  <MdClear /></span>
            </div>
        </form>

    );
}

export default TodoItem;