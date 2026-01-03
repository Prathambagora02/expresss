import express from 'express';
const router = express.Router();

router.get("/" , (req , res)=>{
 res.render("adminhome")
})
router.get("/cpadmin" , (req , res)=>{
 res.render("cpadmin")
})
router.get("/epadmin" , (req , res)=>{
 res.render("epadmin")
})
router.get("/manageusers" , (req , res)=>{
 res.render("manageusers")
})

export default router;