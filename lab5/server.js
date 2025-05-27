const express = require("express")
const path = require("path")
const handleBars = require("handlebars")
const exphbs = require("express-handlebars")
const { allowInsecurePrototypeAccess } = require("@handlebars/allow-prototype-access")

const app = express()

const router = require("./controllers/StudentController.js")
const db = require("./db.js")

db.connectDB()


app.use(express.urlencoded({
    extended: true
}))

app.use(router.router)



app.set("views", path.join(__dirname, "/views/"))

app.engine(
    "hbs",
    exphbs.engine({
        handlebars: allowInsecurePrototypeAccess(handleBars),
        extname: "hbs",
        defaultLayout: "layouts/layout",
        layoutsDir: __dirname + "/views",
    })
)

app.set("view engine", "hbs")


app.listen(3000, () => {
    console.log("Serwer nasłuchuje na porcie 3000")
})
//sudo systemctl start mongod


//https://cloud.mongodb.com/v2/67cf2615990f640f693c529c#/metrics/replicaSet/67cf26da3f6eab0c62f0177f/explorer/test/students/find