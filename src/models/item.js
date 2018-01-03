const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
	name: { type: String },
	date: { type: Date },
	price: { type: Number }
},{
	collection: 'items'
});

module.exports = mongoose.model('Item',Item);