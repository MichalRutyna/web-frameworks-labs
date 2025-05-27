/**
 * @jest-environment jsdom
 */

const { render, fireEvent, cleanup } = require('@testing-library/react')
const HookUseState = require('./HookUseState.jsx')
const App = require('./App.jsx')
const React = require("react")

afterEach(cleanup)

it('po wciśnięciu przycisku zmienia sie wartość state', () => {
    const { getByText } = render(<HookUseState />)
    expect(getByText(/Wartość początkowa/i).textContent).toBe("Wartość początkowa")
    fireEvent.click(getByText("Zmień stan"))
    expect(getByText(/Inna wartość/i).textContent).toBe("Inna wartość")
})

it('po wciśnięciu przycisku zmienia sie wartość props', () => {
    const { getByText } = render(<App> <HookUseState /> </App>)
    expect(getByText(/zielony/i).textContent).toBe("zielony")

    fireEvent.click(getByText("Zmień nazwę"))
    expect(getByText(/czerwony/i).textContent).toBe("czerwony")
})