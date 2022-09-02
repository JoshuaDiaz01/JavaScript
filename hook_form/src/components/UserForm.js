import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("")
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("");  
    const [passwordError, setPasswordError] = useState("")
    
    const createUser = (e) => {
        setUsername(e.target.value);
        if(e.target.value.length< 5){
            setUsernameError("Username must be 5 Characters or longer");
        }
        else{
            setUsernameError("");
        }
        setEmail(e.target.value);
        if(e.target.value.length< 5){
            setEmailError("Email must be 5 Characters or longer");
        }
        else{
            setEmailError("");
        }
        setPassword(e.target.value);
        if(e.target.value.length< 5){
            setPasswordError("Password must be 5 Characters or longer");
        }
        else{
            setPasswordError("");
        }
        e.preventDefault();

        const newUser = { username, email, password };
        console.log("Welcome", newUser);
    };
    
    return(
        <div>
        <form onSubmit = {(e) => e.preventDefault()}>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={username}/>
                {
                    usernameError ?
                    <p>{usernameError}</p>:
                    ""
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={email} /> 
                {
                    emailError ?
                    <p>{emailError}</p>:
                    ""
                }

            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={password}/>
                {
                    passwordError ?
                    <p>{passwordError}</p>:
                    ""
                }
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