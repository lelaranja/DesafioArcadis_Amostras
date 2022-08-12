import React from "react";
import "./buttonForm.css"

const ButtonForm = (props) => {
    return (
        <button className='botao' onClick={props.onClick}>Adicionar ponto</button>
    )
}

export default ButtonForm