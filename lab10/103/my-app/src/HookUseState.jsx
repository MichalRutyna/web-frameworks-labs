const { useState } = require( "react")

const React = require("react")
const HookUseState = (props) => {
    const [state, setState] = useState("Wartość początkowa")
    const changeState = () => {
        setState("Inna wartość")
    }
    const changeName = () => {
        props.changeName()
    }
    return (
        <div>
            <button onClick={changeState}>Zmień stan</button>
            <p>{state}</p>
            <button onClick={changeName}>Zmień nazwę</button>
            <p>{props.name}</p>
        </div>
    )
}
module.exports = HookUseState