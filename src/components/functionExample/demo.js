import React, { useEffect, useState } from "react";
function Demo(){
    let [text,setText] = useState('Hi');
    const [pass,setPass] = useState('Password')
    useEffect(()=>{
        console.log("Called")
        setTimeout(()=>{
            setText('Welcome'+Math.random());
        },1000)
    },[pass])
    return (
        <>
            <h1>{text}</h1>
            <h1>{pass}</h1>
            <button onClick={()=>setPass('Password'+Math.random())}>Click</button>
        </>
    )
}
export default Demo