import React from 'react';
import { Todo } from 'src/model';
import TodoItem from './TodoItem';
import { Droppable } from "react-beautiful-dnd";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    items: number;
    filter: string;
}


const ToDoList: React.FC<Props> = ({ todos, setTodos, filter }) => {
    return (
        <>

            <Droppable droppableId='droppable'>
                {(provided, snapshot) => (
                    <div className="todos" ref={provided.innerRef}  {...provided.droppableProps}>
                        {todos.length === 0 && (<p style={{ margin: '16px', textAlign: 'center' }}>No items found</p>)}
                        {todos.map((todo, index) => (

                            <TodoItem
                                index={index}
                                key={todo.id}
                                todo={todo}
                                todos={todos}
                                filter={filter}
                                setTodos={setTodos}
                            />


                        ))}
                        {provided.placeholder}
                    </div>
                )}

            </Droppable>
        </>
    );
}

export default ToDoList;