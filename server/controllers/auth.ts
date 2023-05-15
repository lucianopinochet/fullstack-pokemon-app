import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import User from '../model/User.js'
import express from 'express'

export const register = async (req: express.Request, res: express.Response) => {
  try{
    const {
      userName,
      firstName,
      lastName,
      email,
      password,
      picturePath,
    } = req.body
    console.log(userName)
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    const newUser = new User({
      userName,
      firstName,
      lastName,
      password: passwordHash,
      picturePath,
      email,
    })
    console.log(newUser)
    const savedUser = await newUser.save()
    const token = jwt.sign({ id:savedUser._id}, process.env.JWT_KEYWORD)
    res.status(201).json({userName:userName, picturePath:picturePath ? picturePath : '', token:token}) 
  } catch (err) {
    console.log(err)
    res.status(500).json({error:(err as Error)})
  }
}

export const login = async (req: express.Request, res:express.Response) => {
  try {
    const {userName, password} = req.body
    const user = await User.findOne({userName:userName})
    if(!user) return res.status(400).json({msg:"User doesn't exist."})

    const match = await bcrypt.compare(password, user.password)
    if(!match) return res.status(400).json({msg:"Invalid password"})
    
    const token = jwt.sign({ id:user._id}, process.env.JWT_KEYWORD)
    console.log(user)
    res.status(200).json({token, user })
  }catch(err){
    res.status(500).json({error:(err as Error)})
  }
}
