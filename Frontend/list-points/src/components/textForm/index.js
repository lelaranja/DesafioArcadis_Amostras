import React from "react";
import "./textForm.css"

const InputText = (props) => {

    const typed = (e) => {
        props.toChanged(e.target.value)
    }

    return (
        <div className="input-text">
            <label> {props.label}</label>
            <input values={props.valor} onChange={typed} required={props.need} placeholder={props.placeholder} type={props.tipo} />
        </div>
    )
}

export default InputText;