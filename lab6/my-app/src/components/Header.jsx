

function Header({ textStyle, likes }) {
    return (<div className="header">
        <h1>Nagłówek</h1>
        <p>Aktualny rozmiar czcionki: <strong>{textStyle.fontSize}</strong></p>
        <p>Aktualny kolor czcionki: <strong>{textStyle.color}</strong></p>
        <p>
            Liczba lajków: <strong>{likes}</strong>
        </p>
    </div>)
}

export default Header