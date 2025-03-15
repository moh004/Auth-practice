const {Router} = require("express")
const router = Router()
const { logIn_post ,log_out , registerUser , checkAuth} = require("../controllers/authController")

// i am usings MVC =>  { model,  view, contoroller}
                 
router.post("/register" , registerUser)

router.post("/login" ,  logIn_post)

router.delete("/logout" , log_out)

router.get("/check-auth" , checkAuth)



module.exports = router