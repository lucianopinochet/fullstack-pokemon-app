import express from "express"
import mongoose, {ConnectOptions} from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import path from "path"
import { fileURLToPath } from "url"
import multer from "multer"
import bodyParser from 'body-parser'


import {register} from "./controllers/auth.js"
import User from './model/User.js'
import authRoutes from './routes/auth.js'
import user from './data/user.js'


dotenv.config()
const app = express()

app.use(express.json())
// app.use(express.urlencoded({ extended:true, limit:'30mb'}))
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan('common'))
app.use(bodyParser.json({ limit: "30mb"}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use('/assets', express.static(path.join(process.cwd(),'public/assets')))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/assets')
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname)
  },
})
const upload = multer({storage})

app.post("/auth/register", upload.single('picturePath'), register)

app.use("/auth", authRoutes)

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions)
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`Server Port: ${process.env.PORT}`))
    // User.collection.drop() 
    //User.insertMany(user) 
  })