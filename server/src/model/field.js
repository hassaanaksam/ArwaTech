const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    heroTittle: {
        type: String,
        required: true,
    },
    heroDescription: {
        type: String,
        required: true,
    },
    customerIcons: {
        type: String,
        required: true,
    },
    allProcessTittle: {
        type: String,
        required: true,
    },
    allProcessDescription: {
        type: String,
        required: true,
    },
    processStep1: {
        type: String,
        required: true,
    },
    processStep2: {
        type: String,
        required: true,
    },
    processStep3: {
        type: String,
        required: true,
    },
    allEmployeesTittle: {
        type: String,
        required: true,
    },
    allEmployeesDescription: {
        type: String,
        required: true,
    },
    hireSkillTittle: {
        type: String,
        required: true,
    },
    hireSkillDescription: {
        type: String,
        required: true,
    },
    hireSkillImage: {
        type: String,
        required: true,
    },
    allExpertiseTittle: {
        type: String,
        required: true,
    },
    allExpertiseDescription: {
        type: String,
        required: true,
    },
    firstExpertiseTittle: {
        type: String,
        require: true
    },
    secondExpertiseTittle: {
        type: String,
        require: true
    },
    thirdExpertiseTittle: {
        type: String,
        require: true
    },
    fourthExpertiseTittle: {
        type: String,
        require: true
    },
    fifthExpertiseTittle: {
        type: String,
        require: true
    },
    sixthExpertiseTittle: {
        type: String,
        require: true
    },
    reasonTittle: {
        type: String,
        required: true
    },
    reasonDescription: {
        type: String,
        required: true,
    },
    reasonImage: {
        type: String,
        required: true,
    }

})

const Field = mongoose.model("Field", fieldSchema)

module.exports = Field;