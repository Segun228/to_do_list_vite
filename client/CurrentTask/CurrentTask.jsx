const CurrentTask = (props) => {
    return ( 
        <>
        <div className="current-task-item">{props.taskText}</div>
        <button className="delete__button">delete the task</button>
        </>
    );
}
export default CurrentTask;