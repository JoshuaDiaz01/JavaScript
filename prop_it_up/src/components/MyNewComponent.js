import React, { Component } from 'react';

class MyNewComponent extends Component{
    constructor(props){
        super(props);
        const {age} = this.props;
        this.state = {
            age: age
        }
    }
    addAge = (e) => {
        
        this.setState({age: this.state.age+1});
    }

    render(){

        const {firstName, lastName, age, hairColor} = this.props
        
        return(
            <div>
                <h1>{firstName}, {lastName} </h1>
                <h1>{this.state.age} </h1>
                <button onClick = {this.addAge }>Add age by one</button>
                <h1>{hairColor}</h1>
            </div>
        );
    }
} 

export default MyNewComponent 