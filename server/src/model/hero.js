const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
})

const Hero = mongoose.model("Hero", heroSchema)

module.exports = Hero;