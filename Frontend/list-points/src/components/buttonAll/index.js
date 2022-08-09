import React from "react";
import "./buttonAll.css"

const MainButton = (props) => {
    return (
        <button className='botao'>{props.children}</button>
    )
}

export default MainButton