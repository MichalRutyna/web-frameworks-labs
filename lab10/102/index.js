import createServer from "./server.js";
import mongoose from "mongoose";

mongoose.connect(
    "mongodb://localhost/postsdb",
    {}
).then(
    () => {console.log("Connected")},
    () => console.log('Error')
)


const app = createServer();

app.listen(3000)