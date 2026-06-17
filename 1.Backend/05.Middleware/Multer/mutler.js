//intro:
// it is a middleware used to hadnle file or img upload
//express can handle json only(app.use(express.json())) but can't handle file upload (multipart/form-data) by itself


//it reads the uploaded by file and make it available in req.file or req.files


//basic work flow:
// client -> multipart/form-data -> mutlter middleware -> req.file -> controller -> database 
//ex:
Router.post(
    "upload",
    upload.single("image"),
    uploadController
);

//multer runs first then req.file it contains uploaded file information



//3.storage engine: 
//normally mutlter stores uploaded file in disk but with memory storage it stores in ram instead of disk.
//const storage=multer.diskStorage({...});
//with memory storage:
const storage=multer.memoryStorage();

//when to use memory storage: when you don't want to save the file locally
//common flow:
//user upload image -> multer stores in ram -> req.file.buffer -> send directly to cloudinary/s3 -> done



//4. single() vs array() vs field():
//single file - upload.single("image") - access (req.file)
//array - upload.array("image",5) - access req.files
//fields - upload.fields([{name: "profile",maxcount:1}, { name: "resume", maxcount:1}])
//access -> req.files.profile , req.files.resume




//file validation:
fileFilter:function(req,file,cb){
    if(file.mimetype.startsWith("image/")){
        cb(null,true);//cb(error,acceptfile)
    }else{
        cb(new Error("Only image allowed"));
    }
}
//cb it is just js variable in the place of callback (req,file,callback)
//mimetype: multipurpose internet mail extension type(file's type/category).
