import express from "express";

const app = express();

app.get("/" , (req , res)=>{
 res.send("<h1>Home page</h1>")
})
app.get("/about" , (req , res)=>{
 res.send("<h1>about page</h1>")
})
app.get("/contact" , (req , res)=>{
 res.send("<h1>contact page</h1>")
})
app.get("/service" , (req , res)=>{
 res.send("<h1>service page</h1>")
})

app.listen(8081);
console.log("Server invoked at port http://localhost:8081");    