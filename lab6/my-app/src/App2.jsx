import { useState } from "react"

function App() {
    const [result, setResult] = useState(null)
    const [input1, setInput1] = useState(null)
    const [input2, setInput2] = useState(null)
    const [name, setName] = useState("Wynik")
    const calculate = (e) => {
        let res = eval(`${input1} ${e.target.innerHTML} ${input2}`).toFixed(2)
        if (!isFinite(Number(res))) {
            res = "Nie mozna dzielic przez 0"
        }
        setResult(res)
        console.log(e.target.innerHTML)
        switch (e.target.innerHTML) {
            case "-":
                setName("Roznica")
                break
            case '+':
                setName("Suma")
                break
            case '*':
                setName("Iloczyn")
                break
            case '/':
                setName("Iloraz")
                break
        }

    }
    const firstInput = (e) => {
        let value1 = e.target.value
        setInput1(value1)
    }
    const secondInput = (e) => {
        let value2 = e.target.value
        setInput2(value2)
    }
    return (
        <div className="App">
            <h1>Kalkulator czterodziałaniowy</h1>
            <div>
                <span>
                    <input
                        type="number"
                        onChange={firstInput}
                        style={{ width: "5rem", height: "2rem", margin: "0.5rem" }}
                    />
                </span>
                <span>
                    <input
                        type="number"
                        onChange={secondInput}
                        style={{ width: "5rem", height: "2rem", margin: "0.5rem" }}
                    />
                </span>
            </div>
            <div style={{ margin: "2rem" }}>
                <button onClick={calculate} style={{ margin: "0.3rem", width: "3rem", height: "2rem" }}>
                    +
                </button>
                <button onClick={calculate} style={{ margin: "0.3rem", width: "3rem", height: "2rem" }}>
                    -
                </button>
                <button onClick={calculate} style={{ margin: "0.3rem", width: "3rem", height: "2rem" }}>
                    *
                </button>
                <button onClick={calculate} style={{ margin: "0.3rem", width: "3rem", height: "2rem" }}>
                    /
                </button>
            </div>
            <h4 id="wynik">{name}: {result}</h4>
        </div>
    )
}
export default App