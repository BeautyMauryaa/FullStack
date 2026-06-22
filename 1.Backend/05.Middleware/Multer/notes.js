//why do we need multer:
//1.user uploaded file
<form encType="multipart/form-data" >
 <input type="file" name="profile-pic"/>
</form>
// browser send file in the form multipart/form-data but express can only understand json and url-encoded
//so multer work as a translater btw browser and express


//steps:
//1.install multer
// npm install multer

//2. import this in file:
const express =require("express");
const multer=require("multer");

app.use=express();


//3.configure storage:
const storage = multer.diskStorage({
   destination:function(req,file,cb){
    cb(null,"upload/");
   },
   filename: function(req,file,cb){
    cb(null,Data.now()+"-" + file.originalname);
   }
});


//diskstorage(): when file arrives multer ask two question:
//1.where should save the file
//2.what would be the name of the file:

//1. destination:function....
//=> it gives the answer of where should upload 
//=> this function run and return cb(null,"upload/") - save uploaded file in upload folder
//public/upload/profile.js



//2. what would be name of that file:
//file name function will be run: 
//this function return cb(null,Data.now()+"-"+file.originalname);
// means save it in a original name no need to change the file name
// something like this: 1719056789000-photo.jpg
//Data.now: creates unique name to each uploaded file for ex: user 1 have uploaded profile.jpg and use 2 also have uploaded profile.jpg two filw with same that's why we use Data.now



//cb - callback function

//visual flow:
// User uploads:
// photo.jpg
//       │
//       ▼
// destination()
//       │
//       ▼
// uploads/
//       │
//       ▼
// filename()
//       │
//       ▼
// 1719056789000-photo.jpg
//       │
//       ▼
// Saved as:

// uploads/1719056789000-photo.jpg





//notes:
const storage=multer.diskStorage(...)
//creates storage configuration that tells mutliple:
//1.destination: "where to save the file"
//2.filename: provide a unique name to uploaded file
//3. cb(): send answer back to multer
