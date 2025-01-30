const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const {createNewCategory, editCategory} = require("../models/category");
const { redirect } = require('react-router-dom');

const Category = mongoose.model('category');

router.get('/', (req, res) => {
    res.render("admin/index");
});

router.get('/posts', (req, res) => {
    res.send("Posts Page!");
});

router.get('/category', (req, res) => {
    Category.find().sort({date:'desc'}).then((categories) =>{
        res.render("admin/category", {categories: categories});
    })
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

    if(error.length > 0){
        res.render("admin/addcategory", {error: error});
    } else {
        createNewCategory(req.body.name, req.body.slug)
            .then(() => {
                req.flash("success_msg", "Categoria criada com sucesso!");
                res.redirect("../category");
            })
            .catch((err) => {
                req.flash("error_msg", "Houve um erro ao salvar a categoria, tente novamente!");
                res.redirect("/admin");
                console.log(`ERROR LINE 42: ${err}`);
            })
    }
});

router.get("/category/edit/:id", (req,res) => {
    res.render('admin/editcategory', {id: req.params.id}); //
});
router.post("/category/newedit", (req,res) =>{
    editCategory(req.body.id, req.body.name, req.body.slug)
        .then(() => {
            req.flash("success_msg", "Categoria editada com sucesso!");
            res.redirect("../category");
        })
        .catch((err) => {
            req.flash("error_msg", "Houve um erro ao editar a categoria, tente novamente!");
            res.redirect("/admin");
            console.log(`ERROR LINE 42: ${err}`);
        })
});

module.exports = router;