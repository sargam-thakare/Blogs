var express = require("express");
var path = require("path"); //handling and transforming file paths.
var mongo = require("mongoose"); 
var bodyParser = require('body-parser'); 
var morgan = require("morgan"); 

var app = express();
var port = process.env.port || 5000;

var cors = require('cors')
app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

 
var db = mongo.connect("mongodb://127.0.0.1:27017/myblogs",  { useNewUrlParser: true, useCreateIndex: true },
function(err, response){
   if(err){ console.log('Failed to connect to ' + db); }
   else{ console.log('Connected to ' + db, ' + ', response); }
});
 

var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// var studentSchema = new Schema({    
//     name: { type: String   },     
//     address: { type: String   },   
//     email: { type: String },     
//     contact: { type: String },     
// },{ versionKey: false });
 


// var model = mongoose.model('student', studentSchema, 'student');

// const student = require('./routes/student');
// const faculty=require('./routes/facultyreg');
// const studentatt=require('./routes/studentatt');
const blogs = require('./routes/blogs');

// app.use('/student', student);
// app.use('/faculty',faculty)
// app.use('/studentatt',studentatt)
app.use('/blogs', blogs);


app.listen(port,function(){ 
    console.log("server start on port"+ port);
})


// //api for get data from database
// app.get("/api/getdata",function(req,res){ 
//  model.find({},function(err,data){
//     console.log("innnn")
//             if(err){
//                 console.log("ieroroornn")
//                 res.send(err);
//             }
//             else{     
//                 console.log("success")      
//                 res.send(data);
//                 }
//         });
// })


// //api for Delete data from database
// app.post("/api/Removedata",function(req,res){ 
//  model.remove({ _id: req.body.id }, function(err) {
//             if(err){
//                 res.send(err);
//             }
//             else{  
//                    res.send({data:"Record has been Deleted..!!"});           
//                }
//         });
// })


// //api for Update data from database
// app.post("/api/Updatedata",function(req,res){ 
//  model.findByIdAndUpdate(req.body.id, { name:  req.body.name, address: req.body.address, contact: req.body.contact,email:req.body.email }, 
// function(err) {
//  if (err) {
//  res.send(err);
//  return;
//  }
//  res.send({data:"Record has been Updated..!!"});
//  });
// })  


// //api for Insert data from database
// app.post("/api/savedata",function(req,res){ 
     
//     var mod = new model(req.body);
//         mod.save(function(err,data){
//             if(err){
//                 console.log("errrr")
//                 res.send(err);              
//             }
//             else{    
//                 console.log("erpost sucesss  rrr")  
//                  res.send({data:"Record has been Inserted..!!"});
//             }
//         });
// })
    
// call by default index.html page
// app.get("*",function(req,res){ 
//     res.sendFile(srcpath +'/index.html');
// })

//server stat on given port

/*
Path handling and transforming file paths.
*/
/*Mongoose is an Object Data Modeling (ODM) library for MongoDB 
and Node.js. It manages relationships between data, provides
schema validation, and is used to translate between 
objects in code and the representation of those objects in MongoDB.
*/

/*
Body-parser is the Node. js body parsing middleware. 
It is responsible for parsing the incoming request bodies in a middleware 
before you handle it.
*/

/*
Morgan is a HTTP request logger middleware for Node. js. It simplifies the process 
of logging requests to your application. 
*/

/*
We Create server.js file on root directory for writing nodejs apis
 for our Create ,Insert,Delete,Update. Give port number for 
 application and run on server. In this file we write the code
  for all required dependancies and create schema of our database 
  collection document and write code for api's for performing operation.

*/