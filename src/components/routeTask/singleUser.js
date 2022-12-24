import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
function User(){
    const {search} = useLocation();
    const [user,setUser] = useState({});
    useEffect(()=>{
        let params = new URLSearchParams(search);
        axios.get(`https://jsonplaceholder.typicode.com/users?id=${params.get('id')}`)
            .then((res)=>{
                setUser(res.data[0])
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])
    return <>
        <p>ID : {user.id}</p>
        <p>Name : {user.name}</p>
        <p>website : {user.website} </p>
        <p>phone : {user.phone}</p>
    </>
}
export default User