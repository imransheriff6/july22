import React from "react";
import './propsExample.css'
function ChildComponent({ firstName, lastName, ...others }) {
    return (
        <>
            <li className="child">{firstName} {lastName} {others.age} {others.marks}</li>
            <small>{others.gender}</small>
        </>
    )
}
export default ChildComponent