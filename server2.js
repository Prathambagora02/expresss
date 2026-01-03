import express from "express";
import url from 'url';

const app = express();


const urlRoute="<h2>Click to redirect!!!</h2><a href='/'>Home</a><br/><br/><a href='/about'>About</a><br/><br/><a href='/contact'>Contact</a><br/><br/><a href='/service'>Service</a><br/><br/><a href='/register'>Register</a><br/><br/><a href='/login'>Login</a>";

app.get("/" , (req , res)=>{
 res.send("<h1>Home page</h1>" +urlRoute)
})
app.get("/about" , (req , res)=>{
 res.send("<h1>about page</h1>"+urlRoute)
})
app.get("/contact" , (req , res)=>{
 res.send("<h1>contact page</h1>"+urlRoute)
})
app.get("/service" , (req , res)=>{
 res.send("<h1>service page and method GET</h1>"+urlRoute)
})
app.post("/service" , (req , res)=>{
 res.send("<h1>service page anf method POST</h1>"+urlRoute)
})
app.put("/service" , (req , res)=>{
 res.send("<h1>service page and method PUT</h1>"+urlRoute)
})
app.patch("/service" , (req , res)=>{
 res.send("<h1>service page and method PATCH</h1>"+urlRoute)
})
app.get("/service" , (req , res)=>{
 res.send("<h1>service page</h1>"+urlRoute)
})
app.get("/register" , (req , res)=>{
 res.send("<h1>register page</h1>"+urlRoute)
})
app.get("/login" , (req , res)=>{
    //const users=url.parse(req.url,true).query
    const users = req.query;
    console.log("name" , users.name);
    console.log("email" , users.email); 
    res.send("<h1>login page</h1>"+urlRoute)

})

//to handle annonomous url routing 

app.listen(8081);
console.log("Server invoked at port http://localhost:8081");    