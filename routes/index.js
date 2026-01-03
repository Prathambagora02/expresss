import express from 'express';
const router = express.Router();

router.get("/" , (req , res)=>{
 res.send("<h1> / or /Home url invoked , visitor pannel</h1>")
})
router.get("/about" , (req , res)=>{
 res.send("<h1>about page ,  visitor pannel</h1>")
})
router.get("/contact" , (req , res)=>{
 res.send("<h1>contact page ,  visitor pannel</h1>")
})
router.get("/service" , (req , res)=>{
 res.send("<h1>service page ,  visitor pannel</h1>")
})

export default router;