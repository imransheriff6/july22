import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function AllUser(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return(
        <>
            {
                data.map((ele)=>{
                    return <>
                    <h1><Link to={`user?id=${ele.id}`}>{ele.name}</Link></h1>
                    <p>{ele.email}</p>
                    </>
                })
            }
        </>
    )
}
export default AllUser