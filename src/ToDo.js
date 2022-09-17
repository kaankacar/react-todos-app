import React from 'react';

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    if (todo.content.length < 3){
        return false
    }

    return (
        <div id={todo.id} key={todo.id + todo.content} name="todo" value={todo.id} onClick={handleClick} className={todo.isCompleted ? "todo strike" : "todo"}>
            {todo.content}
        </div>
    );
};

export default ToDo;