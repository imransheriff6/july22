import React from "react";
import { Link } from "react-router-dom";
function About() {
    return (
        <>
            
            <h1>Welcome to About screen</h1>
            <button><Link to='/home'>Go to Home</Link></button>
        </>
    )
}
export default About
