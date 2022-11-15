import React from 'react';
import {useState} from "react"
import Modale from "./Modale"

function Button(textButton) {
    const [modal, setModal] = useState(false);
    return (
        <>
            <button className="openModale" 
                onClick= {() => {
                    setModal(true);
                }}> 
                {textButton}
            </button>
            {modal && <Modale closeModale={setModal} />}
        </>
    )
}

export default Button