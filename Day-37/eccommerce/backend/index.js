
const productRoute = require("./routes/products");
const express = require("express");
const app = express();


app.get("/", (req, res)=>{
    res.send("<h1>Test Api</h1>")
})

app.use("/api", productRoute)




app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

