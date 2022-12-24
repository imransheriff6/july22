import React, { Component } from "react";
class ClassExample extends Component{
    render(){
        const {fname,lname,...others} = this.props;
        return <h1>Class Component - {fname} {lname} {others.age} {others.salary}</h1>
    }
}
export default ClassExample