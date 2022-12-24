import React from "react";
function ChildElem({url,description}){
    return(
        <>
            <img src={url} width='200' height='200'/>
            <p>{description}</p>
        </>
    )
}
export default ChildElem