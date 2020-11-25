import React from 'react'
import './App.css'
import axios from 'axios'
import Clock from "./Clock/Clock"
import Calc from "./Calculator/Calc"
import CounterApp from './Timer/CounterApp'
import MindApp from './MindReader/MindApp'
import Slider from './Puzzle/Slider'
import TicTac from './TicTac/Game'
import Weather from './Weather/Weather'
import Todo from './Todo/Todo'

function App() {
  return (
    <div>

      <h1 className="text-center bg-primary text-white pt-4 mb-0">React Portfolio</h1>
      <div className="container-fluid bg-primary text-white text-center my-0 pt-0 pb-4">
        <h3 className="text-info pt-4">Ryan Kelly</h3>
        <a className="text-info py-2 my-2" href="mailto:ryan.kelly17@icloud.com" target="_blank"><i class="far fa-envelope"></i> Ryan.kelly17@icloud.com</a> <br />
        <a className="text-info py-2 my-2" href="tel:8592139838" target="_blank"><i class="fas fa-phone-volume"></i> (859)213-9838</a> <br />
        <a className="text-info py-2" href="https://www.linkedin.com/in/ryan-kelly-6528b11b8/" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn Profile</a>
      </div>
      <div className="container-fluid bg-primary mx-0 px-0">
        <div className="row d-flex mx-auto text-center">
          <div className="card bg-info text-primary col-lg-4 col-md-12">
            <h1 className="card-title text-center">Weather</h1>
            <div className="container" style={{margin: "auto"}}>
            <div className="card-body">
              <div className="calcapp" ><Weather /></div>
            </div>
            </div>
          </div>
          <div className="card bg-info text-primary col-lg-4 col-md-6">
            <h1 className="card-title text-center">Digital Clock</h1>
            <div className="container" style={{margin: "auto"}}>
            <div className="card-body overflowAuto mx-0 px-0">
              <div className="clockapp "><Clock /></div>
            </div>
            </div>
          </div>
          <div className="card bg-info text-primary col-lg-4 col-md-6">
            <h1 className="card-title text-center">Stop Watch</h1>
            <div className="card-body overflowAuto mx-0 px-0">
              <div className="counterapp"><CounterApp /></div>
            </div>
          </div>
          <div className="card bg-info text-primary col-lg-6 col-md-12">
            <h1 className="card-title text-center">Sliding Puzzle</h1>
            <div className="card-body">
              <div className="calcapp"><Slider /></div>
            </div>
          </div>
          <div className="card bg-info text-primary col-lg-6 mx-0 px-0">
            <h1 className="card-title text-center mx-0 px-0">Tic Tac Toe</h1>
            <div className="container mx-0 px-0" style={{margin: "auto"}}>
              <div className="card-body mx-0 px-0">
                <div className="calcapp mx-0 px-0"><TicTac /></div>
              </div>
            </div>
          </div>
          <div className="card bg-info text-primary col-lg-6">
            <h1 className="card-title text-center">Simple Calculator</h1>
            <div className="card-body">
              <div className="calcapp"><Calc /></div>
            </div>
          </div>

          <div className="card bg-info text-primary col-lg-6">
            <h1 className="card-title text-center">To-Do List</h1>
            <div className="card-body mx-0 px-0">
              <div className="calcapp"><Todo /></div>
            </div>
          </div>

          <div className="card bg-info text-primary col-12">
            <h1 className="card-title text-center">Mind Reader</h1>
            <div className="card-body">
              <div className="calcapp"><MindApp /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-primary text-white text-center my-0 pt-0 pb-4">
        <h3 className="text-info pt-4">Ryan Kelly</h3>
        <a className="text-info py-2 my-2" href="mailto:ryan.kelly17@icloud.com" target="_blank"><i class="far fa-envelope"></i> Ryan.kelly17@icloud.com</a> <br />
        <a className="text-info py-2 my-2" href="tel:8592139838" target="_blank"><i class="fas fa-phone-volume"></i> (859)213-9838</a> <br />
        <a className="text-info py-2" href="https://www.linkedin.com/in/ryan-kelly-6528b11b8/" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn Profile</a>
      </div>
    </div>

  )
}

export default App
