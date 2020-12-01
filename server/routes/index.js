const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.DisplayHomePage);

/* GET Home page. */
router.get('/home', indexController.DisplayHomePage);

/* GET About page. */
router.get('/about', indexController.DisplayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.DisplayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.DisplayServicesPage);

/* GET Contact page. */
router.get('/contact', indexController.DisplayContactMePage);

/* GET Login page. */
router.get('/login', indexController.DisplayLoginPage);

/* POST Login page (Process Login) */
router.post('/login', indexController.ProcessLogin);

/* GET Logout (Perform Logout) */
router.get('/logout', indexController.PerformLogout);

module.exports = router;