const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');
let doAuth = contactsController.RequireAuth;

router.get('/', doAuth, contactsController.DisplayContactsList);

/* GET Display Add page. CREATE  */
router.get('/add', doAuth, contactsController.DisplayAddPage);

/* POST process the Add page. CREATE */
router.post('/add', doAuth, contactsController.ProcessAdd);

/* GET Display Edit page. UPDATE */
router.get('/edit/:id', doAuth, contactsController.DisplayEditPage);

/* POST process the Edit page. UPDATE */
router.post('/edit/:id', doAuth, contactsController.ProcessEdit);

/* GET process the Delete page. DELETE */
router.get('/delete/:id', doAuth, contactsController.PerformDelete);

module.exports = router;