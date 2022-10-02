// Name: Zhihao Yu
// ID: 301305633
const express = require("express")
const router = express.Router()
const Post = require('../models/Post')
const app = express()
app.set('view engine', 'ejs');

// get data 
router.post('/', async (req, res) => {
    const post = new Post({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    try {
        await post.save();
        res.render('../views/pages/index');
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router