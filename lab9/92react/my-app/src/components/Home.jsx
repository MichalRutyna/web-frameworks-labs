import { useNavigate } from "react-router-dom"

import FlashSuccess from "./FlashSuccess"

const Home = ({ status }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/contact");
    }

    return (
        <div className="homeContainer">
            <h2 className="sukces">{status ? <FlashSuccess/> : ''}</h2>

            <h1>Bezpieczne formularze dla całej rodziny!</h1>
            <button className="contact-button" onClick={handleClick}>Wyślij mi coś na pewno miłego!</button>
        </div>
    )
}

export default Home