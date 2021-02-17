//require mongoose
const MONGOOSE = require('mongoose');

//connect
MONGOOSE.connect(process.env.MONGODB_URI || 'mongodb://localhost/hunters', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//export
module.exports.Bounty = require('./bounty');