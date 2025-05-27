let metoda = (req, res, next) => {
    console.log("Metoda: ", req.method)
    let sciezka = "Ścieżka: " + req.protocol + "://" + req.get('host') + req.originalUrl
    console.log(sciezka)
    //res.send({"Metoda": req.method, "Sciezka": sciezka})

    next()
}

export default metoda