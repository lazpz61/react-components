import React, {useState} from 'react';

export default function resizer(){

    const [textSize, setTextSize] = useState(12)
    const [changeAmount, setChangeAmount] = useState(1)

    return (
        <div className="resizer-wrapper">
        <h2 style={{ fontSize: `${textSize}px` }}>{`${textSize}px`}</h2>
        <input type="text" 
        value={changeAmount} 
        onChange={event => setChangeAmount(parseInt(event.target.value))}
        />
        <button onClick={() => setTextSize(textSize + changeAmount)}>Increase</button>
        <button onClick={() => setTextSize(textSize - changeAmount)}>Decrease</button>
        </div>
    )
    
}
