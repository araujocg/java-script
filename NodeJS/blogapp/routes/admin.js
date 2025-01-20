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

router.post('/category/new', async(req, res)=>{

    const error = [];
    if(!req.body.name || typeof req.body.name == undefined || req.body.name == null){
        error.push({text: "Name invalid"});
    }

    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
        error.push({text: "Slug invalid"});
    }

    if(req.body.name.length < 2 ){
        error.push({text: "Very small name"});
    }

    if(error.length !== 0){
        res.render("admin/addcategory", {error: error});
    } else{
        CreateNewCategory(req.body.name, req.body.slug);
    }
    // console.log(error);
});

module.exports = router;