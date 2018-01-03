const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Location = new Schema({
	long: { type: Number },
	lat: { type: Number },
	article: { type: Schema.Types.ObjectId, ref: 'Article' }
},{
	collection: 'locations'
});

module.exports = mongoose.model('Location', Location);