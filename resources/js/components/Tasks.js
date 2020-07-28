import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Tasks = (props) => {    
    const [tasks, setTasks] = useState([]);
    const [taskContent, setTaskContent] = useState("");
    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = () => {
        fetch('/api/tasks').then(r => r.json()).then(result => {
            setTasks(result);
        });
    }

    const createTask = () => {
        fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'                
            },
            body: JSON.stringify({ content: taskContent })
        }).then(r => r.json()).then(result => {
            fetchTasks();
        });
    }

    return (
        <>
            <h1>Tasks Edited</h1> 
            <input type="text" value={taskContent} onChange={e => setTaskContent(e.target.value)}/>
            <button onClick={ createTask }>Dodaj</button>
            <ul>
                {
                    tasks.map(task => (
                        <li key={`task-${task.id}`}>{ task.content }</li>
                    ))
                }                
            </ul>
        </>
    )
}

const tasks = document.querySelector('.task');

if(document.getElementById('tasks')){
    ReactDOM.render(<Tasks content="123"/>, document.getElementById('tasks'));
}
