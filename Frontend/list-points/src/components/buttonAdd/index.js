import React from "react";
import "./buttonAdd.css"

const ButtonAdd = (props) => {
    return (
        <button className='botao'>{props.children}</button>
    )
}

export default ButtonAdd