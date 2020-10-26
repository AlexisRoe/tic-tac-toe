import './square.css';
import React, { useState } from 'react';

export default function Square(/* { value } */) {
    const [value, setValue] = useState(Array(9).fill(null));

    return (
        <button className='square' onClick={() => {setValue("🧞‍♂️")}}>
            {value}
        </button>
    );
}
