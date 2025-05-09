const express = require('express');
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    admin: { type: Number, default: 0 },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model('user', userSchema);

const createNewUser = async (name, email, password, admin) => {

    try {
        const newUser = new User({
            name: name,
            email: email,
            password: password,
            admin: admin
        });

        bcrypt.genSalt(10, (error, salt) => {
            if (error) {
                console.error("Erro ao gerar o salt:", error);
                return;
            }

            bcrypt.hash(newUser.password, salt, async (error, hash) => {
                if (error) {
                    req.flash("error_msg", "Erro ao hashear a senha:");
                    res.redirect("/");
                    return;
                }

                newUser.password = hash;

                try {
                    const result = await newUser.save();
                } catch (err) {
                    req.flash("error.msg", "Houve um erro durante o salvamento do usuário");
                    res.redirect("/");
                }
            });
        });
    } catch (err) {
        throw err;
    }

    // try {
    //     const newUser = new User({
    //         name: name,
    //         email: email,
    //         password: password
    //     });

    //     bcrypt.genSalt(10, (error, salt) => {
    //         bcrypt.hash(newUser.password, salt, (error, hash) => {
    //             if (error) {
    //                 req.flash("error.msg", "Houve um erro durante o salvamento do usuário");
    //                 res.redirect("/");
    //             } else {
    //                 newUser.password = hash
    //             }
    //         })
    //     })

    //     const result = await newUser.save()
        
    // } catch (err) {
    //     throw err; // /Lança o erro para ser tratado na chamada
    // }
}

module.exports = { createNewUser };

