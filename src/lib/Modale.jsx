import React from 'react';
import "./Modale.css"

function Modale({closeModale}) {

    return (
        <>
            <div className='bcgModale'>
                <button className="close"onClick={() => closeModale(false)}> X </button>

                <h5>The new employee has been successfully registered &#128079; </h5>

            </div>
            
        </>
    );
};

export default Modale;