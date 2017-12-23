const express = require('express');
const router = express.Router();

const Item =  require('../models/items');

// Get data /Item
router.get('/', (req, res) => {
	Item.find(function (err, items){
		if(err){
			throw err;	
		}else{
			res.json(items);
		}
	})
});

// Add data /Item
router.post('/', (req, res) => {
	const item = new Item(req.body);
	item.save()
		.then(item => {
			res.status(200).json({item: 'Item saved!'});
		})
		.catch(err => {
			res.status(400).send({ item: 'Error al agregar el item' });
		});
});

// Update data /Item/1
router.post('/:id', (req, res, next) => {
	Item.findById(req.params.id, function(err, item){
		if(!item){
			return next(new Error('no se pudo cargar documento'));
		}else{
			item.name = req.body.name;
			item.price = req.body.price;
			item.save()
				.then(item => {
					res.json('Update done')
				})
				.catch(err => {
					res.status(400).send('No updated!')
				});
		}
	})
});


// Delete data /Item/1
router.post('/:id', (req, res, next) => {
	Item.findByIdAndRemove(req.params.id, function(err, item){
		if(err){
			res.json(err);
		}else{
			res.json('Item was remove successfully!');
		}
	})
});

module.exports = router;