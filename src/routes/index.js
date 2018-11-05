const express = require('express');
const appRoutes = require('./AppRoute');
const userRoutes = require('./UserRoute');
const authRoutes = require('./AuthRoute');
const videoRoutes = require('./VideoRoute');
const articleRoutes = require('./ArticleRoute');
const agencyRoutes = require('./AgencyRoute');
const albumRoutes = require('./AlbumRoute');
const publicRoutes = require('./PublicRoute');
const pictureRoutes = require('./PictureRoute');
const jwt = require('jsonwebtoken');
const expressjwt = require("express-jwt");

const router = express.Router();

const jwtCheck = expressjwt({
  secret: 'mykey'
});
// router.use(protectedRoutes);

/** GET / - Check service health */
router.get('/api', (req, res) =>
  res.send('OK man')
);
router.use('/api', publicRoutes);

// router.use('/api/facilities', facilityRoutes);
router.use('/api/app', jwtCheck, appRoutes);
router.use('/api/users', userRoutes);
router.use('/api/agencies', agencyRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/albums',jwtCheck, albumRoutes);
router.use('/api/videos',jwtCheck, videoRoutes);
router.use('/api/articles',jwtCheck, articleRoutes);
router.use('/api/pictures',jwtCheck, pictureRoutes);

module.exports = router;
