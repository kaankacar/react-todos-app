import React, { useState, useEffect } from 'react'

function User() {
    const [username, setUsername] = useState("Your Username Should Be Here.")
    var userNamePrompt = prompt("Enter your user name: ")

    const changeUsername = () => {
        setUsername(prompt("What Is Your Age?"));
    }

    useEffect(changeUsername, []);

    return (
        <div>

        </div>
    )
}

export default User