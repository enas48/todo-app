import React, { useState, useRef, useEffect } from 'react';
import { Todo } from 'src/model';
import { MdClear } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi'
import { Draggable } from "react-beautiful-dnd";

interface Props {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    filter: string;
}

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos, index, filter }: Props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, seteditTodo] = useState<string>(todo.todo)
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
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

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])
    return (

        <Draggable draggableId={todo.id.toString()} index={index}>
            {(provided, snapshot) => (

                <form
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`todo-item ${filter} ${todo.isDone ? 'checked' : ''}  ${snapshot.isDragging ? "dragactive" : ''} `} onSubmit={(e) => handleEdit(e, todo.id)}>

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
            )}
        </Draggable>

    );
}

export default TodoItem;