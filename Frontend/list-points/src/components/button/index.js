import React from "react";
import "./button.css"

const Button = (props) => {
    return (
        <button className='botao' onClick={props.onClick}>{props.children}</button>
    )
}

export default Button