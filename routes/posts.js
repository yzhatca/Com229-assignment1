const express = require("express")
const router = express.Router()
const Post = require('../models/Post')
const path = require('path');
const app = express()
app.set('view engine', 'ejs');
//添加数据
//添加数据
router.post('/', async (req, res) => {
    const post = new Post({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    try {
        const savePost = await post.save();
            res.render('../views/pages/index');
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router