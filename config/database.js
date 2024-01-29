const mongoose = require("mongoose");


require("dotenv").config();

const connectWithdb = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("db connected successfully"))
    .catch((error)=>{
        console.log("DB connection issue");
        console.log(error);
        process.exit(1);
    })
}

module.exports = connectWithdb;