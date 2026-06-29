//mongodb- stores data(the database)(schema-less)
//mongoose- work as a translator/manager btw node js and mongodb

// 1. Why Mongoose?
// =>  without mongoose express connect directly with mongodb driver..
// Why do most MERN developers choose Mongoose instead of using the driver directly? - mongoose built on top of mongodb driver, the driver provide low level acces, very flexiable & fast but more manual work,
// while mongoose adds, high level  features like schema, validation, middleware , defaults and model 
// => with mongoose: express-> mongoose -> mongdb driver -> mongodb database
// Mongoose: it is ODM(OBJECT DOCUMENT MAPPER - means acts as a translator ) but it uses object document modelling to get the job
// object document mapper : it maps js object to mongodb document (tool,lib)
// object document modelling :  it is kind of feature(schemas , model, validation)

//notes : modelling focus on How should my data be structured?, What fields?, what validation?, What defaults?, What relationships?

// 2. Connection : 
// before using mongodb , node js most connect to mongodb
// connect mongoose=require("mongoose")
// mongoose.connect( "mongodb://127.0.0.1:27017/learnex");
//express -> connect to db -> ready to store the  data
// Express Starts
//       │
//       ▼
// mongoose.connect()
//       │
//       ▼
// MongoDB Connected
//       │
//       ▼
// Ready for CRUD



// 3. Schema : json like configuration file , blueprint of the database
// schema -> document
const userSchema=new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String
    }
)



// 4. Model: 
// - schema can only describe the struct it cann't insert or read data so for that we creates model
const user= mongoose.model(
    "User",
    userSchema
);
//now model can perform CRUD
// WORK FLOW: schema(blueprint) -> model(builder) -> Crud operation(House)


// 5. Documents: a single record (collection(group of records and document is the piece of record))
const User=new mongoose.model({
    name:String,
    email:String,
    password: String
});

// -> now : 
const User=new User(
    {
        name:"Beauty",
        email:"beauty@gmail.com",
        password:"abc123"
    }
)
//this is document
//6. collection -> many documents
// the actual piece of data created, read or saved


// Validation : it checks whether the incoming data follows the schemas rules or not before saving 
//for ex : in schema it is written : { user: string} -> and user sent user: 123 so validation will check the user is tring or not if not then reject
// why we need validation: mongodb is schemaless and flexiable by default..it will blindly accept any incoming data to prevent messy or corrupted data we use validation


// 7. Enum : enumeration means (only allows value from predefined list)
//for ex: 
// role:
//     {
//         type:String,
//         enum:[
//             "user",
//             "admin"
//         ],
//     default: "user"
//     }




//complete work flow: 
// Client -> express -> mongoose connection -> schema -> validation -> model -> Document -> MOngoDb 


