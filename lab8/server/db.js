const mongoose = require("mongoose")
module.exports = () => {
    const connectionParams = {
    }
    console.log(process.env.DB)
    try {
        mongoose.connect(process.env.DB, connectionParams)
        console.log("Connected to database successfully")
    } catch (error) {
        console.log(error);
        console.log("Could not connect database!")
    }
}