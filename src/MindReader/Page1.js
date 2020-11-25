import React, {useState} from 'react'
import Thinking from './img/thinking.png'

function Page1({setPage}) {
    return (
        <div className="container pb-4 bg-success col-xs-12 col-sm-12 col-md-8 col-lg-6 border mt-4 text-center">
            <img className="img-fluid" src={Thinking} alt=""/>
            <h1 className="mt-4 mb-4 text-white">Pick a number from 01-99</h1>
            <button 
            className="btn btn-primary mt-4 mb-4"
            onClick={()=>setPage(prevPage => prevPage + 1)}>
            Next <i className="far fa-hand-point-right"></i></button>
            <p className="text-primary pt-4 pb-4">When you have your number click next</p>
            <button onClick={()=>setPage(prevPage => prevPage = 0)} className="btn btn-danger text-white">⌫</button>
        </div>
    )
}

export default Page1