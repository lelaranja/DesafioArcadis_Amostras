import React from "react";
import "./textForm.css"

const InputText = (props) => {
    const placeholderMod = `${props.placeholder}`
    return (
        <div className="input-text">
            <label> {props.label}</label>
            <input placeholder={placeholderMod} />
        </div>
    )
}

export default InputText;