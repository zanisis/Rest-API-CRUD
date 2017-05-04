var express = require('express');
var router = express.Router();
const controller = require('../controllers/restaurant');

/* GET users listing. */
router.get('/', controller.findall);
router.post('/', controller.create);
router.delete('/:id', controller.delete);
router.get('/:id', controller.findone);
router.put('/:id', controller.update);

module.exports = router;