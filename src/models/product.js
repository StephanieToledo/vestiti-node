const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    actual_price: {
        required: true,
        type: String
    },
    old_price: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('Product', productSchema)