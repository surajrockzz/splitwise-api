import express from 'express';
var router = express.Router();
import login from '../controllers/login/loginController';

/* GET users listing. */
router.route('/').post(login);

export default router;

