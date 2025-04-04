import { useState } from 'react'
import { useEffect } from 'react'
import { uid } from 'uid'
import randomColor from 'randomcolor'
import './App.css'
import CurrentTask from '../components/CurrentTask/CurrentTask';

function App() {
  const [todos, setTodos] = useState([])
  const [currentTodo, setCurrentTodo] = useState("");
  const addTask = (currentTodo) => {
    if(currentTodo){
      const newElem = {
        text : currentTodo,
        date : Date.now(),
        id : uid(),
        completed : false,
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

  const removeTask = () => {
    
  }

  const toggleTask = () => {
    
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
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Enter task..."
        onChange={handleChange}
        value = {currentTodo}
        ></input>
        <button >submit</button>
        </form>
        <div className="task__list">
          {todos.map((todo)=>{
            return(<CurrentTask key={uid()} taskText={todo.text} toggleTask={toggleTask} deleteTask={removeTask}></CurrentTask>);
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
