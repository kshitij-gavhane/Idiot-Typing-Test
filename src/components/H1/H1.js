import React from 'react';
import './H1.css';

const H1 = ({children}) => {
    return (
        <h1 className='text'>
            {children}
        </h1>
    );
};

export default H1;