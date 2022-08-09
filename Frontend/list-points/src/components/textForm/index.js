import React from "react";
import "./textForm.css"

const InputText = (props) => {
    const placeholderMod = `${props.placeholder}`


    const typed = (e) => {
        props.toChanged(e.target.value)
    }

    return (
        <div className="input-text">
            <label> {props.label}</label>
            <input values={props.valor} onChange={typed} required={props.need} placeholder={placeholderMod} />
        </div>
    )
}

export default InputText;