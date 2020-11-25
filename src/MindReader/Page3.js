import React, {useState} from 'react'
import Robot from './img/robot.png'
function Page3({setPage}) {
    return (
        <div className="container pb-4 bg-success col-xs-12 col-sm-12 col-md-8 col-lg-6 border mt-4 text-center">
            <img className="img-fluid" src={Robot} alt=""/>
            <h1 className="mt-4 mb-4 text-white">Subtract your new number from the original number</h1>
            <button 
            className="btn btn-primary mt-4 mb-4"
            onClick={()=>setPage(prevPage => prevPage + 1)}>
            Next <i class="far fa-hand-point-right"></i></button>
            <p className="text-primary pt-4">Ex: 14 - 5 = 9</p>
            <p className="text-primary pb-4">click next to proceed</p>
            <button onClick={()=>setPage(prevPage => prevPage = 0)} className="btn btn-danger text-white">⌫</button>
        </div>
    )
}

export default Page3