
const router = require('express').Router();
var bodyParser = require('body-parser'); 
 const  firebase= require('firebase')
 
firebase.initializeApp({
    apiKey: "AIzaSyDQnTB8qKEc8oI-UPkbM5DfZcIPCFBxO-8",
    authDomain: "friendly-magnet-319316.firebaseapp.com"
  })


router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
let blogs = require('../models/exercise.model');

//app.post('/', urlencodedParser, function (req, res) {
router.route('/').get((req,res) => {

console.log(" dhhdhdhdhd  " + firebase.auth().currentUser  )

const query =   req.query.email;
    // Services.find(query)
    console.log(" query          "+req.query.email )
    // console.log("firbaseeeeeeeeeeeeeeeeeeeeeeeeeee "+ firebase.auth().currentUser.displayName )
    console.log("inside .get route "+req.body.data)
    var newemail = req.body.email;
    console.log("email to find "+newemail+"  "+ req.body.email);
    blogs.find({ email:query})

   
 
.then(blogs => {res.json(blogs)
    console.log("docum "+blogs)})
.catch(err => res.status(400).json('Error: ' +err));
});





router.route('/add').post((req,res) => {

 console.log("inside add blogs")
const email=req.body.email;
const blogname= req.body.blogname;
const description = req.body.description;
const date = req.body.date;

const newblog = new blogs({email,blogname, description, date});
console.log("inside add blogs "+newblog)

 newblog.save()
.then(() => res.json('blogg added!'))
.catch(err => res.status(400).json('Error: '+err));
});





router.route('/:id').get((req,res) => {
blogs.findById(req.params.id)
.then(blogs => res.json(blogs))
.catch(err => res.status(400).json('Error: '+err));
});




router.route('/:id').delete((req,res) => {
blogs.findByIdAndDelete(req.params.id)
.then(blogs => res.json('blogs deleted'))
.catch(err => res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req,res) => {

    console.log("in update blogs")
blogs.findById(req.params.id)
.then(blogs => {
   
blogs.blogname = req.body.blogname;
blogs.description = req.body.description;
blogs.date = req.body.date;
 blogs.save()
.then(() => res.json('blogs updated !'))
.catch(err => res.status(400).json('Error: '+err));
})
.catch(err => res.status(400).json('Error: '+err));
});


module.exports = router;