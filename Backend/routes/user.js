const express = require('express');
const { registerUser,loginUser } = require('../handler/user');
// const auth = require("./middlewares/auth")
const userRouter = express.Router();


// userRouter.get('/users',getAllUsers)
userRouter.post('/users',registerUser)
userRouter.post('/users/login',loginUser)
// userRouter.get('/users/getLoggedinuser',getLoggedInUsers)

module.exports = userRouter