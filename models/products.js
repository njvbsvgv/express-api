// const products = [
//     {
//         id: "1",
//         name: "labtap 1",
//         price: "10,000,000"
//     },
//     {
//         id: "2",
//         name: "labtap 2",
//         price: "10,000,000"
//     },
//     {
//         id: "3",
//         name: "labtap 3",
//         price: "8,000,000"
//     }
// ]

// module.exports = products

const mongoose = require("mongoose")

const Schema = mongoose.Schema

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
})

module.exports = mongoose.model("Product", productSchema)