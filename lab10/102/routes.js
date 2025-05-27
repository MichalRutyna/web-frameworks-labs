const express = require('express')

const Post = require('./models/Post.js')

const router = express.Router()

// routes
router.get('/posts', (req, res) => {
    Post.find({}).then((docs) => {
        res.status(200).json(docs)
    }).catch((err) => {
        console.log("Błąd pobierania danych" + err)
    })
})

router.post('/posts', async (req, res) => {
    let post = new Post()
    post.title = req.body.title
    post.content = req.body.content
    await post.save()
    res.status(200).json(post)
})

router.delete('/posts/:id', (req, res) => {
    Post.findByIdAndDelete(req.params.id).then((doc) => {
        res.status(200).json(doc)
    }).catch((err) => {
        console.log("Błąd podczas usuwania: " + err)
    })
})

module.exports = router