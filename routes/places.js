const fs = require('fs');
const path = require('path')
const express = require("express");
const mongoose = require('mongoose');
const Picture = require('../db/places');
const multer  = require('multer')
const upload = multer({ dest: './public/data/uploads/' });

const router = express.Router();

router.get('/',(req,res)=>{
    Picture.find({},(err,uploads)=>{
        if(err){
            console.log(err);
        }else{
            res.render('places',{imgPost:uploads});
        }
    });
});

router.post('/',upload.single('image'),(req,res)=>{
    const imgPost = new Picture({
        name:req.body.name,
        place:req.body.place,
        image:{
            data: fs.readFileSync(path.join(__dirname ,'../public/data/uploads/' + req.file.filename)),
            contentType: req.file.mimetype
        }
    });
    res.redirect('/places');
    imgPost.save();
});

module.exports = router;