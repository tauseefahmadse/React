
const mongoose = require('mongoose');
//const { MONGODB_URL } = require('./config');

const dbConnect = () => {
  mongoose.connect('mongodb://localhost:27017/demo_db')
  .then(conn => console.log("db is connected"))
  .catch(err => console.log("db connection failed"))
}

module.exports = dbConnect;