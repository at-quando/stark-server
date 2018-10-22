// Import dependencies
const express = require('express');
const router = express.Router();
const UserCtrl = require('../controller/UserController');
const validate = require('express-validation');
const Validation = require('../lib/Validation');

/* GET all users. */
router.get('/', UserCtrl.index);

/* Show a user. */
router.get('/:id', UserCtrl.show);

/* Create a user. */
router.post('/',validate(Validation.register), UserCtrl.create);

/* Update a user. */
router.put('/:id', UserCtrl.update);

/* Delete a user. */
router.delete('/:id', UserCtrl.delete);

module.exports = router;