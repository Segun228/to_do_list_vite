const CurrentTask = (props) => {
    
    
    return ( 
        <div  className="task-container">
        <div onClick={()=> props.toggleTask(props.id)} className="current-task-item">{props.taskText}</div>
        <button onClick={()=> props.removeTask(props.id)} className="delete__button">delete the task</button>
        </div>
    );
}
export default CurrentTask;