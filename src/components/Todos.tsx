import React from 'react'

import Todo from './Models/todo';
import TodoItem from './TodoItem';

// we can use class as an type in components

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul>
            {props.items.map(item => <TodoItem key={item.id} text={item.text} />)}
        </ul>

    )
}

export default Todos;