import mongoose from "mongoose"

interface IUser {
  userName: string
  password: string
  firstName: string
  lastName: string
  email: string
  picturePath: string
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    userName:{
      type: String,
      required: true,
      max:20,
      unique: true,
    },
    password:{
      type: String,
      required: true,
      min:8,
      unique: false,
      max:20,
    },
    firstName:{
      type: String,
      required: true,
      unique: false,
      max:50,
    },
    lastName:{
      type: String,
      required: true,
      unique: false,
      max:50,
    },
    email:{
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    picturePath:{
      type: String,
      unique: false,
      default: "",
    },
  },{timestamps:true}
)
const User = mongoose.model<IUser>("User", UserSchema)
export default User