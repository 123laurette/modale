import React from 'react';
import {useState} from "react"
import Modale from "./Modale"

function Button() {
    const [modal, setModal] = useState(false);
    let text = "Click on the button to open the modal"
    console.log(text)
    return (
        <>
            <button className="openModale" 
onClick= {() => {
            setModal(true);
            }}> {text}
            </button>
            {modal && <Modale closeModale={setModal} />}
        </>
    )
}

export default Button