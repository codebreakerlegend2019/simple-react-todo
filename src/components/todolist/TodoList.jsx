import React,{useState} from 'react'
import TodoForm from '../todoform/TodoForm';
import './todolist.scss'
export default function TodoList({todos,removeTodo,updateTodo}) {
    const [edit,setEdit] = useState({
        id:null,
        value: ''
    });

    const submitUpdate = value =>{
        updateTodo(edit.id,value)
        setEdit({
            id:null,
            value: ''
        })
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }
    
    return (
        <ul>
            {todos.map(todo =>(
                <li key={todo.id}>
                <div className='wrapper'>
                    <div className="left">
                        <h1>{todo.text}</h1>
                    </div>

                    <div className="right">
                         <button className='update' onClick={()=> setEdit({id:todo.id,value:todo.text})}>Update</button>
                         <button className='delete'onClick={()=> removeTodo(todo.id)} >Delete</button>
                    </div>
                </div>
            </li>
            ))}
            
        </ul>
    )
}
