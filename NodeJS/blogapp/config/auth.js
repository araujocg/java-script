const localStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("../models/user");
const User = mongoose.model("user");

module.exports = function(passport){
    passport.use(new localStrategy({usernameField: "email"}, (email, password, done) => {
        User.findOne({email: email}).then((user) =>{
            if(!user){
                return done(null, false, {message: "Está conta não existe"})
            }

            bcrypt.compare(password, user.password, (error, equal) =>{
                if(equal){
                    return done(null, user);
                } else{
                    return done(null, false, {message: "Senha incorreta"})
                }
            })
        })
    }))

    passport.serializeUser((user, done) =>{
        done(null, user.id);
    })

    passport.deserializeUser(async (id, done) =>{
        try{
            const user = await User.findById(id);
            done(null, user);
        }catch(err){
            done(err, null);
        }
    })

};