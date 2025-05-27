/**
 * @jest-environment jsdom
 */

const Snapshot = require("./Snapshot.jsx")
const React = require("react")
const { render, screen } = require('@testing-library/react')


it("renderuje się poprawnie", () => {
    const ren = render(<Snapshot />)
    expect(ren).toMatchSnapshot()
})