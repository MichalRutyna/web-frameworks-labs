
const { useState } = require("react")

const React = require("react")

const Snapshot = require('./Snapshot.jsx')
const HookUseState = require('./HookUseState.jsx')

function App() {

  const [name, setName] = useState("zielony")
  const changeName = () => {
    setName("czerwony")
  }
  return (
    <div clasname="App">
      <h1>Migawka</h1>
      <Snapshot />
      <h1>Hook useState</h1>
      <HookUseState name={name} changeName={changeName} />
    </div>
  )
}

module.exports = App