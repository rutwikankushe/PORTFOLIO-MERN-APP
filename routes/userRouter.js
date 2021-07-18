const app = require("express");
const router = app.Router();

const {register,login, registerValiations,loginValiations} = require("../controllers/userController")
router.post("/register",registerValiations,register);
router.post('/login', loginValiations, login);
module.exports = router;
