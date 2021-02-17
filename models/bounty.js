//require mongoose
const MONGOOSE = require('mongoose');

// the bounty schema
const bountySchema = new MONGOOSE.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    wantedFor: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    reward: {
        type: Number,
        default: 10000
    },
    ship: String,
    hunters: [String],
    captured: {
        type: Boolean,
        default: false
    },
    lastSeen: String
})

module.exports = MONGOOSE.model('Bounty', bountySchema);