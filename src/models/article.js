const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Article = new Schema({
	name: { type: String },
	description: { type: String },
	date: { type: Date },
	reward: { 
		type: Boolean,
		default: false
	},
	rewardCount: { type: Number },
	price: { 
		type: Number,
		requerid: [true, 'This field is requerid']
	},
	active: { type: Boolean }
},{
	collection: 'articles'
});

module.exports = mongoose.model('Article', Article);