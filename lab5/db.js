import mongoose from "mongoose"

function connectDB() {

    mongoose.connect("mongodb+srv://rutynam:KJrChtzdDde8wxrk@cluster0.gqlys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then((result) => {
            console.log("Połączono z bazą")
        }).catch((err) => {
            console.log("Nie można połączyć się z MongoDB. Błąd: " + err)
        })
}
export { connectDB }