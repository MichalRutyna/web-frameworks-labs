import { useState } from 'react'
// import './Formularz.css'
function Formularz({ dodajPrace }) {
    const [opis, ustawOpis] = useState('')
    const [nazwa, ustawNazwe] = useState('')
    const [data, ustawDate] = useState('')
    const [prio, ustawPrio] = useState(false)
    const handleSubmit = (e) => {
        dodajPrace([opis, nazwa, data, prio])
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit} class="col-lg-6 offset-lg-3 m-5">
            <div class="form-group mb-3">
                <label class="form-label">Nazwa</label>
                <input type="text" name="nazwa" class="form-control"
                    value={nazwa} onChange={e => ustawNazwe(e.target.value)} />
            </div>
            <div class="form-group mb-3">
                <label class="form-label">Opis pracy</label>
                <input type="text" name="opis" class="form-control"
                    value={opis} onChange={e => ustawOpis(e.target.value)} />
            </div>
            <div class="form-group mb-3">
                <label class="form-label">Data</label>
                <input type="date" name="data" class="form-control"
                    value={data} onChange={e => ustawDate(e.target.value)} />
            </div>
            <div class="form-group mb-3">
                <label class="form-label">Priorytet</label>
                <input type="checkbox" name="prio" class="m-1"
                    value={prio} onChange={e => ustawPrio(!prio)} />
            </div>
            <input type="submit" name="submit" class="btn btn-primary" value="Dodaj pracę" />
        </form>
    )
}
export default Formularz