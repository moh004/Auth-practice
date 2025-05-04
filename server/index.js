require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const MONGODB_URI = process.env.MONGODB 
const router = require("./Route/authRoute.js")
const cors = require("cors")
const MongoStore = require("connect-mongo")
const session = require("express-session")


app.use(express.json());  

app.use(cors({
    origin: 'https://auth-practice-mu.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allows cookies/sessions
    allowedHeaders: ['Content-Type', 'Authorization'] 
}));

app.set("trust proxy", 1); // trust first proxy (needed for secure cookies )


app.use( 
    session({
       secret: process.env.SECRET,
       resave: false, 
       saveUninitialized: false ,
       store: MongoStore.create({
        mongoUrl: MONGODB_URI,
        collectionName: "session"
       }),
       cookie: {
        httpOnly: true,
        secure: true, //  true if using HTTPS
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 14 // 14 days
    }
    })
)

app.use("/api" , router)

mongoose.connect(MONGODB_URI)
.then(() => console.log("mongodb is connected !!"))
.catch((e) => console.log(e))




app.listen(8000)