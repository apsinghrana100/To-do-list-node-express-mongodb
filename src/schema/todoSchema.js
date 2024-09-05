const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed'],
        default: 'Pending',
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium',
    },
    dueDate: {
        type: Date,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
    updatedDate: {
        type: Date,
    },
});

TodoSchema.pre('save', function (next) {
    this.updatedDate = Date.now();
    next();
});

module.exports = mongoose.model('Todo', TodoSchema);
