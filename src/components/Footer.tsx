import React from 'react';
import "./style.css"
import { Todo } from '../model';
interface Props {
    items: number;
    filter: string;
    filterTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    todos: Todo[]
}

const Footer: React.Fc<Props> = ({ todos, items, filter, filterTodos, setTodos }: Props) => {
    const clearCompleted = () => {
        setTodos(
            todos.filter((todo) =>
                todo.isDone !== true
            )
        );
    }
    return (
        <div className="footer">
            <span className="items">{items} items left</span>
            <div className="filter-container">
                <span className={filter === 'all' ? 'active' : ''} onClick={() => { filterTodos("all") }}>All</span>
                <span className={filter === 'active' ? 'active' : ''} onClick={() => { filterTodos("active") }}>Active</span>
                <span className={filter === 'completed' ? 'active' : ''} onClick={() => { filterTodos("completed") }}>Completed</span>
            </div>
            <div >
                <span onClick={clearCompleted}>Clear Completed</span>
            </div>
        </div>);
}

export default Footer;