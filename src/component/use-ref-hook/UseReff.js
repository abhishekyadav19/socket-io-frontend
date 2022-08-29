import React, { useRef } from 'react'

const UseReff = () => {
    const href = useRef()
    console.log(href.current);
    const changecolor = () => {
        href.current.classList.add("abisjj")
    }
    return (
        <div>
            <h1 ref={href}>my name is yadav abhishek</h1>
            <button onClick={() => { changecolor() }}>Submit</button>
        </div>
    )
}

export default UseReff