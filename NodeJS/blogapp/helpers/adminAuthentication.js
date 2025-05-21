module.exports = {
    adminAuthentication: function (req, res, next) {
        if (req.isAuthenticated() && req.user.admin == 1){
            return next();
        } else {
            req.flash("error_msg", "Você precisa ser um administrador!");
            res.redirect("/");
        }
    }
}