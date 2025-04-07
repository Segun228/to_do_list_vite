import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { uid } from 'uid'
import randomColor from 'randomcolor'
import './App.css'
import CurrentTask from '../CurrentTask/CurrentTask';
import {Reorder} from 'framer-motion'; 
import axios from 'axios'

function App() {
  const inputRef = useRef(null);
  const constraintsRef = useRef(null)
  const myLink = "https://my-json-server.typicode.com/Segun228/dummy_api_data"
  useEffect(()=>{if (inputRef.current) {
    inputRef.current.focus();}
}, [])
  const [todos, setTodos] = useState([])
  const [currentTodo, setCurrentTodo] = useState("");
  


  useEffect(() => {
    const fetchData = async () => { 
      try {
        const response = await axios.get('https://my-json-server.typicode.com/Segun228/dummy_api_data');
        setTodos(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error); 
      }
    };

    fetchData();

  }, []);


  const addTask = (currentTodo) => {
    if(currentTodo){
      const newElem = {
        text : currentTodo,
        date : Date.now(),
        id : uid(),
        completed : false,
        color: randomColor({luminosity: 'light',}),
      }
      setTodos([newElem, ...todos])
    }
    else{
      alert("Doing nothing isn`t a task!")
    }
    
  }

  useEffect(
    () => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]
  )

  const removeTask = (id) => {
    setTodos([...todos.filter((todo)=>todo.id !== id)])
    console.log("task removed")
  }

  const toggleTask = (id) => {
    setTodos([...todos.map((todo)=> todo.id=== id ? {...todo, completed: !todo.completed} : {...todo})])
    console.log("task toggled")
  }

  const handleChange = (e) => {
    setCurrentTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(currentTodo)
    setCurrentTodo("")
  }

  return (
    <>
    <div className="App">
      <div ref={constraintsRef} className='wrapper'>
        <form className="task-form" onSubmit={handleSubmit}>
        <input 
        ref={inputRef}
        className='task-input'
        type="text" 
        placeholder="Enter task..."
        onChange={handleChange}
        value = {currentTodo}
        ></input>
        <button className='task-submit-button'>Submit</button>
        </form>
        <div className="task__list">
          {todos.map((todo)=>{
            return(<CurrentTask 
              
              color={todo.color} 
              todo={todo} 
              key={todo.id} 
              id={todo.id} 
              taskText={todo.text} 
              toggleTask={toggleTask} 
              removeTask={removeTask}
              ></CurrentTask>);
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
