const express = require("express");
const router = express.Router();
const {
  RegisterUser,
  LoginUser,
  CurrentUser,
} = require("../Controllers/UserContriller");
const validateToken = require("../Middlewares/ValidateTokenVerification");

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/current", validateToken, CurrentUser);

module.exports = router;
