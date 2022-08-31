import React, { Component } from 'react';

class MyNewComponent extends Component{
    render(){
        const {firstName, lastName, age, hairColor} = this.props
        return(
            <div>
                <h1>{firstName}, {lastName} </h1>
                
                <h1>{age} </h1>
                <h1>{hairColor}</h1>
                
            </div>
        );
    }
} 
 
export default MyNewComponent 