//require mongoose
const MONGOOSE = require('mongoose');

//connect
MONGOOSE.connect(process.env.MONGODB_URI || 'monodb://localhost/hunters', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//export
modeule.exports.Bounty = require('./bounty');