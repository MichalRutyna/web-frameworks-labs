import express from 'express'
import bodyParser from 'body-parser'

// custom files
import {router} from './api/routes.js'
import metoda from './112middleware/metoda.js'
import {isAuthorized} from './112middleware/autoryzacja.js'

const app = express()
const port = 3000

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(express.json());

app.use(metoda)
app.use(isAuthorized)

app.use(router)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})