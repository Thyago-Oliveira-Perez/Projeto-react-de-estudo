import React from 'react';
import {useNavigate} from "react-router-dom"

import "./Task.css"

import {CgClose, CgInfo} from "react-icons/cg"

const Task = ({task, handleTaskClick, handleTaskDelete}) => {

    const navigate = useNavigate ();
    const handleTaskDetailsCLick = () => {
        navigate(`/${task.title}`);
    };
    
    return ( 
    <div 
        className="task-container" 
        style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
        <div className="task-title" onClick={() => handleTaskClick(task.id)}>
            {task.title}      
        </div>

        <div className="buttons-container">
            <button className="see-task-details-button" onClick={handleTaskDetailsCLick}>
                <CgInfo/>
            </button>
            <button className="remove-task-button" onClick={() => handleTaskDelete(task.id)}>
                <CgClose/>
            </button>
        </div>

    </div>
    );
};
 
export default Task;