//it is middleware used to handle file uploads.
//expres can handle json (app.use(express.json())), but pdf img or file sent as multiple/form-data 

//steps:
//1. npm install multer
//2. basic setup:
const express=require("express");
const multer=require('multer');

const app=express();

//config storage
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'_'+file.originalname);
    }
});


const upload=multer({storage});

//single file upload
app.post('/upload', upload.single('file'),(req,res)=>{
    res.json({
        message:"file uploaded successfully",
        file:req.file
    });
});


app.listen(3000);


//common multer mtehod:
//single file:
upload.single('avatar')
//multiple file(same field)
upload.array('poster',5);
//multiple field:
upload.fields([
    {name:'avatar',maxcount:1},
    {name:'gallary',maxcount:5}
])

//any file:
upload.any()


//file validation:
const upload=multer({
    storage,
    fileFilter:(req,file,cb)=>{
        if(file.mimetype==='image/jpeg' ||
            file.mimetype==='image/png'
        ){
            cb(null,true);
        }else{
            cb(new Error("only jpg and png files allowed"));
        }
    }
})

//free size limit:
const upload=multer({
    storage,
    limits:{
        fileSize:5*1024*1024//5mb
    }
});


//memory storage:
//stores file in ram instead of disk:
const upload = multer({
    storage:multer.memoryStorage()
});


//access the file buffer:
