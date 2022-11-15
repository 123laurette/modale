import React from 'react';
import {useState} from "react"
import Modale from "./Modale"

function Button() {
    const [modal, setModal] = useState(false);
    return (
        <>
            <button className="openModale" 
                onClick= {() => {
                    setModal(true);
                }}> 
                Save
            </button>
            {modal && <Modale closeModale={setModal} />}
        </>
    )
}

export default Button