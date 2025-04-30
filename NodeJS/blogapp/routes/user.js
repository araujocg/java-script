const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const { createNewUser } = require("../models/user")
require("../models/user");

const User = mongoose.model('user');

router.get("/register", (req, res) => {
    res.render("users/register");
});

router.post("/register", (req, res) => {
    var error = []

    if (!req.body.name || typeof req.body.name == undefined || req.body.name == null) {
        error.push({ text: "Nome inválido" })
    }

    if (!req.body.email || typeof req.body.email == undefined || req.body.email == null) {
        error.push({ text: "Email inválido" })
    }

    if (!req.body.password || typeof req.body.password == undefined || req.body.password == null) {
        error.push({ text: "Senha inválida" })
    }

    if (req.body.password.length <= 4) {
        ErrorMessage.push({ text: "Senha muito curta!"})
    }

    if (req.body.password != req.body.repeatedPassword) {
        error.push({ text: "As senhas são diferentes, tente novamente!" })
    }

    if(error.length > 0){
        res.render("users/register", {error: error})
    } else{
        User.findOne({email: req.body.email}).then((user) => {
            if(user){
                req.flash("error_msg", "Já existe uma conta com este e-mail no nosso sistema, tente novamente!");
                res.redirect("/register")
            } else {

            }
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro interno");
            res.redirect("/")
        })
    }

})


module.exports = router;