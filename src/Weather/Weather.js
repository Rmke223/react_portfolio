import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const API = "d02c4a194c15c23d8256f9f384c418a3";
  const [zip, setZip] = useState('');
  const [resp, setResp] = useState();
  function getWeather() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API}`)
      .then(res => setResp(prevresp => prevresp = res.data)
      )
      .catch(err => alert('Invalid Zipcode', err)) 
  }
  function handleSubmit(event) {
    event.preventDefault();
    getWeather()
  }
  return (
    <div className="bg-info text-primary mx-0 px-0 my-0">
      <div className="container text-center mx-0 px-0">
        <form className="my-2 py-2" onSubmit={e => handleSubmit(e)}>
          <input className="text-center mb-2 bg-info text-primary" onChange={e => setZip(e.target.value)} type="text" placeholder="Enter Zip" style={{width: "100%"}} />
          <button className="btn btn-primary text-white" type="submit">Submit</button>
        </form>
      </div>
      {resp ?
        <div className="container text-center pb-4 mb-4">
          <h1 className="py-2 my-2">{resp.name}</h1>
          <div className="mx-0 px-0 bg-success">
            <img src={`http://openweathermap.org/img/wn/${resp.weather[0].icon}@2x.png`} alt="" />
            <div className="py-4 my-4 text-primary"><h3>{resp.weather[0].description}</h3></div>
          </div>
          <h2>Temperature</h2>
          <div className="py-4 my-4 bg-success"><h4>{(((resp.main.temp - 273.15) * 9 / 5) + 32).toFixed(2)}&deg;F</h4></div>
          <p>Todays Low and High Temperature</p>
          <div className="bg-success py-4">
            <span className="bg-success">{(((resp.main.temp_min - 273.15) * 9 / 5) + 32).toFixed(2)}&deg;-</span>
            <span className="bg-success">{(((resp.main.temp_max - 273.15) * 9 / 5) + 32).toFixed(2)}&deg;</span>
          </div>
        </div>
        : ''}
    </div>
  )
}
export default App