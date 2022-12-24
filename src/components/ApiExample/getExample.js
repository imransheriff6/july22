import React, { useEffect, useState } from "react";
import axios from "axios";
function APICall() {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setData(res.data)
                setLoading(false);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <>
        { loading && <h1>Loading................</h1>}
            {
                data.map((ele) => {
                    return (
                        <div key={ele.id}>
                            <h1>{ele.name}</h1>
                            <small>{ele.username}</small>
                            <p>{ele.email}</p>
                            <p>{ele.address.zipcode}</p>
                        </div>
                    )
                })
            }
        </>
    )
}
export default APICall