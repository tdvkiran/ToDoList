import React from 'react';
import {hot} from 'react-hot-loader';
import './App.css';
import TodoList from './todos/ToDoList';

const App =()=>{
    return (
    <div className="App">
        <TodoList todos={[{text:"Hello"}]}/>
    </div>
    );
}

export default hot(module)(App);