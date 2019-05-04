const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

//allow cross-origin requests code START
const allowedOrigins = process.env.allowedOrigins.split(',');
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

app.use('/',(req,res)=> res.send("Welcome GeoLcation ~"));
app.listen(process.env.PORT, ()=>console.log('server start on port:' + process.env.PORT));