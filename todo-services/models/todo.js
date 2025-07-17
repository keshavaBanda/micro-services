const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: false
    },
    userId:{type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'}
}, {timestamps: true})


module.exports = mongoose.model('Todo', TodoSchema)