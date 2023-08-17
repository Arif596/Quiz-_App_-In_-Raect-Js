import React, { useEffect, useState } from 'react'

export default function Timer({setStop, questionNumber}) {
    const [timer, setTimer] = useState(30);
    useEffect(() => {
        setTimer(30)
        const interval = setInterval(() => {
            setTimer(prev=>prev>0? prev - 1:0);
        }, 1000)
        return(()=>{
            clearInterval(interval)
        })
    },[questionNumber]);
    return timer
    
}
