const express = require('express');
const router = express.Router();
const controller = require('../controllers/personController')
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
router.post('/', jsonParser, controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
module.exports = router;