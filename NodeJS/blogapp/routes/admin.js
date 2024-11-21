const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const CreateNewCategory = require("../models/category");

router.get('/', (req, res) => {
    res.render("admin/index");
});

router.get('/posts', (req, res) => {
    res.send("Posts Page!");
});

router.get('/category', (req, res) => {
    res.render("admin/category");
});

router.get('/category/add', (req, res) =>{
    res.render("admin/addcategory");
});

router.post('/category/new', (req, res)=>{
    CreateNewCategory(req.body.name, req.body.slug);
});

module.exports = router;