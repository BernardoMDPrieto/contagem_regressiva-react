import React, { useEffect, useState } from "react";

function App() {
  const[totalTimeInSeconds, setTotalTimeInSeconds] = useState( (15 * 60))
  const minutes = Math.floor(totalTimeInSeconds / 60)
  const seconds = (totalTimeInSeconds%60)
  
  useEffect(() => {
    if(totalTimeInSeconds===0){
      alert("O tempo acabou")
      return
    } else{
      setTimeout(() => {
        setTotalTimeInSeconds(totalTimeInSeconds - 1)
      },1000)
    }
  },[totalTimeInSeconds])
  return (
    <div>
    <span>{minutes.toString().padStart(2, "0")}</span>
    <span>:</span>
    <span>{seconds.toString().padStart(2  , "0")}</span>
   </div>
  
  )
}

export default App;
