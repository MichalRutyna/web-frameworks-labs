const React = require('react')
const HelloMessage = (props) => {
    return <div>Nazwisko: {props.nazwisko}<br></br>Email: {props.email}<br></br>Wiek: {props.wiek}</div>
}

module.exports = HelloMessage