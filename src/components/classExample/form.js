import React, { Component } from "react";
class Form extends Component {
    constructor() {
        super();
        this.state = {
            form: {
                name: '',
                email: '',
                password: '',
            },
            error: {
                nameErr: '',
                emailErr: '',
                passwordErr: ''
            }
        }
    }
    changeHandler(e) {
        let obj = {};
        obj[e.target.name] = e.target.value
        this.setState({
            form: { ...this.state.form, ...obj }
        })
    }
    componentDidMount(){
        let arr = [12, 35, 1, 10, 34, 1];
        let first = -1,second = -1;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>first){
                second = first;
                first = arr[i]
            }
        }
        console.log(first,second)
    }
    submitHandler() {
        let values = this.state.form;
        let errObj = {};
        for (let props in values) {
            if (values[props].trim().length === 0){
                errObj[props + 'Err'] = 'Required Field'
            }else{
                errObj[props + 'Err'] = ''
            }
                
        }
        console.log(errObj)
        this.setState({
            error: errObj 
        })
    }
    render() {
        const { nameErr, emailErr, passwordErr } = this.state.error
        return (
            <>
                <p>Username</p>
                <input
                    type='text'
                    placeholder="Enter Name"
                    name='name'
                    onChange={(e) => this.changeHandler(e)}
                ></input>
                {nameErr && <small>{nameErr}</small>}
                <p>Email</p>
                <input
                    type='email'
                    placeholder="Enter Email"
                    name='email'
                    onChange={(e) => this.changeHandler(e)}
                ></input>
                {emailErr && <small>{emailErr}</small>}
                <p>Password</p>
                <input
                    type='password'
                    placeholder="Enter Password"
                    name="password"
                    onChange={(e) => this.changeHandler(e)}
                ></input>
                {passwordErr && <small>{passwordErr}</small>}<br></br>
                <button onClick={() => this.submitHandler()}>Submit</button>
            </>
        )
    }
}
export default Form