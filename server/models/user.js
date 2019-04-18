const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    gender: {
        type: String,
        enum: ['Male', 'Female']
      }
})

module.exports = mongoose.model('User', userSchema);