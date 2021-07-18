const  connect = require("./config/db");

const express = require("express");
const app=express();
require('dotenv').config();

const router = require("./routes/userRouter");

const bodyParser = require('body-parser');

const postRoutes = require("./routes/postRoutes");

//connect mongodb databse
connect();

app.use(bodyParser.json());

app.use("/",router);
app.use("/",postRoutes);


app.get('/',(req,res) =>{
    res.send('Hello Portfolio Maker');
})


const PORT= process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Your app is running');
});