//1.File input: this let user to select the file from device
{/* <input type="file"/>
<input type="file" multiple /> */} //allow multiple file


//2. Store selected file:
const [file, setfile]= useState(null);
function handlechange(e){
    select(e.target.files[0])
}

<input  type="file" onChange={handlechange}/>
//e.target.files: it is filelist and files[0]: is first selected file



//3. form data: file cannot be sent as normal json instaed use json
const formData = new FormData();
formData.append("image",file);
formData.append("title", "Profile picture");
formData.append("image", file)


//4. upload with axios: 
await axios.post("/upload", formData)
// --> with authentication
await axios.post("/upload", formData,{
    header:{
        Authorization: `Bearer ${token}`
    },
})


//5. upload with fetch: 
await fetch("/upload",{
    method: "POST",
    body: formData
})

//6. backend receive file using middlware such as  multer
// React
//    │
// Select File
//    │
// FormData
//    │
// POST /upload
//    │
// Express + Multer
//    │
// Save File


//complete flow:
// Choose File
//       ↓
// Store in State
//       ↓
// Create FormData
//       ↓
// Append File
//       ↓
// POST Request
//       ↓
// Express + Multer
//       ↓
// Upload Success