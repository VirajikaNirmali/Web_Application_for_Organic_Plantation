const express = require('express');

const Posts1 = require('../models/posts1');
const uploads= require('../middlewares/multer');
const fs = require("fs");
const path = require('path');

const router4 = express.Router();

//save posts

router4.post('/posts4/save',(req,res)=>{
    let newPost4 = new Posts1(req.body);

    newPost1.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post Succssfully"
        });
    });
});

//get posts

router4.get('/posts4',(req,res)=>{
    Posts1.find().exec((err,posts4)=>{
        if(err){
            return res.status(400).json({
                error:err

            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts4
        });

    });
});

//get a specific post

router4.get('/posts4/:id',(req,res)=>{
    let postId = req.params.id;

    Posts1.findById(postId,(err,posts1) => {
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            posts4
        });
    

    });
});

//update

router4.put('/posts4/update/:id',(req,res)=>{
    console.log(req.params.id);
    Posts1.findByIdAndUpdate(

        req.params.id,
        {
            $set:req.body
        },
        (err,posts4)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Update Successfully"
            });
        }
    );
});

//delete
router1.delete('/posts1/delete/:id',(req,res)=>{
    Posts1.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{
        if(err) return res.status(400).json({
            message:"Delete  Not Succesfully",err
        });

        return res.json({
            message:"Delete Succesfully",deletedPost
        });
    });
});
//upload images.....

router4.post('/uploads',(req,res)=>{
    uploads(req, res, (err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newImage = new Posts4({
                images:{data:req.file.fieldname,
                contentType:'image/png'
            },
            });
            newImage.save().then(()=>res.send("Succefully Upload")).catch(err=>console.log(err));
        }
    });
});

//update images

// router1.put('/upload/:postId', upload.array("image", 3), async (req,res)=>{
//     let postId = req.params.id;
//     const images = [];
//     const inputFiles = req.files;

//     inputFiles.map((file)=>{
//         images.push(file.filename);

//     });

//     Posts1.findOneAndUpdate(
//     {
//         _id: postId,
//     },
//     {
//         $push:{images:images},
       
            
        
//     },

//     {new : true},
//     function (err, data){
//         if(err){
//             return res.status(400).json({error:err});
//         }

//         return res.status(200).json({
//             success:"Upload image  Successfully"
//         });

//     }
//     );

    
       
        
    

//     });

    //remove images

    router4.put('/removeImage/:postId', async (req,res)=>{
        let postId = req.params.id;
        
        const filename = req.body.filename;
    
       
    
        Posts4.findOneAndUpdate(
        {
            _id: postId,
        },
        {
            $pull:{images:filename},
           
                
            
        },
    
        {new : true},
        function (err, data){
            if(err){
                return res.status(400).json({error:err});
            }
            const path = "uploads/" + filename;

            fs.unlinkSync(path);
    
            return res.status(200).json({
                success:"Remove image  Successfully"
            });
    
        }
        );
    
        
           
            
        
    
        });




module.exports = router4;