const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
//allow cross-origin requests code START
const allowedOrigins = process.env.allowedOrigins.split(',');
app.use(cors()); //uncomment this to enable all CORS and delete cors(corsOptions) in below code
app.use(cors({
    origin: function (origin, callback){
        //allow request with no origin
        //like mobile apps or curl requests
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin)===-1){
            var msg="the cors policy for this site dose not "+ "allow access from the specified origin.";
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}))
//allow cross-origin requests code end

//*****validation rules START********//
const valFunctions= require('./validators/validate');
//*****validation rules END********//


//app Routes
//create application/json parser
const jsonParser = bodyParser.json();
//create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({extended: false});
app.post('/signup', jsonParser, function(req,res){
    //do something
    if(valFunctions.checkInputDataNULL(req, res)) return false;
    if(valFunctions.checkInputDataQquanlity(req, res)) return false;

    var dbFunctions = require('./models/connector');
    dbFunctions.createUser(req, res);
});

app.post('/login', jsonParser, function(req,res){
    //do something
    if(valFunctions.checkInputDataNULL(req, res)) return false;
    if(valFunctions.checkInputDataQquanlity(req, res)) return false;

    var dbFunctions = require('./models/connector');
    dbFunctions.loginUser(req, res);
});

app.get('/user', jsonParser, function(req, res){
    var dbFunctions = require('./models/connector');
    var userEmail = valFunctions.checkJWTToken(req, res);
    console.log(userEmail);
    if(!userEmail) return false;
    dbFunctions.getUser(userEmail, res);
});

app.post('/updateuser', jsonParser, function(req, res){
    if(valFunctions.checkInputDataNULL(req, res)) return false;
    if(valFunctions.checkInputDataQquanlity(req, res)) return false;
    var dbFunctions = require('./models/connector');
    var userEmail = valFunctions.checkJWTToken(req, res);
    if(!userEmail) return false;
    dbFunctions.updateUser(userEmail, req, res);
});

app.post('/setlocation', jsonParser, function(req, res){
    if(valFunctions.checkInputDataNULL(req, res)) return false;
    var dbFunctions = require('./models/connector');
    var userEmail = valFunctions.checkJWTToken(req, res);
    if(!userEmail) return false;
    dbFunctions.setLocation(userEmail, req, res);
});

app.get('/getlocation', jsonParser, function(req, res){
    var dbFunctions = require('./models/connector');
    var userEmail = valFunctions.checkJWTToken(req, res);
    if(!userEmail) return false;
    dbFunctions.getLocation(userEmail, res);
});

app.use('/',(req,res)=> res.send("Welcome GeoLcation ~"));
app.listen(process.env.PORT, ()=>console.log('server start on port:' + process.env.PORT));