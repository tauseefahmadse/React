const login = (req,res)=>{
  // const email = req.body.email;
  // const password  = req.body.password;

  const {email, password, address} = req.body;
  //console.log(email,password);
  res.send('Email: ' + email + "\n"+ 
           "password: " + password + "\n"+
           "address: " + address
          );

}
module.exports= login