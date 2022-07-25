const express = require('express');
const {
    cratePost,
    updatePost,
    deletePost,
    getAllPost
}  = require('../handler/post')
// const auth = require('./middlewares/auth');


const postRouter = express.Router();

postRouter.get('/posts',getAllPost)
postRouter.post('/posts',cratePost)
postRouter.patch('/posts/:id',updatePost)
postRouter.delete('/posts/:id',deletePost)

module.exports = postRouter