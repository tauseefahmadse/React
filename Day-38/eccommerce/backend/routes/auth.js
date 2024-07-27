const express = require('express');
const login = require('../controllers/auth');

const authRoute = express.Router();

//Authentication - login - Signup 
// when we need input from user
//JWT jason web Token 256 char random string 
authRoute.post("/login", login) // refactor route with login controller

module.exports= authRoute