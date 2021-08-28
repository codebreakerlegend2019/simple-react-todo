import React,{useState,useEffect,useRef} from 'react'
import '../todoform/todoform.scss'
export default function TodoForm(props) {
    
    const [input,setInput] = useState(props.edit ? props.edit.value:'');

    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    })
    
    const handleChange = e =>{
        console.log(e.target.value);
        setInput(e.target.value)
    }
    const handleSubmit = e =>{

        e.preventDefault();
        console.log(input)
        let data = {
            id: Math.floor(Math.random()*10000),
            text:input
        };
        console.log(data)
        props.onSubmit(data);

        setInput('');

    }
    return (
    <form className="formarea" onSubmit={handleSubmit}>
        {
        props.edit ? (
            <>
             <input type='text' 
             placeholder='Update your item'
             value={input}
             name='text'
             onChange={handleChange}
             className='todo-input'
             ref={inputRef}/>
            <button className='todo-add'>Update</button>
            </>
        ) : (
            <>
            <input type='text' 
            placeholder='Add your item'
            value={input}
            name='text'
            ref={inputRef}
            onChange={handleChange}
            className='todo-input'/>
           <button className='todo-add'>Add</button>
           </>
        )}
        </form>
    );
}
