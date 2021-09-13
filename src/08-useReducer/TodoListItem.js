import React from 'react'

export const TodoListItem = ({ todo, handleToggle, handleDelete, index }) => {
  return (
    <li>
      <p
        className={` ${todo.done && 'complete'} `}
        onClick={() => handleToggle(todo.id)}> { index + 1 }. { todo.desc } </p>
      <button
        onClick={() => handleDelete(todo.id)}
      > Borrar </button>
    </li>
  )
}
