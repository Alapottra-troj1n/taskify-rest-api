import React from 'react';
import './Spinner.css'

const Spinner = () => {
    return (
        <div className=" flex justify-center items-center">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Spinner;