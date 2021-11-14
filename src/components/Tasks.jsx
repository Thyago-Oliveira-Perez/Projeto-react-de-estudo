import React from "react";

import Task from "./Task";

const Tasks = ({tasks, handleTaskClick, handleTaskDelete}) => {

    return (
    <div>
        {tasks.map((task) => (
            <Task 
                key={task.id}
                task={task}
                handleTaskClick={handleTaskClick}
                handleTaskDelete={handleTaskDelete}
            />
        ))}

    </div>);
};

export default Tasks;