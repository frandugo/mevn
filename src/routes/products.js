const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.json({
		product: 'Eso va'
	})
});

module.exports = router;