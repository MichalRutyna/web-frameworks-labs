import "./Card.css"

function Card({name, src, dates, job, country}) {
    return (<div className="Card">
        <h2>{name}</h2>
        <img src={src} alt={name} />
        <p>{dates}</p>
        <p>{job}</p>
        <p>{country}</p>
    </div>)
}

export default Card