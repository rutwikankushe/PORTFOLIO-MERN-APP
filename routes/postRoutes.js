const express = require("express");
const router = express.Router();
const {createProfile,fetchProfile,fetchUserDetails,updateProfile,updateValidations} = require('../controllers/postController');
const auth = require('../utils/auth');
router.get('/user_profiles/:id',auth,fetchProfile)
router.post('/create_profile',auth,createProfile);
router.get('/User_profile/:id',auth,fetchUserDetails);
router.post('/update_profile',[auth,updateValidations],updateProfile)
module.exports = router;