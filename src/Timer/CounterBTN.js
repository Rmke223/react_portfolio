import React from 'react'
import "./Counter.css"

function CounterBTN({ start, status, stop, reset, resume }) {
    return (
        <div>
            {(status === 0) ?
                <button onClick={start} className="button btn">Start</button>
                : ""
            }
            {(status === 1) ?
                <div>
                    <button onClick={stop} className="button btn">Stop</button>
                    <button onClick={reset} className="button btn">Reset</button>
                </div>
                : ""
            }
            {(status === 2) ?
                <div>
                    <button onClick={resume} className="button btn">Resume</button>
                    <button onClick={reset} className="button btn">Reset</button>
                </div>
                : ""
            }

        </div>
    )
}

export default CounterBTN
