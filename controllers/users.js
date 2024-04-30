const User = require("../models/user.js");


module.exports.renderSingupForm = (req, res) => {
    res.render("./users/singup.ejs")
};

module.exports.signup = async (req, res) => {
    try{
        let { username, email, password} = req.body;
        const newUSer = new User({email, username} );
        const registeredUser = await User.register(newUSer, password);
        req.login(registeredUser, (err) => {
            if(err){ 
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust");
            res.redirect("/listings");
        })
    } catch(e) {
        req.flash("error", e.message);
        res.redirect("/singup");
    }
};


module.exports.renderLoginForm = (req, res) => {
    res.render("./users/login.ejs")
};


module.exports.login =  async(req, res) => {
    req.flash("success", "Welcome back to Wnderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};


module.exports.logout =  (req, res, next) => {
    req.logout((err) => {
        if(err) {
          return next(err);
        }
        req.flash("success", "You are logged out now");
        res.redirect("/listings");
    });
};