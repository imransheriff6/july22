import React from "react";
import ChildComponent from "./consumer";
function ParentComponent() {
    const style = {
        color: 'red',
        background: 'grey',
        margin: 0,
        padding: 0
    }
    return (
        <>
            <h1 style={style}>Parent Component</h1>
            <ChildComponent
                firstName="Sam"
                lastName="Curren"
                age={30}
                gender='Male'
                marks={[20,30,50]}
            />
            <ChildComponent
                firstName="Ram"
                lastName="Charan"
                age={30}
                gender='Male'
                marks={[20,40,80]}
            />
        </>
    )
}
export default ParentComponent