import React from 'react';
import './Preview.css';

const Preview = ({text, userInput}) => {
    const preview = text.split('');
    const input = userInput.split('');

    return (
        <>
            {
                preview.map((letter, i) => {
                    let letterColor;
                    if( i < userInput.length){
                        letterColor = letter === input[i] ? '#66FCF1' : '#EE4C7C'
                    }
                    return (
                        <span
                            className="texts" 
                            key={i}
                            style={{
                                color: letterColor,
                            }}
                        >
                            {letter}
                        </span>
                    )
                })
            }
        </>
    );
};

export default Preview;