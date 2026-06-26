//mongodb- stores data(the database)
//mongoose- work as a translator/manager btw node js and mongodb

// Why Mongoose?
// =>  without mongoose express connect directly with mongodb driver..
// Why do most MERN developers choose Mongoose instead of using the driver directly? - mongoose built on top of mongodb driver, the driver provide low level acces, very flexiable & fast but more manual work,
// while mongoose adds, high level  features like schema, validation, middleware , defaults and model 
// => with mongoose: express-> mongoose -> mongdb driver -> mongodb database
// Mongoose: it is ODM(OBJECT DOCUMENT MAPPER - means acts as a translator ) but it uses object document modelling to get the job
// object document mapper : it maps js object to mongodb document (tool,lib)
// object document modelling :  it is kind of feature(schemas , model, validation)

//notes : modelling focus on How should my data be structured?, What fields?, what validation?, What defaults?, What relationships?

// Connection : 
// before using mongodb , node js most connect to mongodb
// connect mongoose=require("mongoose")
// mongoose.connect( "mongodb://127.0.0.1:27017/learnex");
//express -> connect to db -> ready to store the  data




// Schema :


// Model
// Documents
// Validation
// Defaults
// Required
// Enum




