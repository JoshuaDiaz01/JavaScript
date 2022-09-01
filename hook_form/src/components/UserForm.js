import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    const createUser = (e) => {
        setUsername("");
        setEmail("");
        setPassword("");
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
    };
    
    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } value = {username}/>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value = {email} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value = {password}/>
            </div>
            <input type="submit" value="Create User" />
        </form>

        
            <h1>{username}</h1>
            <h1>{email}</h1>
            <h1>{password}</h1>
        </div>
    );
};
    
export default UserForm;