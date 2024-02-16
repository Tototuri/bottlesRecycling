require('dotenv').config();

//importing the dependencies  
const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")


const app = express();

const port = 6000;

const mongodbURL = process.env.MONGODB_URI; 

mongoose.connect(
    mongodbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(function(result){
    console.log("Connection to the mongoDB successful!");
}).catch(function(error){
    console.log("Connection to the mongoDB failed!", error);
});

/*
mongoose.connect(
    mongodbURL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('Connection to MongoDB successful!');
}).catch((e) => {
    console.log('Connection to MongoDB failed!', e);
});
*/
