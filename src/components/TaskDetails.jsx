import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Button from './Button';

import "./TaskDetails.css"

const TaskDetails = () => {
    
    const params = useParams();

    const navigate = useNavigate();
    const handleTaskDetailsBack = () =>{
        navigate('..');
    }

    return ( 
        <>
            <div className="back-button-container" onClick={handleTaskDetailsBack}>
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor adipisci, sapiente dolores earum delectus mollitia est! Tenetur, asperiores reiciendis vel veritatis optio laboriosam officia recusandae doloribus ratione. Ullam, esse fuga?</p>
            </div>
        </>
     );
}
 
export default TaskDetails;