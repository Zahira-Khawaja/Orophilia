const express=require('express');
const mongoose = require('mongoose');
const Blog = require('../db/blog');
const router=express.Router();

// let blogs = [];

router.get('/',(req,res)=>{
    let posts = Blog.find({}, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            res.render('blogs',{blog:posts});
        }
    });
});

router.post("/",(req,res)=>{
    const blog = new  Blog({
        name: req.body.composer,
        content:req.body.post
    });
    blog.save();
    res.redirect("/blogs")
});

module.exports=router;
