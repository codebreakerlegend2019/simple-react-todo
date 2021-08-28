import React,{useState} from 'react'
import TodoList from '../todolist/TodoList'
import TodoForm from '../todoform/TodoForm'
import './todopage.scss'
export default function TodoPage() {

    const [todos,setTodos] = useState([]);

    const addTodo = todo =>{

        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos =[todo, ...todos]

        setTodos(newTodos);
    }

    const updateTodo = (todoId,newValue) =>{

        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev => prev.map(item=>(item.id === todoId ? newValue: item)));
    }
 

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo=> todo.id !== id);
        setTodos(removeArr);
    }
  
    return (
        <div className='todo'>
            <h1>
                What's your plan for today?
            </h1>
            <TodoForm onSubmit={addTodo}/>
            <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}
