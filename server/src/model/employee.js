const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    linkedinLink: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    skills: {
        type: String,
        required: false,
    },
    startDate: {
        type: String,
        required: false,
    },
    endDate: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
})

const Employee = mongoose.model("Employee", employeeSchema)

module.exports = Employee;