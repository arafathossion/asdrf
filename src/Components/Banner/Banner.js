import React, { useState } from 'react';
import './Banner.css'

const Banner = (props) => {
    const [count,setCount] = useState(0);

    
    return (
        <div className='aboutMe'>
            <h1>{props.country}</h1>
            <h5>My Name is {props.name}</h5>
            <p>{props.para}</p>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
};

export default Banner;