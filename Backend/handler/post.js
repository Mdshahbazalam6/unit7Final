const Post = require('../database/post')

let ObjectId = require('mongodb').ObjectId; 

async function cratePost ( req,res ) {
    const { postbody } = req.body
  console.log(postbody)
    let a = await Post.create(postbody)
    console.log(a)

    return res.send({
        data:a
    })
}

async function updatePost ( req,res ) {
    const{ id } = req.params;
    const{ postbody:postData } = req.body;
    console.log(id)
     console.log(postData)
   let post = await Post.find({_id:id})
 console.log(post)
post=postData
console.log(post)
 
   await post.save(post);
 
   return res.send({
     data:post
   })
 }

 async function deletePost ( req,res ){
    const { id }=req.params;

    await Post.remove({_id:id})

    return res.send({
        message:"Post has been deleted Successfully"
    })
}

async function getAllPost ( req,res ){
    // const{ skip,limit }=req.query;
    // .skip(skip).limit(limit)
    const posts = await Post.find().populate('user');

    return res.send({
        data : posts
    })
}
module.exports = {
    cratePost,
    updatePost,
    deletePost,
    getAllPost
}