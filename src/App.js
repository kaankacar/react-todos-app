import React, { useState, useEffect } from 'react';
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import './App.css';
import axios from "axios";

function App() {

  const [username, setUsername] = useState("Your Username Should Be Here.")

  const changeUsername = () => {
    setUsername(prompt("What Is Your Age?"));
  }

  useEffect(changeUsername, []);
  localStorage.setItem("username", username)


  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const { data } = await axios.get("https://632578f270c3fa390f88d272.mockapi.io/todos")

    setToDoList(data)
  }

  const handleToggle = (id) => {
    let mapped = toDoList.map(content => {
      return content.id === Number(id) ? { ...content, isCompleted: !content.isCompleted } : { ...content };
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(content => {
      return !content.isCompleted;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, content: userInput, isCompleted: false }];
    setToDoList(copy);
  }

  const changetheme = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

  return (
    <div className="App">
      <header className='m-3'>
        <h1>Welcome to your To Do App {username}</h1>
      </header>
      <div className='row justify-content-end fixed-top'><button className='border rounded-pill col-3' onClick={changetheme}> Click to Change Modes(Light/Dark) </button></div>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
      <ToDoForm addTask={addTask} />
    </div>
  );
}


export default App;
