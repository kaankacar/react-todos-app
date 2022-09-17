import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div className='container'>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button className='border rounded-pill bg-light' style={{margin: '20px'}} onClick={handleFilter}>Clear Completed Tasks</button>
        </div>
    );
};

export default ToDoList;