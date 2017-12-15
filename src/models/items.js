const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
	name: { type: String; }
})