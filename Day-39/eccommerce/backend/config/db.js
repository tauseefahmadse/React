
const mongoose = require('mongoose');
//const { MONGODB_URL } = require('./config');

const dbConnect = () => {
  //working ok
  //mongoose.connect('mongodb+srv://tauseef:12345@cluster0.ntlf1bx.mongodb.net/')

  //not working as localhost
   //mongoose.connect('mongodb://localhost:27017/')
  
   mongoose.connect('mongodb://127.0.0.1:27017/')
  .then(conn => console.log("db is connected"))
  .catch(err => console.log("db connection failed"))
}

module.exports = dbConnect;