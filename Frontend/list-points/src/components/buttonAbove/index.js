import React from "react";
import "./buttonAbove.css"

const ButtonAbove = (props) => {
    return (
        <button className='botao'>{props.children}</button>
    )
}

export default ButtonAbove