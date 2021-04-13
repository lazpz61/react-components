import React, {useState} from 'react'

export default function color(props) {
    const [color, setColor] = useState("black")
    const [text, setText] = useState("Color Me!")
    const [colorInput, setColorInput] = useState("black")
    const [textInput, setTextInput] = useState("Color Me!")

    const handleSubmit = () => {
        setColor(colorInput)
        setText(textInput)
    }

   return (
        <div className='color-wrapper'>
           <h3 style={{ color: color }}>{text}</h3>
           <input 
                type="text"
                value={colorInput}
                onChange={event => setColorInput(event.target.value)}
           />
            <input 
                type="text"
                value={textInput}
                onChange={event => setTextInput(event.target.value)}
           />
           <button onClick={handleSubmit}>Submit</button>
        </div>
   )
}