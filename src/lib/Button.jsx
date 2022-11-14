import React from 'react';
import {useState} from "react"
import Modale from "./Modale"
import "./Button.css"

function Button() {
    const [modal, setModal] = useState(false);

    return (
        <>
            <button className="openModale" onClick= {() => {
            setModal(true);
            }}>
            Click on the button to open the modal
            </button>
            {modal && <Modale closeModale={setModal} />}
        </>
    )
}

export default Button