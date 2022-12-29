require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./db/blog');
const ejs = require('ejs');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

const blogs = require("./routes/blogs");
app.use('/blogs',blogs);



const places= require("./routes/places");
app.use('/places',places);

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render('home');
});


app.get("/blogs/:postId", function(req, res){

    const requestedPostId = req.params.postId;
      Blog.findOne({name: requestedPostId}, function(err, post){
        res.render("post", {
          title: post.name,
          content: post.content
        });
      });
    
    });

app.listen(process.env.PORT,()=>{
    console.log(`server started on port ${process.env.PORT}`);
});

