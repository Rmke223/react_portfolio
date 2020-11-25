import React, {useState} from 'react'
import Carpet from './img/carpet.png'

function Page0({setPage}) {
    return (
        <div className="container bg-success col-xs-12 col-sm-12 col-md-8 col-lg-6 border text-center mt-4">
            <img className="img-fluid" src={Carpet} alt=""/>
            <h1 className="mt-4 mb-4 text-white">I can Read your mind!</h1>
            <button 
            className="btn btn-primary mt-4 mb-4"
            onClick={()=>setPage(prevPage => prevPage + 1)}>
            Next <i class="far fa-hand-point-right"></i></button>
        </div>
    )
}

export default Page0