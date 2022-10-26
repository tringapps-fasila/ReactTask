import React from "react";
const Card=({Product,Quantity,Price,Total})=>{
    return(
        <>
        <div className="displayContainer">
            <div>
            <div><h3>NAME:{Product}</h3></div>
            <div><h3>PRICE :{Price}</h3></div>
            <div> <h3>QUANTITY:{Quantity}</h3></div>
            <div><h3>AMOUNT :{Total}</h3></div>
        </div>
        </div>
        </>
    );
}

export default Card