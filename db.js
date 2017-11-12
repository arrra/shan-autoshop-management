const mongoose = require('mongoose');

const uri = 'mongodb://localhost/test-shan-autoshop-management';

mongoose.connect(uri, {useMongoClient: true});


module.exports = {uri};
