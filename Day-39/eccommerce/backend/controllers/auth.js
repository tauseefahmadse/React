const validator = require('email-validator')
const login = (req, res) => {
  const db = {
    email: "pny@gmail.com",
    password: "12345",
  };

  const { email, password } = req.body;
  if(!validator.validate(email)){
    res.status(401).send("Email is not valid")
    return ;
  }
  else if(!password){
    res.status(401).send("Please enter your password")
    return ;
  }
  else if (email == db.email && password == db.password) {
    res.status(200).send(`Mr admin Your email is ${email} now you are logged in`);
  } 
  else {
    res.status(401).send("Invalid Credentials");
    return;
  }
};
module.exports = login;
