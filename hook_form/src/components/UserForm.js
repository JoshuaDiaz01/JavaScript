import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("")
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("");  
    const [passwordError, setPasswordError] = useState("")
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser= {username, email, password};
    }

    const handleUserName = (e) => {
        setUsername(e.target.value);
        if(e.target.value.length< 5){
            setUsernameError("Username must be 5 Characters or longer");
        }
        else{
            setUsernameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length< 5){
            setEmailError("Email must be 5 Characters or longer");
        }
        else{
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length< 5){
            setPasswordError("Password must be 5 Characters or longer");
        }
        else{
            setPasswordError("");
        }
    }

    
    
    return(
        <div>
        <form onSubmit = {createUser}>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={handleUserName}/>
                {
                    usernameError ?
                    <p>{usernameError}</p>:
                    ""
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={handleEmail} /> 
                {
                    emailError ?
                    <p>{emailError}</p>:
                    ""
                }

            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={handlePassword}/>
                {
                    passwordError ?
                    <p>{passwordError}</p>:
                    ""
                }
            </div>
            <input type="submit" value="Create User" />
        </form>

        </div>
    );
}

export default UserForm;