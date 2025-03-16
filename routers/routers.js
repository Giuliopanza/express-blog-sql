const express = require('express')

const router = express.Router();

const checkTime = require('../middlewares/checkTime');

const arrayPosts = require('../data/posts.js');

const { index, show, store, update, patch, destroy } = require('../controllers/postsController');

router.get('/', checkTime, index);

router.get('/', index);

router.get('/:id', show);

router.post('/', store);

router.put('/:id', update);

router.patch('/:id', patch);

router.delete('/:id', destroy);

module.exports = router;