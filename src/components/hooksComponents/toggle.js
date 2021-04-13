import React, {useState} from 'react';

export default function toggle(){
    const [textVisible, setTextVisible] = useState(true)

    return(
        <div className="toggle-wrapper">
          
            <h3 style={{ visibility: textVisible ? "visible" : "hidden"}}>Hide Me!</h3>
          
            <button onClick={() => setTextVisible(!textVisible)}>{textVisible ? "Hide" : "Show"}</button>


        </div>
    )
}