const express = require("express");
const router = express.Router();
const {createProfile,fetchProfile} = require('../controllers/postController');
const auth = require('../utils/auth');
router.get('/user_profiles/:id',auth,fetchProfile)
router.post('/create_profile',auth,createProfile);
module.exports = router;