var express = require('express');
var router = express.Router();
const contentControllers= require('../controllers/contentControllers')
const userControllers= require('../controllers/userControllers')
const kycControllers= require('../controllers/kycControllers')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', userControllers.create);
router.post('/update-user', userControllers.update);
router.post('/delete-user', userControllers.deleteOne);
router.post('/login-user', userControllers.loginOne);
router.post('/resetpassword-user', userControllers.resetPassword);
router.post('/create-content', contentControllers.upload ,contentControllers.create);
router.post('/update-content', contentControllers.update);
router.post('/delete-content', contentControllers.deleteOne);
router.post('/submit-kyc', kycControllers.submit1);
module.exports = router;
