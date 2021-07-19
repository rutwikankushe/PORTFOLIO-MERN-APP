const express = require("express");
const router = express.Router();
const {createProfile,fetchProfile,fetchUserDetails} = require('../controllers/postController');
const auth = require('../utils/auth');
router.get('/user_profiles/:id',auth,fetchProfile)
router.post('/create_profile',auth,createProfile);
router.get('/User_profile/:id',auth,fetchUserDetails)
module.exports = router;