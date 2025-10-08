import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 500px;
`

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <List>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </List>
  )
}

export default TodoList
