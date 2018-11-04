// Import dependencies
const express = require('express');
const router = express.Router();
const VideoCtrl = require('../controller/VideosController');
const ArticleCtrl = require('../controller/ArticlesController');
const AlbumCtrl = require('../controller/AlbumsController');
const validate = require('express-validation');
const Validation = require('../lib/Validation');

router.get('/videos', VideoCtrl.index);

router.get('/articles', ArticleCtrl.index);

router.get('/albums', AlbumCtrl.index);

router.get('/videos/:id', VideoCtrl.show);

router.get('/articles/:id', ArticleCtrl.show);

router.get('/albums/:id', AlbumCtrl.show);

module.exports = router;