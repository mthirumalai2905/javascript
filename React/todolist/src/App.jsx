import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {
  // State to manage tasks
  const [tasks, setTasks] = useState([]);

  // Ref to get input value
  const taskInputRef = useRef();

  // Function to add a task
  const addTask = () => {
    const taskTitle = taskInputRef.current.value;
    if (taskTitle.trim() !== '') {
      setTasks(prevTasks => [...prevTasks, taskTitle]);
      taskInputRef.current.value = ''; // Clearing input field
    }
  };

  // Function to remove a task
  const removeTask = index => {
    setTasks(prevTasks => prevTasks.filter((task, i) => i !== index));
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='add'>
          {/* Input field with ref */}
          <input ref={taskInputRef}   placeholder='Add Task'></input>
          {/* Button to add tasks */}
          <button onClick={addTask}>Add</button>
        </div>
        <div className='task-list'>
          {/* Mapping over to display them */}
          {tasks.map((task, index) => (
            <div key={index} className='task'>
              {task}
              {/* Button to remove task */}
              <button onClick={() => removeTask(index)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
