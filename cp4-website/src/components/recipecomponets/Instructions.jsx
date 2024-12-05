/**
Name: Tamara Slone
Date: 11/24/24
Description:This is a subcomponent that organizes the instructions for the recipe page. 
*/
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
