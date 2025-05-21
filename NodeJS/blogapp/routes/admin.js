const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const { createNewCategory, editCategory } = require("../models/category");
const { createNewPost, editPost } = require("../models/post")
require("../models/post");
const { redirect } = require('react-router-dom');
const { adminAuthentication } = require("../helpers/adminAuthentication");

const Category = mongoose.model('category');
const Post = mongoose.model('post');

router.get('/', adminAuthentication, (req, res) => {
    res.render("admin/index");
});

router.get('/category', adminAuthentication, (req, res) => {
    Category.find().sort({ date: 'desc' }).then((categories) => {
        res.render("admin/category", { categories: categories });
    })
});

router.get('/post', adminAuthentication, (req, res) => {
    // Post.find().sort({date: 'desc'}).then((posts) => {
    //     res.render("admin/post", {posts: posts});
    // })
    Post.find().populate("category").sort({ date: 'desc' }).then((posts) => {
        res.render("admin/post", { posts: posts });
    })
});

router.get('/category/add', adminAuthentication, (req, res) => {
    res.render("admin/addcategory");
});

router.get("/post/add", adminAuthentication, (req, res) => {
    Category.find().sort({ date: 'desc' }).then((categories) => {
        res.render("admin/addpost", { categories: categories });
    })
});

router.post('/category/new', adminAuthentication, async (req, res) => {

    const error = [];
    if (!req.body.name || typeof req.body.name == undefined || req.body.name == null) {
        error.push({ text: "Name invalid" });
    }

    if (!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null) {
        error.push({ text: "Slug invalid" });
    }

    if (req.body.name.length < 2) {
        error.push({ text: "Very small name" });
    }

    if (error.length > 0) {
        res.render("admin/addcategory", { error: error });
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

router.post('/post/new', adminAuthentication, async (req, res) => {
    const error = [];
    if (!req.body.title || typeof req.body.title == undefined || req.body.title == null) {
        error.push({ text: "Título invalido" });
    }

    if (!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null) {
        error.push({ text: "Slug invalido" });
    }

    if (error.length > 0) {
        res.render("admin/addpost", { error: error });
    } else {
        createNewPost(req.body.title, req.body.slug, req.body.description, req.body.content, req.body.category)
            .then(() => {
                req.flash("success_msg", "Postagem criada com sucesso!");
                res.redirect("../post");
            })
            .catch((err) => {
                req.flash("error_msg", "Houve um erro ao salvar a postagem, tente novamente!");
                res.redirect("/admin");
            })
    }
})

router.get("/category/edit/:id", adminAuthentication, async (req, res) => {
    try {
        const category = await Category.findOne({ _id: req.params.id });

        res.render('admin/editcategory', {
            id: category._id,
            name: category.name,
            slug: category.slug
        });
    } catch (err) {
        console.log("ERRO" + err);
    }
});
router.post("/category/newedit", adminAuthentication, (req, res) => {
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

router.get("/post/edit/:id", adminAuthentication, async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id }).populate("category");

        Category.find().sort({ date: 'desc' }).then((categories) => {
            res.render('admin/editpost', {
                id: post._id,
                title: post.title,
                slug: post.slug,
                description: post.description,
                content: post.content,
                categorySelected: post.category,
                categories: categories
            });
        })

    } catch (err) {
        console.log("ERRO" + err);
    }
});
router.post("/post/newedit", adminAuthentication, (req, res) => {
    editPost(req.body.id, req.body.title, req.body.slug, req.body.description, req.body.content, req.body.category)
        .then(() => {
            req.flash("success_msg", "Postagem editada com sucesso!");
            res.redirect("../post");
        })
        .catch((err) => {
            req.flash("error_msg", "Houve um erro ao editar a Postagem, tente novamente!");
            res.redirect("/admin");
            console.log(`ERROR LINE 42: ${err}`);
        })
});

// router.get("category/delete/:id", async (req,res) => {
//     try{
//         await Category.deleteOne({ _id: req.params.id})
//             .then(()=> {
//                 req.flash("success_msg", "Categoria deletada com sucesso!");
//                 res.redirect("../category");
//             })
//             .catch((err) => {
//                 req.flash("error_msg", "Houve um erro ao deletar a categoria, tente novamente!");
//                 res.redirect("../category");
//             })
//     }catch(err){
//         req.flash("error_msg", "Houve um erro ao deletar a categoria, tente novamente!");
//         res.redirect("../category");
//     }
// })

router.get("/post/delete/:id", adminAuthentication, async (req, res) => {
    try {
        await Post.deleteOne({ _id: req.params.id });
        req.flash("success_msg", "Post deletado com sucesso!");
        res.redirect("/admin/post");
    } catch (err) {
        req.flash("error_msg", "Houve um erro ao deletar o post, tente novamente!");
        res.redirect("/admin");
    }
});

router.get("/category/delete/:id", adminAuthentication, async (req, res) => {
    try {
        await Category.deleteOne({ _id: req.params.id });
        req.flash("success_msg", "Categoria deletada com sucesso!");
        res.redirect("/admin/category");
    } catch (err) {
        req.flash("error_msg", "Houve um erro ao deletar a categoria, tente novamente!");
        res.redirect("/admin");
    }
});

module.exports = router;