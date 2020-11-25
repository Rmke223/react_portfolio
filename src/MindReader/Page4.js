import React, {useState} from 'react'

function Page4({setPage, setAnswer, answer}) {
    const chars = ["¯\_(ツ)_/¯", "( ͡~ ͜ʖ ͡°)", "(ㆆ _ ㆆ)", "ξξ(∵◕◡◕∵)ξξ", "\ヽ(゜～゜o)ノ", "˙ ͜ʟ˙", "̿̿’̿’\̵͇̿̿\=(•̪●)=/̵͇̿̿/’̿̿ ̿ ̿ ̿", "╾━╤デ╦︻(▀̿Ĺ̯▀̿ ̿)", "◔̯◔", "╰( ⁰ ਊ ⁰ )━☆ﾟ.*･｡ﾟ"]
    let ans = []
    
    setAnswer(chars[Math.floor(Math.random() * 10)]);
    let rightAnswer = answer
    
    
    for(let i=0; i<=99; i++){
            if (i%9){
                let random = chars[Math.floor(Math.random() * 10)]
                ans.push( i + " - " + random );
            }
            else{
                ans.push( i + " - " + rightAnswer)
            }
    }
    
    return (
        <div className="container pb-4 bg-success col-xs-12 col-sm-12 col-md-8 col-lg-6 border mt-4 text-center">
            <div className="container bg-white overflow-auto border rounded mt-4 text-primary" style={{height: 300}}>
            {ans.map((item, i) =>
                
                <p key={i}>{item}</p>
            )}
            </div>
            <button 
            className="btn btn-primary mt-4 mb-4"
            onClick={()=>setPage(prevPage => prevPage + 1)}>
            Next <i class="far fa-hand-point-right"></i></button>
            <p className="text-primary pt-4">Find your new number</p>
            <p className="text-primary pb-4">Note the symbol beside the number</p>
            <button onClick={()=>setPage(prevPage => prevPage = 0)} className="btn btn-danger text-white">⌫</button>
        </div>
    )
}

export default Page4
