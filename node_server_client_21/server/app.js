require("dotenv").config();
const express = require('express');
const app = express();
const sequelize = require("./db");
const cors = require("cors");
let character = require("./controllers/charactercontroller"); 
const user = require("./controllers/usercontroller") 


app.post("/post", (req,res) =>{
    console.log("connect to React");
    res.redirect("/");
});




sequelize.sync();
app.use(require('./middleware/headers'));
app.use(cors());
app.use(express.json());




app.use('/user', user);



app.use('/character', character);



app.listen(5000, function(){
    console.log("app is running on 5000")
})