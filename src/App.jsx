import React, { useState, useEffect } from "react";
import {v4 as uuidv4} from "uuid";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from "axios";

import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

import "./App.css"


const App = () => {
  const [tasks, setTasks] = useState([
  {
    id: "",
    title: "",
    completed: null,
  },
]);

useEffect(() => {

    const fetchTasks = async () =>{

      const {data} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10");
      setTasks(data);

    }
    fetchTasks();
}, []);

const handleTaskClick = (taskId) =>{

    const newTask = tasks.map(task => {

        if(task.id===taskId){
          return {... task, completed: !task.completed
          }
        }else{
          return task;
        }
    })
    setTasks(newTask);
}

const handleTaskDelete = (taskId) =>{

  const newTask = tasks.filter(task =>  task.id !== taskId)
    setTasks(newTask);
}

const handleTaskAddition = (taskTitle) =>{

  	const newTasks = [... tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    },];

    setTasks(newTasks);
}
  
  return (
    <Router>
      <div className="container">
        <Header/>
          <Routes>
            <Route
              path="/" 
              element={(
                <>
                  <AddTask handleTaskAddition={handleTaskAddition}/>
                  <Tasks
                    tasks={tasks}
                    handleTaskClick={handleTaskClick}
                    handleTaskDelete={handleTaskDelete}
                  />
                </>
              )}
            />
            <Route
              path="/:taskTitle"
              element={<TaskDetails/>}
            />
          </Routes>
      </div>
    </Router>
  );
}

export default App;