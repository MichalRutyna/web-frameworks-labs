

function Footer({ setStyle, likes, setLikes, textStyle}) {
    return (
        <footer className="footer">
            <p>
                Stopka <button onClick={() => setStyle({ color: textStyle.color, fontSize: 30 })}>Ustaw parametry tekstu na 30px, a kolor pozostaw bez zmian.</button>
            </p>
            <p>
                <button onClick={() => {setLikes(likes + 1)}}>Polub tę stronę!</button>
            </p>
        </footer>
    )
}

export default Footer