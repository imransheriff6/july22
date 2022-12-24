import React, { useEffect, useState } from "react";
function Form(){
    const [form,setForm] = useState({
        username:'',
        password:''
    })
    const [error,setError] = useState({
        usernameErr:'',
        passwordErr:''
    })
    function changeHandler(e){
        let obj = {...form};
        obj[e.target.name] = e.target.value;
        setForm(obj)
    }
    const submitHandler = () =>{
        let errObj = {};
        for (let props in form) {
            if (form[props].trim().length === 0){
                errObj[props + 'Err'] = 'Required Field'
            }else{
                errObj[props + 'Err'] = ''
            }       
        }
        setError(errObj)
    }
    // useEffect(()=>{
    //     console.log(form)
    // },[form])
    return (
        <>  
            <p>Username</p>
            <input type='text' name="username" onChange={changeHandler}/>
            <small>{error.usernameErr}</small>
            <p>Password</p>
            <input type='password' name="password" onChange={changeHandler}/>
            <small>{error.passwordErr}</small>
            <br></br>
            <button onClick={submitHandler}>Submit</button>
        </>
    )
}
export default Form