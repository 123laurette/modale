import React from 'react';

function Modale({closeModale, message}) {

    return (
        <>
            <div className='bcgModale'>
                <button className="close" onClick={() => closeModale(false)}> X </button>

                <h5>{message}&#128079; </h5>

            </div>
            
        </>
    );
};

export default Modale;