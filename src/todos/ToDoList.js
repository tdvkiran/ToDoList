import React from 'react';
import {connect} from 'react-redux';

import {markCompleted, removeTodo} from './actions';
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'

const TodoList =({todos, onRemovePressed, onCompletePressed})=>{

    return(
        <div className='list-wrapper'>
            <NewTodoForm/>
            {todos.map(todo=><TodoListItem 
            todo={todo} 
            onRemovePressed ={onRemovePressed}
            onCompletePressed ={onCompletePressed}/>)}
        </div>
    )
}

const mapStateToProps = state =>({
    todos: state.todos
});

const mapDispatchToProps = dispatch =>({
    onRemovePressed: text=> dispatch(removeTodo(text)),
    onCompletePressed: text=> dispatch(markCompleted(text)),
});


export default connect(mapStateToProps,mapDispatchToProps)(TodoList);