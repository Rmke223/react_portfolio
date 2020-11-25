import React, {useState} from 'react'
import "./Clock.css"

function Clock() {

  const time = new Date().toLocaleTimeString();
  const [Ctime, setCTime] = useState(time);
  const updateTime = () =>{
    let time = new Date().toLocaleTimeString();
    setCTime(time);
  }
  setInterval(updateTime, 1000);
  
  return (
    <div className="wrapper">
      <div className="display">
        <div id="time">{time}</div>
      </div>
      <span></span>
      <span></span>
    </div>
  )
}

export default Clock