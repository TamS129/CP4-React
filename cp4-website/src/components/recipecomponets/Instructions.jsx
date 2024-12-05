
import React from 'react';

const Instructions = ({ recName, instructions }) => {
    return (
        <div className='instruction-container'>
            <h3 className='instructions-title'>
                How to make {recName}:
            </h3>
            <p>{instructions}</p>
        </div>
    );
};

export default Instructions;
