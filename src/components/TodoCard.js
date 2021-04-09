import React from 'react'

export default function TodoCard(props) {
    return (
        <li className="todo-card">
            <p>{props.todo.title}</p>
            <p>{props.todo.content}</p>
        </li>
    )
}
