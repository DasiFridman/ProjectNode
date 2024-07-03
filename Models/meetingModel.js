const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    participants: { type: Number, required: true },
    orderNumber: { type: Number, required: true, unique: true },
    room: { type: String, required: true },
    time: { type: Date, required: true }
});

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
