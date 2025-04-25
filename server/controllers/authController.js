const bcrypt = require("bcrypt")
const User = require("../Model/user.js")


let userData = {}
//  POST

exports.registerUser = async (req ,res) => {   // 👈 CHAT GPT THE HOLE FUNCTION
    const {username, email, password} = req.body;

    userData = req.body

    try{
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({username: username ,email: email , password: hashedPassword})
       

      // Save user info in session
      req.session.user = { id: newUser._id, username: newUser.username };

        res.status(200).json({
            message: "Registration successful"
        })
        
    }
    catch(e){
        if (e.code === 11000) {
            return res.status(400).json({ message: "Username or email already exists" });
          }
          console.log(e)
        res.status(500).json({
            message: "Failed to register user"
        })
    }
}

exports.logIn_post = async (req ,res) => {
        const {email , password} = req.body;

     userData = req.body

    try{
        const newUser = await User.findOne({email: email})
            if(!newUser) {
              return  res.status(404).json({message: "User not found"})
            }
        const validPassword = await bcrypt.compare(password , newUser.password) 
           if(!validPassword) {
               return res.status(404).json({message: "The password is wrong"})
           } 
        
           // Save user info in session
           req.session.user = { id: newUser._id, username: newUser.username };

           res.status(200).json({
            message: "Registration successful"
           })
       
    
    }
    catch(e){
            res.status(500).json({
                message: "Faild to Login user"
            })
    }
    
}

exports.log_out = async (req , res) => {
    req.session.destroy((err) => {
      
      if (err) {
        return res.status(500).json({message: "Logout faild"})
      }

      res.clearCookie("connect.sid")// Remove session cookie

      res.status(200).json({
        message: "Logged out successfully"})
    })
}


//GET

exports.checkAuth = async (req, res) => {
    if (!req.session.user) {
      return res.json({ isAuthenticated: false });
    }
    // Session is enough proof of auth; no DB needed
    res.json({ 
      isAuthenticated: true,
      user: req.session.user // Return cached session data
    });
  };


 


