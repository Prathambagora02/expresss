import express from 'express';
const router = express.Router();

router.get("/" , (req , res)=>{
 res.render("home")
})
router.get("/about" , (req , res)=>{
 res.render("about")
})
router.get("/contact" , (req , res)=>{
 res.render("contact")
})
router.get("/service" , (req , res)=>{
 res.render("service")
})
router.get("/login" , (req , res)=>{
 res.render("login")
})
router.get("/register" , (req , res)=>{
 res.render("register")
})

export default router;