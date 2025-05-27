const calc = (a, b, p) => {
    if (!(a || b || p)) {
        return "Podaj wszystkie argumenty!"
    }
    switch (p) {
        case '+': {
            return a + b
        }
        case '-': {
            return a - b
        }
        case '*': {
            return a * b
        }
        case '/': {
            return a / b
        }
        default: { return }
    }
}
const _calc = calc
export { _calc as calc }
export { _calc as default }