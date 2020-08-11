const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: { type: String, required: true, unique: true },
  age: { type: Number, required: true, unique: false },
});

module.exports = model('Users', UserSchema);
