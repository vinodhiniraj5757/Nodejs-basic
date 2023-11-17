const express=require('express');
const app=express();
const path=require("path");

const imagePath=path.join(__dirname,"images");
app.use('/images',express.static(imagePath));

app.get("/first",(req,res)=>{
    res.sendFile(path.join(__dirname,"MY HOBBY.html"));
})

app.use(express.static(path.join(__dirname,'cuddalore')));

app.get("/second",(req,res)=>{
    res.sendFile(path.join(__dirname,"CUDDALORE", 'tourists place.html'));
})


app.get("/third",(req,res)=>{
    res.sendFile(path.join(__dirname,"coffee", 'COFFEE.HTML'));
})

app.listen(7777,()=>{
    console.log("server is running");
})
