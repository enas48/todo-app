import React from 'react';
import { Todo } from 'src/model';
import TodoItem from './TodoItem';
interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    items: number;
    filter: string;
}


const ToDoList: React.FC<Props> = ({ todos, setTodos, filter }) => {
    return (
        <div className="todos">
            {todos.filter(todo => {
                if (filter === 'all') {
                    return todo
                }
                if (filter === 'active') {
                    return todo.isDone !== true
                }
                if (filter === 'completed') {
                    return todo.isDone === true
                }
                return todo;
            }

            ).map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                />

            ))}
        </div>);
}

export default ToDoList;