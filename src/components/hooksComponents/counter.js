import React, {useState} from 'react';

export default function counter() {
    const [count, setCount] = useState(0);
    
   return (
        <div className='counter-wrapper'>
           <button onClick={() => setCount(count + 1)}>Up</button>
           <h3>{count}</h3>
           <button onClick={() => setCount(count - 1)}>Down</button>
        </div>
   )
}

