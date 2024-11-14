const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Main Page!");
});

router.get('/posts', (req, res) => {
    res.send("Posts Page!");
});

router.get('/category', (req, res) => {
    res.send("Category Page!");
});

module.exports = router;