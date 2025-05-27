import './Card.css'

import Card from "./Card.jsx"

function App() {
  return (
    <div>
      <h1>Słynni informatycy</h1>
      <Card
        name="Alan Turing"
        src="https://mdz.cs.pollub.pl/ai/alan_turing.jpg"
        dates="1912 - 1954"
        job="Matematyk"
        country="Anglia"
      />

      <Card
        name="Niklaus Wirth"
        src="https://mdz.cs.pollub.pl/ai/nicolas_wirth.jpg"
        dates="1934 - ?"
        job="Elektronik i informatyk"
        country="Szwajcaria"
      />

      <Card
        name="Dennis Ritchie"
        src="https://mdz.cs.pollub.pl/ai/dennis_ritchie.jpg"
        dates="1941 - 2011"
        job="Matematyk, fizyk, informatyk"
        country="USA"
      />

      <Card
        name="Bjarne Stroustrup"
        src="https://mdz.cs.pollub.pl/ai/bjarne_stroustrup.jpg"
        dates="1950 - ?"
        job="Informatyk"
        country="Dania"
      />
    </div>
  )
}
export default App