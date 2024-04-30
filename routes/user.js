const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectURl } = require("../middleware.js");


const userController = require("../controllers/users.js");
const { route } = require("./user.js");

// const user = require("../models/user.js");


router 
  .route("/singup")
  .get(userController.renderSingupForm)
  .post(wrapAsync (userController.signup));

router  
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectURl,
    passport.authenticate("local",
      { failureRedirect: "login",
       failureFlash: true,
     }), userController.login);

router.get("/logout", userController.logout)


module.exports = router;