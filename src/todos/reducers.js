import {CREATE_TODO,MARK_COMPLETED,REMOVE_TODO} from './actions';

export const todos = (state =[], action) => {
    const {type,payload} = action;
    switch(type){
        case CREATE_TODO:{
            const {text}=payload;
            const newTodo={
                text,
                isCompleted: false
            };
            return [...state, newTodo]//state.concat(newTodo);
        }
            
        case REMOVE_TODO:{
            const {text}=payload;
            
            return state.filter(todo=>todo.text!=text);
        }
        case MARK_COMPLETED:{
            const {text}=payload;
            const newState = state.map(todo=>{
               return todo.text==text? {text,isCompleted:true}: todo;
            })
            return newState;
        }
        default:
            return state;
    }
}