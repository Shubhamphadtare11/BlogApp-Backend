const express = require("express");
const app = express();

require("dotenv").config();
const PORT=process.env.PORT || 3000;

//middleware= It is used for JSON body parse
app.use(express.json());

const blog = require("./routes/blog")

//mount

app.use("/api/v1", blog);

const connectWithdb = require("./config/database");

connectWithdb();

//start server

app.listen(PORT,()=>{
    console.log(`App started at Port no ${PORT}`); 
})

app.get("/",(req,res)=>{
    res.send(`<h1>Homepage</h1>`)
})