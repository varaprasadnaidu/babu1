import React, { Component } from 'react'
import {connect} from 'react-redux';
import TodoItem from './todo-item';
import TodoForm from './todo-form';

 class TodoList extends Component {
     constructor(props){
            super(props);
            this.deleteTodo=this.deleteTodo.bind(this);

     }
     deleteTodo(id){
         console.log('In the Parent',id);
         this.props.onDeleteTodo(id);
        }
  render() {
    return (
        <div className="ui grid">
            <div className="six wide column">
                <h3>List of Todos</h3>
                <TodoForm />
                <div className="ui selection aligned list">
                {
                this.props.todos.map(todo=><TodoItem 
                    key={todo.id} 
                    todo={todo}
                    deleteTodo={this.deleteTodo}/>)
                }
                
                </div>
            </div>
        </div>
    )
  }
}
const mapStateToProps=(state)=>{
    return {
        todos:state.todos
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onDeleteTodo:(id)=>{
            dispatch({type: 'DELETE_TODO',id})
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);