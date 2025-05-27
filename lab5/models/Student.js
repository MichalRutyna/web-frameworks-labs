import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    mobile: Number,
    city: String,
})
const Student = mongoose.model("Student", studentSchema)

export {Student}