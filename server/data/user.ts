import mongoose from "mongoose";

const user = [{
  _id: new mongoose.Types.ObjectId(),
    firstName: "test",
    lastName: "me",
    userName:'someone',
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpeg",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
}]
export default user