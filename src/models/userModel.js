const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: ['employee', 'admin', 'superAdmin'],
        default: 'employee'
    },
    rewards: {
        type: Number,
        default: 0
    },
    otp: {
        type: Number
    },
    active: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);