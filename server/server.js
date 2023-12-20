const express = require("express");
const mongoose = require("mongoose");
const router = require("./src/router/employee-controller");
const router2 = require("./src/router/field-controller")
const routerHero = require("./src/router/hero-controller")
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/employee", router);
app.use("/hiretalent", router2)
app.use("/hero", routerHero)

mongoose.connect('mongodb+srv://hassaantahir:rock1122@mongocluster.j8ojcpq.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("Database connected..")
}).catch((error) => {
    console.log(error.message)
});

app.listen(5000, () => {
    console.log("Server is running on port", 5000)
})
