//importing the dependencies  
const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")


const app = express();

const port = 6000;

const mongodbURL = "mongodb+srv://tototuri2022:EGzniN7yY1WtoqPs@cluster1.f0kecw0.mongodb.net/?retryWrites=true&w=majority"

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
