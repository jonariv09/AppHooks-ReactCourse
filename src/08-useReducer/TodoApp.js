import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer';
import './styles.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {
  // const initialState = [{
  //   id: new Date().getTime(),
  //   desc: 'Aprender React',
  //   done: false
  // }]
  // return initialState;
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId
    }

    dispatch(action);
  }

  const handleToggle = (todoId) => {

    const action = {
      type: 'toggle',
      payload: todoId
    }

    dispatch(action);
  }


  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo
    })
  }


  return (
    <div>
      <h1> TODO APP ({ todos.length }) </h1>
      <hr />

      <div className="container">
        <div className="list">

          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />

          

        </div>

        <hr />
        <div className="form">
          
          <TodoAdd
            handleAddTodo={handleAddTodo}
          />

        </div>

      </div>

    </div>
  )
}
