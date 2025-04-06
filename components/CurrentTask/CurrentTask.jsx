import { useEffect } from "react";
import './currentTask.css'
import { GiCancel } from "react-icons/gi";
import { Reorder } from "framer-motion";
import { motion } from "motion/react"
const CurrentTask = (props) => {
    function dragStartHandler(e, card){
        
    }

    function dragLeaveHandler(e){
        
    }

    function dragEndHandler(e){
        
    }

    function dragOverHandler(e){
        e.preventDefault()
    }

    function dropHandler(e, card){
        e.preventDefault()
    }
    
    return ( 
        
        <motion.div  dragConstraints={props.constraint} dragMomentum={false} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} drag style={{backgroundColor: props.color}} className="task-container">
        <img className='cancel__button' src={'./../../assets/icons/cancel_button.png'} onClick={()=> props.removeTask(props.id)}></img>
        <div onClick={()=> {props.toggleTask(props.id)}}  className={props.todo.completed ?  "task-text-done":"task-text" }>{props.taskText}</div>
        
        </motion.div>
    );
}
export default CurrentTask;