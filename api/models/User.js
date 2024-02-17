const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    username: { type: String, required: true, min: 4, unique: true },
    password: { type: String, required: true },
});

// Create a mongoose model named 'UserModel' using the 'UserSchema' defined above.
const UserModel = model('User', UserSchema);

// Export the 'UserModel' so that it can be used in other files.
module.exports = UserModel;