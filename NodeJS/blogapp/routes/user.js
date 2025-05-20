const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const { createNewUser } = require("../models/user")
require("../models/user");
const { redirect } = require('react-router-dom');

const User = mongoose.model('user');

router.get("/register", (req, res) => {
    res.render("users/register");
});

router.post("/register", (req, res) => {
    let error = []

    if (!req.body.name || typeof req.body.name == undefined || req.body.name == null) {
        error.push({ text: "Nome inválido" })
    }

    if (!req.body.email || typeof req.body.email == undefined || req.body.email == null) {
        error.push({ text: "Email inválido" })
    }

    if (!req.body.password || typeof req.body.password == undefined || req.body.password == null) {
        error.push({ text: "Senha inválida" })
    }

    if (req.body.password.length < 4) {
        error.push({ text: "Senha muito curta!" })
    }

    if (req.body.password != req.body.repeatedPassword) {
        error.push({ text: "As senhas são diferentes, tente novamente!" })
    }

    if (error.length > 0) {
        res.render("users/register", { error: error })
    } else {
        User.findOne({ email: req.body.email }).then((user) => {
            if (user) {
                req.flash("error_msg", "Já existe uma conta com este e-mail no nosso sistema, tente novamente!");
                res.redirect("/users/register");
            } else {
                createNewUser(req.body.name, req.body.email, req.body.password).then(() => {
                    req.flash("success_msg", "Usuário criado com sucesso!");
                    res.redirect("/");
                }).catch((err) => {
                    req.flash("error_msg", "Falha ao criar o usuário!");
                    res.redirect("/users/register");
                })
            }
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro interno");
            res.redirect("/")
        })
    }

})

router.get("/login", (req, res) => {
    res.render("users/login");
})

router.post("/login", (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/users/login",
        failureFlash: true
    })(req, res, next)
})


module.exports = router;