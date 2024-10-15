const mongoose = require("mongoose")

const { Schema } = mongoose;



const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    firstName: String,
    lastName: String,
    password: String
})

const User = mongoose.model('User', UserSchema);

module.exports = {
    User
};