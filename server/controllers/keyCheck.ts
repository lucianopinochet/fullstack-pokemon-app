import { error } from 'console'
import User from '../model/User.js'
import express from 'express'

export const userNameCheck = async (req: express.Request, res: express.Response) => {
  try{
    const {userName} = req.body
    const check = await User.findOne({userName:userName})
    if(check){
      res.status(201).json(0) 
    }else{
      res.status(201).json(1)
    }
  }catch(e){
    console.log(e)
    res.status(500).json({error:(e as Error)}) 
  }
}
export const emailCheck = async (req: express.Request, res: express.Response) => {
  try{
    const {email} = req.body
    const check = await User.findOne({email:email})
    if(check){
      res.status(201).json(0) 
    }else{
      res.status(201).json(1)
    }
  }catch(e){
    console.log(e)
    res.status(500).json({error:(e as Error)}) 
  }

}