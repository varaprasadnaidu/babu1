import React from 'react'

const TodoItem = (props) => {
  return (
    <div className="item">
    <br />
      <button className="ui basic green button" onClick={()=>props.deleteTodo(props.todo.id)}>
        Delete
      </button>
      {props.todo.text}
    </div>
  )
}

export default TodoItem; 