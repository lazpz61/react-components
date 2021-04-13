import React, { useState, useEffect} from 'react'

export default function clock() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
       const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    

    const renderTime = () => {
        const hour = date.getHours()
        const minutes = date.getMinutes()
        const seconds =date.getSeconds()

        const formattedHour = hour > 12 ? hour - 12 : hour
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds


        return `${formattedHour}:${formattedMinutes}:${formattedSeconds}`
    }

   return (
        <div className='clock-wrapper'>
           <h3>{renderTime()}</h3>
        </div>
   )
}