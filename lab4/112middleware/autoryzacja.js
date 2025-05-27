
let isAuthorized = (req, res, next) => {
    console.log(req.body.pass)
    if (req.body.pass !== "secretpaswd") {
        return res.status(401).json({ msg: 'Dostep zabroniony!' })
    }
    else{
        next()
    }
}

export {isAuthorized}