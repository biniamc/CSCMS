const express = require("express");
const bodyParser = require("body-parser");
const cors =require("cors");

const app = express();

var corsOptions = {
    origin:"http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

const db = require("./server/models");
db.mongoose
    .connect(db.url,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    .then(() =>{
        console.log("connected to the database!"); 
    })
    .catch(err => {
        console.log("cannot connect to the database!", err);
        process.exit;
    });
 
app.get("/",(req,res) =>{
    res.json({ message:"welcome to customer complaint service and complaint system"});
});

const PORT =process.env.PORT || 8080;
app.listen(PORT,() =>{
    console.log('server is running on port ${PORT}.');
});