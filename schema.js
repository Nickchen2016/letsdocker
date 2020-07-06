const mongoose = require('mongoose');

const AddNumSchema = new mongoose.Schema({
    num: {
        type: Number,
        required: true
    }
})

const AddNum = mongoose.model('AndNum', AddNumSchema);

module.exports = { AddNum };