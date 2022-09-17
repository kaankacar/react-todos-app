import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className='border rounded-pill' value={userInput} type="text" onChange={handleChange} placeholder="  Enter task..."/>
            <button className='border rounded-pill ml-3 bg-light'>Submit</button>
        </form>
    );
};

export default ToDoForm;